import { Code, Globe, Smartphone, Database, Zap, Bot, ArrowRight, CheckCircle, TrendingUp, Users, Cpu, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      description: 'Build high-performance, scalable web applications using modern frameworks like React, Next.js, and cutting-edge technologies.',
      detailed: [
        'Custom web applications',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'CMS development',
        'API development & integration',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL'],
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-50 to-blue-100',
      projects: '150+',
      timeframe: '4-12 weeks',
      cta: 'View Web Projects',
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Create seamless mobile experiences with native and cross-platform solutions for iOS and Android.',
      detailed: [
        'Native iOS & Android apps',
        'React Native development',
        'Flutter applications',
        'Mobile UI/UX design',
        'App Store optimization',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-cyan-500 to-cyan-600',
      gradient: 'from-cyan-50 to-cyan-100',
      projects: '80+',
      timeframe: '8-16 weeks',
      cta: 'Explore Mobile Apps',
    },
    {
      id: 3,
      icon: Bot,
      title: 'AI Integration',
      description: 'Transform your business with intelligent automation, machine learning, and AI-powered insights.',
      detailed: [
        'Machine Learning models',
        'Natural Language Processing',
        'Computer Vision solutions',
        'Predictive analytics',
        'AI chatbots & assistants',
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'PyTorch'],
      color: 'from-indigo-500 to-indigo-600',
      gradient: 'from-indigo-50 to-indigo-100',
      projects: '45+',
      timeframe: '12-24 weeks',
      cta: 'Discover AI Solutions',
    },
    {
      id: 4,
      icon: Globe,
      title: 'UI/UX Design',
      description: 'Craft intuitive, beautiful interfaces that engage users and drive conversions.',
      detailed: [
        'User research & testing',
        'Wireframing & prototyping',
        'Visual design systems',
        'Interaction design',
        'Design systems',
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle'],
      color: 'from-sky-500 to-sky-600',
      gradient: 'from-sky-50 to-sky-100',
      projects: '200+',
      timeframe: '2-8 weeks',
      cta: 'View Design Portfolio',
    },
    {
      id: 5,
      icon: Database,
      title: 'Data Services',
      description: 'Leverage data to make informed decisions with robust analytics and visualization.',
      detailed: [
        'Data strategy & architecture',
        'BI & analytics dashboards',
        'Data warehousing',
        'Real-time analytics',
        'Data visualization',
      ],
      technologies: ['SQL', 'Power BI', 'Tableau', 'Snowflake', 'BigQuery'],
      color: 'from-teal-500 to-teal-600',
      gradient: 'from-teal-50 to-teal-100',
      projects: '75+',
      timeframe: '6-12 weeks',
      cta: 'Explore Data Solutions',
    },
    {
      id: 6,
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations and boost efficiency with intelligent automation solutions.',
      detailed: [
        'Workflow automation',
        'RPA (Robotic Process Automation)',
        'Business process optimization',
        'Integration automation',
        'Smart notifications',
      ],
      technologies: ['Zapier', 'Make', 'n8n', 'Python', 'Node-RED'],
      color: 'from-violet-500 to-violet-600',
      gradient: 'from-violet-50 to-violet-100',
      projects: '120+',
      timeframe: '4-10 weeks',
      cta: 'Automate Your Workflows',
    },
  ];

  const capabilities = [
    { icon: Cpu, title: 'Scalable Architecture', description: 'Build for growth with cloud-native solutions' },
    { icon: Cloud, title: 'Cloud Deployment', description: 'Deploy and manage on AWS, Azure, or Google Cloud' },
    { icon: CheckCircle, title: 'Quality Assurance', description: 'Rigorous testing for reliability and performance' },
    { icon: TrendingUp, title: 'Performance Optimization', description: 'Speed and efficiency as top priorities' },
    { icon: Users, title: 'Team Augmentation', description: 'Supplement your team with expert developers' },
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      @keyframes glow {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
      }
      .animate-glow {
        animation: glow 4s ease-in-out infinite;
      }
    `;
    if (!document.head.querySelector('style[data-services-animations]')) {
      style.setAttribute('data-services-animations', 'true');
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-200 to-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Transformative{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Technology Solutions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We deliver comprehensive digital solutions that combine cutting-edge technology with 
            deep business understanding to drive growth and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;
            
            return (
              <div
                key={service.id}
                className="relative group"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                onFocus={() => setActiveService(service.id)}
                onBlur={() => setActiveService(null)}
              >
                {/* Hover Background Glow */}
                <div className={`absolute inset-0 ${service.gradient} rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}></div>
                
                {/* Service Card */}
                <div 
                  className={`bg-white rounded-2xl p-6 lg:p-8 border transition-all duration-500 h-full 
                            ${isActive ? 'border-blue-300 shadow-2xl scale-[1.02]' : 'border-gray-200 shadow-lg hover:shadow-xl'}`}
                >
                  {/* Icon & Metrics */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center 
                                    justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full 
                                    border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Project Count */}
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.projects}</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Detailed Points */}
                  <div className="space-y-2 mb-6">
                    {service.detailed.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500">Timeline</div>
                      <div className="text-sm font-semibold text-gray-900">{service.timeframe}</div>
                    </div>
                    <button 
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 
                               font-semibold text-sm group/link"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      {service.cta}
                      <ArrowRight 
                        size={16} 
                        className="group-hover/link:translate-x-1 transition-transform" 
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities Section */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How We Deliver Excellence
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 
                           hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm mb-1">{cap.title}</div>
                  <div className="text-xs text-gray-600">{cap.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl p-8 lg:p-12 
                      border border-blue-200 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our experts will analyze your requirements and recommend the perfect solution 
              tailored to your business goals and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 
                               text-white font-semibold rounded-xl hover:shadow-lg 
                               transition-all duration-300 flex items-center justify-center gap-2 group">
                Book a Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl 
                               border-2 border-gray-300 hover:border-blue-400 
                               transition-all duration-300">
                Download Service Catalog (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}