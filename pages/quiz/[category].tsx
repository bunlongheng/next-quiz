import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const router = useRouter();
  const { category } = router.query;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!category) return;

    fetch(`/data/${category}.json`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error loading questions:", error));
  }, [category]);

  if (!category) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-700 to-purple-900 p-6 text-white">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 capitalize">{category} Quiz</h1>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="bg-white text-gray-900 p-4 rounded-xl shadow-lg w-full max-w-2xl mb-4">
            <h2 className="font-semibold text-lg">{q.question}</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {q.options.map((option, i) => (
                <button
                  key={i}
                  className="bg-gray-200 p-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}