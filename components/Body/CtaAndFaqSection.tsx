'use client'
import { useState } from 'react';
import { MdArrowDownward } from 'react-icons/md';

const CtaAndFaqSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Child&apos;s Learning Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of parents who are making learning fun and effective for their kids.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cursor-pointer bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium shadow-md">
              Start Free Trial
            </button>
            <button className="cursor-pointer bg-transparent hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium border-2 border-white">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Learning Fun Hub
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="faq-question w-full flex justify-between items-center p-6 text-left hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                   <MdArrowDownward
                    className={`transition-transform ${activeFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="faq-answer p-6 pt-0 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const faqData = [
  {
    question: "What age group is this suitable for?",
    answer:
      "Learning Fun Hub is designed for children aged 4-12. Our content is divided into age-appropriate categories, with different difficulty levels and teaching approaches for each developmental stage.",
  },
  {
    question: "How much screen time will this require?",
    answer:
      "We recommend age-appropriate screen time limits. Our platform includes built-in timers and reminders. Most activities are designed to be effective in 15-30 minute sessions, and our parent dashboard helps you manage usage.",
  },
  {
    question: "Is this aligned with school curricula?",
    answer:
      "Yes! Our content is developed by educators and aligns with Common Core and other major educational standards. Many teachers use our platform to supplement classroom learning.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all features. No credit card is required to start the trial, so you can see the value before committing.",
  },
];

export default CtaAndFaqSection;
