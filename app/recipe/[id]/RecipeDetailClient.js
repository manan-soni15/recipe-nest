"use client";

import { useState, useRef, useEffect } from "react";

export default function RecipeDetailClient({ recipe }) {
  const [speaking, setSpeaking] = useState(false);
  const [delay, setDelay] = useState(5); // delay in seconds
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const utteranceRef = useRef(null);
  const timerRef = useRef(null);

  const instructions = recipe.instructions
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((step) => step.trim().replace(/^\d+[\.\)]\s*/, ""));

  const speakStep = (index) => {
    if (index >= instructions.length) {
      setSpeaking(false);
      utteranceRef.current = null;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(instructions[index]);
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => {
      setSpeaking(false);
      utteranceRef.current = null;

      // Start timer before next step
      timerRef.current = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, delay * 1000);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleSpeak = () => {
    if (!window.speechSynthesis) {
      alert("Speech synthesis not supported.");
      return;
    }

    if (speaking || utteranceRef.current) {
      // Stop
      window.speechSynthesis.cancel();
      clearTimeout(timerRef.current);
      setSpeaking(false);
      setCurrentStepIndex(0);
      utteranceRef.current = null; // ✅ Clear reference so button resets
      return;
    }

    // Start
    setCurrentStepIndex(0);
    speakStep(0);
  };

  useEffect(() => {
    if (currentStepIndex > 0 && currentStepIndex < instructions.length) {
      speakStep(currentStepIndex);
    }
  }, [currentStepIndex]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-sm text-gray-600 mb-4">Category: {recipe.category}</p>

      {recipe.userName && (
        <div className="flex items-center gap-3 mb-6">
          <img
            src={recipe.userImage || "/default-avatar.png"}
            alt={recipe.userName}
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-sm text-gray-700">By {recipe.userName}</p>
        </div>
      )}

      <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Instructions:</h2>
      <ol className="list-decimal list-inside space-y-1">
        {instructions.map((step, index) => (
          <li key={index} className="ml-4">
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleToggleSpeak}
          className={`px-4 py-2 rounded transition text-white ${
            speaking ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {speaking ? "Stop ⏹️" : "Speak 🔊"}
        </button>

        <label className="flex items-center gap-2">
          <span className="text-gray-700">wait time before speaking next instruction (sec):</span>
          <input
            type="number"
            min="1"
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-16 border rounded px-2 py-1"
          />
        </label>
      </div>
    </div>
  );
}
