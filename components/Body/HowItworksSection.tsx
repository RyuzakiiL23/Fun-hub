import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HowItWorksSection = (props: any) => {
  const lang = props.lang;

  return (
    <section id="how-it-works" className="py-16 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            كيفاش خدام Learning Fun Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            خطوات بسيطة باش وليدك يتحمس للتعلم 🎉
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "سجل",
              desc: "صاوب حساب و عرّفنا على السن و الاهتمامات ديال وليدك.",
              color: "blue",
            },
            {
              step: 2,
              title: "خصص التعلم",
              desc: "النظام ديالنا كيتأقلم مع المستوى و طريقة التعلم ديال ولدك.",
              color: "green",
            },
            {
              step: 3,
              title: "تفرج كيفاش كيتعلم",
              desc: "شوف التقارير و فرح مع وليدك كيفاش متحمس للتعلم 🎯",
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
      </div>
    </section>
  );
};

const TestimonialsSection = (props: any) => {
  const lang = props.lang;
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah M.",
      stars: 5,
      text: "ولدِي عندو 7 سنين و ولى هو اللي كيطالب باش يدير ألعاب الحساب! النقاط ديالو طلعو و ولى واثق من راسو.",
      color: "blue",
    },
    {
      initials: "DJ",
      name: "David J.",
      stars: 5,
      text: "أدوات السرد القصصي عجبو بنتي بزاف، وولات كتكتب قصص بوحدها! زادت في الخيال و الكلمات.",
      color: "green",
    },
    {
      initials: "PT",
      name: "Priya T.",
      stars: 4.5,
      text: "أخيييراً تطبيق تعليمي ماشي خصني نغوت باش يستعملو! ألعاب العلوم هوما المفضلين عند ولدي.",
      color: "purple",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            آش كيقولو الآباء
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ماشي غير حنا اللي كنقولوها - سمع من الآباء اللي شافو الفرق 👨‍👩‍👧‍👦
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
