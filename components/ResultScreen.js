import React, { useEffect } from "react";
import Confetti from "react-confetti";

const ResultScreen = ({ score, total }) => {
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    const isPass = score >= total / 2;

    useEffect(() => {
        if (isPass) {
            const congratsSound = new Audio("/sounds/congrats.mp3");
            congratsSound.play();
        }

        const timer = setTimeout(() => {
            window.location.reload();
        }, 15000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                textAlign: "center",
                padding: "50px",
                minHeight: "100vh",
                background: isPass
                    ? "linear-gradient(to bottom, #4CAF50, #2E7D32)" // Green for pass
                    : "linear-gradient(to bottom, #D32F2F, #B71C1C)", // Red for fail
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {isPass && <Confetti />}
            <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>{isPass ? "🎉 WELL DONE!" : "❌ TRY AGAIN!"}</h1>
            <h2 style={{ fontSize: "30px", margin: "20px 0" }}>Your score: {percentage}%</h2>
            <button
                onClick={() => window.location.reload()}
                style={{
                    marginTop: "20px",
                    padding: "15px 30px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    background: "#FFF",
                    color: "#333",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                }}
            >
                Back
            </button>
        </div>
    );
};

export default ResultScreen;
