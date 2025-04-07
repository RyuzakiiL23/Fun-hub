import Image from "next/image";
import { FC } from "react";
import { FaStar } from "react-icons/fa6";
import {
  FaGamepad,
  FaQuestionCircle,
  FaBookOpen,
  FaArrowRight,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGamepad className="text-blue-600 text-4xl" />,
    color: "bg-blue-200",
    title: "Educational Games",
    description:
      "Fun games that teach math, reading, science and more. Kids learn without even realizing it!",
  },
  {
    icon: <FaQuestionCircle className="text-green-600 text-4xl" />,
    color: "bg-green-200",
    title: "Interactive Quizzes",
    description:
      "Adaptive quizzes that adjust difficulty based on your child's progress and learning pace.",
  },
  {
    icon: <FaBookOpen className="text-purple-600 text-4xl" />,
    color: "bg-purple-200",
    title: "Storytelling Tools",
    description:
      "Creative tools that help children develop language skills through interactive storytelling.",
  },
];

const HomeSections: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#bae6fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Make Learning Fun for Your Child
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Engaging quizzes, interactive lessons, and educational games
                that kids love and parents trust. Watch your child develop a
                passion for learning!
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md">
                  Start Free Trial
                </button>
                <button className="bg-white cursor-pointer hover:bg-gray-50 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium border border-blue-600 shadow-md">
                  See How It Works
                </button>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="https://illustrations.popsy.co/amber/digital-nomad.svg"
                  alt="Kids learning"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute -bottom-6 -left-6 bg-yellow-100 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-yellow-400 rounded-full p-2 mr-3">
                      <FaStar/>
                    </div>
                    <div className="text-black">
                      <p className="font-bold">5,000+</p>
                      <p className="text-sm">Happy Kids</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">
            Trusted by parents and schools worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {[
              [
                "https://logo.clearbit.com/nationalgeographic.com",
                "National Geographic",
              ],
              ["https://logo.clearbit.com/pbs.org", "PBS"],
              ["https://logo.clearbit.com/duolingo.com", "Duolingo"],
              ["https://logo.clearbit.com/abc.net.au", "ABC"],
              ["https://logo.clearbit.com/sesamestreet.org", "Sesame Street"],
            ].map(([src, alt], idx) => (
              <div
                key={idx}
              className="relative h-12 square-ratio  grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain"
                  sizes="50vw, 100px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Learning Made Exciting
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines education with entertainment to create an
            engaging learning experience for children of all ages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon, color, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-md transition-all text-black duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`${color} w-16 h-16 rounded-full p-4 flex items-center justify-center mb-6`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn more <FaArrowRight className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default HomeSections;
