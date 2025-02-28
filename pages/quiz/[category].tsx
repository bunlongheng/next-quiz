import { useRouter } from "next/router";

export default function QuizPage() {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold">{category ? `${category} Quiz` : "Loading..."}</h1>
    </div>
  );
}