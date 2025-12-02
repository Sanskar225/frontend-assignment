import { Code, Globe, Smartphone, Database, Zap, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices for optimal performance and scalability.',
      color: 'blue',
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver seamless user experiences across all devices.',
      color: 'cyan',
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Cutting-edge AI and machine learning solutions to automate processes and unlock intelligent insights.',
      color: 'indigo',
    },
    {
      icon: Globe,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces crafted with attention to detail and user-centered design principles.',
      color: 'sky',
    },
    {
      icon: Database,
      title: 'Data Services',
      description: 'Robust data management, analytics, and visualization solutions to drive informed business decisions.',
      color: 'teal',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline workflows and boost productivity with intelligent automation and process optimization.',
      color: 'blue',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    cyan: 'from-cyan-500 to-cyan-600',
    indigo: 'from-blue-600 to-blue-700',
    sky: 'from-sky-500 to-sky-600',
    teal: 'from-teal-500 to-teal-600',
  };

  if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.5; }
      }
      .animate-pulse {
        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
    `;
    if (!document.head.querySelector('style[data-pulse-animation]')) {
      style.setAttribute('data-pulse-animation', 'true');
      document.head.appendChild(style);
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions at the intersection of technology, economics, and user behavior
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses] || colorClasses.blue} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
