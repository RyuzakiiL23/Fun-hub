import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ParentsDashboard(props: any) {
  const lang = props.lang;
  return (
    <section id="Dashboard" className="text-black bg-white shadow-md overflow-hidden">
      <div className="md:flex rounded-xl border m-16 border-blue-500 shadow-lg">
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
        <div className="md:w-1/2 bg-gray-100 flex items-center rounded-xl justify-center p-8">
          <Image
            src="https://illustrations.popsy.co/amber/designer.svg"
            alt="Parent dashboard"
            width={500}
            height={500}
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
