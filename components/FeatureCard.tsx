interface FeatureCardProps {
  icon: string;
  color: string;
  title: string;
  content: string;
}

export default function FeatureCard({ icon, color, title, content }: FeatureCardProps) {
  return (
    <div className="feature-card bg-white p-8 rounded-xl shadow-md transition-all duration-300">
      <div className={`bg-${color}-100 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
        <i className={`fas fa-${icon} text-${color}-600 text-2xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{content}</p>
      <a href="#" className="text-blue-600 font-medium inline-flex items-center">
        Learn more <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  );
}