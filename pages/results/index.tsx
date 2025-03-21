import { useRouter } from "next/router";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ResultsPage() {
  const router = useRouter();
  const { score, total } = router.query;
  const [isPass, setIsPass] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Check if the user passed the quiz
  useEffect(() => {
    if (score && total) {
      setIsPass(Number(score) >= Number(total) / 2);
    }
  }, [score, total]);

  // Play congrats sound if the user passes
  useEffect(() => {
    if (isPass) {
      const congratsSound = new Audio("/sounds/congrats.mp3");
      congratsSound.play();
    }
  }, [isPass]);

  // Get window dimensions for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial window size
    handleResize();

    // Update window size on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 text-white ${
        isPass
          ? "bg-gradient-to-b from-green-500 to-green-700" // Green gradient for pass
          : "bg-gradient-to-b from-red-500 to-red-700" // Red gradient for fail
      }`}
    >
      {/* Confetti Animation */}
      {isPass && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false} // Stop confetti after animation
          numberOfPieces={500} // Number of confetti pieces
          gravity={0.2} // How fast confetti falls
        />
      )}

      <h1 className="text-4xl font-bold mb-6">
        {isPass ? "🎉 WELL DONE!" : "❌ TRY AGAIN!"}
      </h1>
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