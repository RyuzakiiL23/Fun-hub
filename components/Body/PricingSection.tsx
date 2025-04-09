import { FaCheck, FaTimes } from "react-icons/fa";

const PricingSection = (props: any) => {
  const lang = props.lang;
  return (
    <section id="pricing" className="py-16 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works for your family. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="flex flex-col justify-between bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div>
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">
                $7.99
                <span className="text-lg text-gray-500 font-normal">
                  /month
                </span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Access to all basic games</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>100+ educational quizzes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>1 child profile</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <FaTimes className="mt-1 mr-2" />
                  <span>Advanced progress tracking</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-gray-100 border border-blue-600 cursor-pointer hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>

          {/* Family Plan */}
          <div className="bg-white flex flex-col justify-between p-8 rounded-xl shadow-lg border-2 border-blue-500 relative">
            <div>
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MOST POPULAR
              </div>
              <h3 className="text-xl font-bold mb-4">Family</h3>
              <p className="text-4xl font-bold mb-6">
                $12.99
                <span className="text-lg text-gray-500 font-normal">
                  /month
                </span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>All Starter features</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Up to 3 child profiles</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Advanced progress tracking</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Premium content access</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>

          {/* Annual Plan */}
          <div className="flex flex-col justify-between bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <div>
              <h3 className="text-xl font-bold mb-4">Annual</h3>
              <p className="text-4xl font-bold mb-6">
                $99
                <span className="text-lg text-gray-500 font-normal">/year</span>
              </p>
              <p className="text-blue-600 font-medium mb-4">Save 36%</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>All Family features</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Up to 5 child profiles</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2" />
                  <span>Exclusive bonus content</span>
                </li>
              </ul>
            </div>
            <button className="w-full bg-gray-100 border border-blue-600 cursor-pointer hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
