import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const quizzes = [
    { title: "Birds", emoji: "🕊️", slug: "birds" },
    { title: "Aircraft", emoji: "✈️", slug: "aircraft" },
    { title: "Dinosaurs", emoji: "🦖", slug: "dinosaurs" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-700 to-purple-900 p-6">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">Pick a Quiz 🧠</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <button
            key={quiz.slug}
            onClick={() => router.push(`/quiz/${quiz.slug}`)}
            className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-all"
          >
            <h2 className="text-lg font-semibold flex items-center">
              {quiz.emoji} {quiz.title}
            </h2>
          </button>
        ))}
      </div>
    </div>
  );
}