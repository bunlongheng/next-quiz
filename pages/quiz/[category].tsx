import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const router = useRouter();
  const { category } = router.query;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!category) return;

    fetch(`/data/${category}.json`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, [category]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    // Check if the answer is correct
    if (option === questions[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null); // Reset selected answer
      } else {
        // Quiz is over, show results
        router.push(`/results?score=${score}&total=${questions.length}`);
      }
    }, 1000); // 1-second delay before moving to the next question
  };

  if (!category || questions.length === 0) {
    return <p className="text-center text-white">Loading...</p>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-700 to-purple-900 p-6 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 capitalize">
        {category} Quiz
      </h1>
      <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="font-semibold text-lg mb-4">
          {currentQuestion.question}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={`p-4 rounded-lg transition ${
                selectedAnswer === option
                  ? option === currentQuestion.answer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 hover:bg-blue-500 hover:text-white"
              }`}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 text-lg">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
    </div>
  );
}