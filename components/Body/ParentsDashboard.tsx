import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function ParentsDashboard(props: any) {
  const lang = props.lang;
  return (
    <section id="Dashboard" className="text-black bg-white shadow-md overflow-hidden">
      <div className="md:flex rounded-xl border m-16 border-blue-500 shadow-lg">
        <div className="md:w-1/2 p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">لوحة تحكم أولياء الأمور</h3>
          <p className="text-gray-600 mb-6">
            تتيح لك لوحة تحكم أولياء الأمور الشاملة تتبع تقدم طفلك، وتحديد أهداف التعلم، وإدارة تجربته التعليمية.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "تقارير تقدم مفصلة",
              "أدوات إدارة الوقت",
              "مسارات تعلم مخصصة",
              "ضوابط نظام المكافآت",
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
            عرض نموذج للوحة التحكم
          </button>
        </div>
        <div className="md:w-1/2 bg-gray-100 flex items-center rounded-xl justify-center p-8">
          <Image
            src="https://illustrations.popsy.co/amber/designer.svg"
            alt="لوحة تحكم أولياء الأمور"
            width={500}
            height={500}
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
