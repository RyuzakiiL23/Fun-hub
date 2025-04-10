'use client'
import { useState } from 'react';
import { MdArrowDownward } from 'react-icons/md';

export default function CtaAndFaqSection(props: any) {
  const lang = props.lang;
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* قسم الدعوة لاتخاذ إجراء (CTA) */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            هل أنت مستعد لتحويل تجربة تعلم طفلك؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            انضم إلى آلاف الآباء الذين يجعلون التعلم ممتعًا وفعالًا لأطفالهم.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="cursor-pointer bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium shadow-md">
              ابدأ الفترة التجريبية المجانية
            </button>
            <button className="cursor-pointer bg-transparent hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium border-2 border-white">
              تحدث مع خبرائنا
            </button>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section id="FAQ" className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h2>
            <p className="text-lg text-gray-600">
              كل ما تحتاج معرفته حول Learning Fun Hub
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
    question: "ما الفئة العمرية المناسبة لهذا البرنامج؟",
    answer:
      "تم تصميم Learning Fun Hub للأطفال من سن 4 إلى 12 عامًا. يتم تقسيم المحتوى حسب الفئة العمرية، مع مستويات صعوبة مختلفة وأساليب تعليمية مناسبة لكل مرحلة.",
  },
  {
    question: "كم من الوقت سيقضيه الطفل أمام الشاشة؟",
    answer:
      "نوصي بتحديد وقت الشاشة بناءً على عمر الطفل. منصتنا تتضمن مؤقتات وتنبيهات مدمجة. معظم الأنشطة مصممة لتكون فعالة خلال جلسات تتراوح من 15 إلى 30 دقيقة، كما تساعدك لوحة تحكم أولياء الأمور على إدارة الاستخدام.",
  },
  {
    question: "هل المحتوى متوافق مع المناهج الدراسية؟",
    answer:
      "نعم! يتم تطوير المحتوى من قبل معلمين ويتماشى مع معايير التعليم الأساسية (Common Core) وغيرها من المعايير التعليمية المعتمدة. يستخدم العديد من المعلمين منصتنا لدعم التعلم في الصف.",
  },
  {
    question: "هل يمكنني التجربة قبل الاشتراك؟",
    answer:
      "بالطبع! نحن نقدم فترة تجريبية مجانية لمدة 14 يومًا مع إمكانية الوصول الكامل إلى جميع الميزات. لا تحتاج إلى بطاقة ائتمان لبدء التجربة، لذا يمكنك تقييم القيمة قبل الاشتراك.",
  },
];
