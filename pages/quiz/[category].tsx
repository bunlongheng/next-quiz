import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const router = useRouter();
  const { category } = router.query;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  
  const optionColors = [
    "from-blue-500 to-sky-800", 
    "from-green-500 to-teal-800",  
    "from-yellow-500 to-amber-800",  
    "from-pink-500 to-indigo-800", 
  ];

  useEffect(() => {
    if (!category) return;

    fetch(`/data/${category}.json`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, [category]);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    
    const isCorrect = option === questions[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
      const correctSound = new Audio("/sounds/correct.mp3");
      correctSound.play();
    } else {
      const wrongSound = new Audio("/sounds/wrong.mp3");
      wrongSound.play();
    }

    
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer(null); 
      } else {
        
        router.push(`/results?score=${score + (isCorrect ? 1 : 0)}&total=${questions.length}`);
      }
    }, 500); 
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
        <div className="space-y-4">
          {currentQuestion.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option)}
              className={`
                w-full p-4 rounded-lg text-left
                bg-gradient-to-r ${optionColors[i % optionColors.length]}
                text-white font-semibold
                transition-all duration-300
                hover:scale-105 hover:shadow-xl
                focus:outline-none focus:ring-2 focus:ring-blue-300
                ${selectedAnswer === option
                  ? option === currentQuestion.answer
                    ? "bg-gradient-to-r from-green-500 to-green-600 shadow-lg" 
                    : "bg-gradient-to-r from-red-500 to-red-600 shadow-lg" 
                  : ""
                }
              `}
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