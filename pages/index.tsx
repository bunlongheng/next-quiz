import Image from "next/image";
import { useRouter } from "next/router";

const quizzes = [
  { title: "Aircraft", emoji: "✈️", image: "/images/aircrafts.png", tags: ["Vehicles", "Technology"], slug: "aircraft" },
  { title: "Birds", emoji: "🕊️", image: "/images/birds.png", tags: ["Nature", "Animals"], slug: "birds" },
  { title: "Construction Vehicles", emoji: "🚜", image: "/images/construction-vehicles.png", tags: ["Machines", "Vehicles"], slug: "construction-vehicles" },
  { title: "Dinosaurs", emoji: "🦖", image: "/images/dinosaurs.png", tags: ["History", "Science"], slug: "dinosaurs" },
  { title: "Fruits", emoji: "🍍", image: "/images/fruits.png", tags: ["Food", "Health"], slug: "fruits" },
  { title: "Insects", emoji: "🐝", image: "/images/insects.png", tags: ["Nature", "Tiny Creatures"], slug: "insects" },
  { title: "Reptiles", emoji: "🐍", image: "/images/reptiles.png", tags: ["Cold-Blooded", "Wildlife"], slug: "reptiles" },
  { title: "U.S. States", emoji: "🗺️", image: "/images/states.png", tags: ["Geography", "Trivia"], slug: "us-states" },
];

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-purple-700 to-purple-900 p-6">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">Pick a Quiz 🧠</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {quizzes.map((quiz) => (
          <button
            key={quiz.slug}
            onClick={() => router.push(`/quiz/${quiz.slug}`)}
            className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-all flex flex-col items-center w-full"
          >
            <Image src={quiz.image} alt={quiz.title} width={150} height={100} className="rounded-md mb-2" />
            <h2 className="text-lg font-semibold flex items-center text-gray-800">
              {quiz.emoji} {quiz.title}
            </h2>
            <div className="mt-2 flex gap-2 flex-wrap justify-center">
              {quiz.tags.map((tag) => (
                <span key={tag} className="bg-purple-200 text-purple-800 text-xs font-semibold px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}