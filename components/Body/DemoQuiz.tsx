'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "شحال كتسوى 5 + 7؟",
    options: ["10", "11", "12", "13"],
    correctIndex: 2,
  },
];

export default function DemoQuiz(props: any) {
  const lang = props.lang;
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
    <section id="TryQuiz" className="bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">جرب الكويز التفاعلي ديالنا</h2>
          <p className="text-lg text-gray-700">
            شوف كيفاش كنخليو التعلم ممتع بهاد الكويز النموذجي. مناسب للأطفال من 6 حتى لـ 10 سنين!
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex justify-center mb-8 space-x-2 rtl:space-x-reverse">
            {["6-8", "9-10", "11-12"].map((age) => (
              <button
                key={age}
                onClick={() => setAgeGroup(age)}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
                  ageGroup === age
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-blue-600 border-blue-400 hover:bg-blue-100"
                }`}
              >
                {age} سنوات
              </button>
            ))}
          </div>

          {!quizComplete ? (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {current.question}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {current.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`text-lg p-4 rounded-xl border transition duration-200 text-gray-700 text-center shadow-sm hover:shadow-md ${
                      selectedOption === idx
                        ? idx === current.correctIndex
                          ? "bg-green-100 border-green-500"
                          : "bg-red-100 border-red-500"
                        : "bg-gray-50 border-gray-200 hover:bg-blue-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-6 text-center"
                >
                  <p className="text-lg font-medium text-gray-800">
                    {selectedOption === current.correctIndex
                      ? "صحيح! 🎉"
                      : "أووو! الجواب ماشي هو هادا 😅"}
                  </p>
                </motion.div>
              )}

              {showFeedback && (
                <div className="text-center">
                  <button
                    onClick={handleNext}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
                  >
                    السؤال الموالي
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">برافو عليك!</h3>
              <p className="text-gray-700 mb-6">
                كملتي الكويز النموذجي. تخيل مئات بحالو مصممين حسب مستوى ولدك!
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow">
                جرب المنصة كاملة
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
