import { useRouter } from "next/router";

export default function ResultsPage() {
  const router = useRouter();
  const { score, total } = router.query;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Quiz Results</h1>
      <p className="text-2xl mb-4">
        Your score: {score} / {total}
      </p>
      <button
        onClick={() => router.push("/")}
        className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}