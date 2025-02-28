export default function Home() {
  const quizzes = [
    { title: "Aircraft", emoji: "✈️", image: "/images/aircrafts.png", tags: ["Vehicles", "Technology"] },
    { title: "Birds", emoji: "🕊️", image: "/images/birds.png", tags: ["Nature", "Animals"] },
    { title: "Construction Vehicles", emoji: "🚜", image: "/images/construction-vehicles.png", tags: ["Machines", "Vehicles"] },
    { title: "Dinosaurs", emoji: "🦖", image: "/images/dinosaurs.png", tags: ["History", "Science"] },
    { title: "Fruits", emoji: "🍍", image: "/images/fruits.png", tags: ["Food", "Health"] },
    { title: "Insects", emoji: "🐝", image: "/images/insects.png", tags: ["Nature", "Tiny Creatures"] },
    { title: "Reptiles", emoji: "🐍", image: "/images/reptiles.png", tags: ["Cold-Blooded", "Wildlife"] },
    { title: "U.S. States", emoji: "🗺️", image: "/images/states.png", tags: ["Geography", "Trivia"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 flex flex-col items-center p-6">
      <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">Pick a Quiz 🧠</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-all duration-200"
          >
            <img src={quiz.image} alt={quiz.title} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 className="text-lg font-semibold flex items-center">
              {quiz.emoji} {quiz.title}
            </h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {quiz.tags.map((tag, i) => (
                <span key={i} className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}