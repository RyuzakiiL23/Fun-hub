'use client'
import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What is 5 + 7?",
    options: ["10", "11", "12", "13"],
    correctIndex: 2,
  },
];

export default function DemoQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [ageGroup, setAgeGroup] = useState("6-8");

  const current = questions[currentQuestionIndex];

  const handleAnswer = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    if (currentQuestionIndex + 1 >= questions.length) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Try Our Interactive Quiz
          </h2>
          <p className="text-lg text-gray-600">
            Experience how we make learning fun with this sample quiz. Perfect for kids aged 6-10!
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <div className="mb-6 flex justify-center space-x-2">
            {["6-8", "9-10", "11-12"].map((age) => (
              <button
                key={age}
                onClick={() => setAgeGroup(age)}
                className={`px-4 cursor-pointer py-2 rounded-full border border-blue-500 text-blue-500 ${
                  ageGroup === age ? "bg-blue-500 text-white" : ""
                }`}
              >
                {age} years
              </button>
            ))}
          </div>

          {!quizComplete ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">{current.question}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {current.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className={`quiz-answer cursor-pointer bg-gray-100 hover:bg-blue-100 p-4 rounded-lg border border-gray-200 text-left ${
                        selectedOption === idx ? (idx === current.correctIndex ? "border-green-500" : "border-red-500") : ""
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 rounded-lg mb-6 bg-gray-100"
                >
                  <p className="text-lg">
                    {selectedOption === current.correctIndex ? "Correct! 🎉" : "Oops! That's not right."}
                  </p>
                </motion.div>
              )}

              {showFeedback && (
                <button
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                  Next Question
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <i className="fas fa-trophy text-yellow-500 text-5xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Great Job!</h3>
              <p className="text-gray-600 mb-6">
                You completed the sample quiz. Imagine hundreds more like this tailored to your child&apos;s level!
              </p>
              <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Start Full Experience
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
