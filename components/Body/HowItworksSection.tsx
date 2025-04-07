import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt, FaCheck } from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Learning Fun Hub Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple steps to get your child excited about learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Sign Up",
              desc: "Create an account and tell us about your child's age and interests.",
              color: "blue",
            },
            {
              step: 2,
              title: "Personalize Learning",
              desc: "Our system adapts to your child's skill level and learning style.",
              color: "green",
            },
            {
              step: 3,
              title: "Watch Them Learn",
              desc: "See progress reports and enjoy your child's excitement for learning.",
              color: "purple",
            },
          ].map(({ step, title, desc, color }) => (
            <div key={step} className="flex flex-col items-center text-center">
              <div
                className={`bg-${color}-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-${color}-600 text-2xl font-bold`}
              >
                {step}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Parent Dashboard</h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive parent dashboard lets you track your child&apos;s
                progress, set learning goals, and manage their experience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Detailed progress reports",
                  "Time management tools",
                  "Custom learning paths",
                  "Reward system controls",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="text-green-500 mt-1 mr-2">
                      <FaCheck />
                    </i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                See Sample Dashboard
              </button>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <Image
                src="https://illustrations.popsy.co/amber/designer.svg"
                alt="Parent dashboard"
                width={500}
                height={500}
                className="w-full h-auto max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah M.",
      stars: 5,
      text: "My 7-year-old actually asks to do the math games now! His grades have improved and he's so much more confident.",
      color: "blue",
    },
    {
      initials: "DJ",
      name: "David J.",
      stars: 5,
      text: "The storytelling tools have been amazing for my daughter's creativity and vocabulary. She writes her own stories now!",
      color: "green",
    },
    {
      initials: "PT",
      name: "Priya T.",
      stars: 4.5,
      text: "Finally an educational app that doesn't feel like a battle to get my son to use. The science games are his favorite.",
      color: "purple",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from parents who&apos;ve seen the
            difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ initials, name, stars, text, color }, i) => (
            <div
              key={i}
              className="testimonial-card bg-gray-50 p-8 rounded-xl border border-gray-200"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-${color}-100 flex items-center justify-center text-${color}-600 font-bold mr-4`}
                >
                  {initials}
                </div>
                <div>
                  <h4 className="font-bold">{name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(Math.floor(stars))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {stars % 1 !== 0 && <FaStarHalfAlt />}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HowItWorksSection, TestimonialsSection };
