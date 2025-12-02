import { CheckCircle2, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We deeply analyze your business objectives, market landscape, and user needs to develop a comprehensive strategy that aligns technology with business goals.',
      icon: '🔍',
      details: ['Requirement Analysis', 'Market Research', 'Solution Blueprint'],
      color: 'from-blue-500 to-blue-600',
      duration: '1-2 weeks',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team creates intuitive user experiences and robust technical foundations, ensuring scalability, maintainability, and exceptional user engagement.',
      icon: '🎨',
      details: ['UI/UX Design', 'System Architecture', 'Technical Specifications'],
      color: 'from-cyan-500 to-cyan-600',
      duration: '2-3 weeks',
    },
    {
      number: '03',
      title: 'Development & Innovation',
      description: 'Using cutting-edge technologies and agile methodologies, we build high-quality solutions with clean code, best practices, and continuous integration.',
      icon: '⚙️',
      details: ['Frontend Development', 'Backend Development', 'API Integration'],
      color: 'from-emerald-500 to-emerald-600',
      duration: '4-8 weeks',
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Comprehensive testing across all layers ensures reliability, security, and optimal performance, with iterative refinement based on feedback.',
      icon: '✓',
      details: ['Quality Assurance', 'Performance Testing', 'Security Audits'],
      color: 'from-amber-500 to-amber-600',
      duration: '1-2 weeks',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Seamless deployment with thorough documentation, monitoring setup, and ongoing support ensures smooth operations and immediate value delivery.',
      icon: '🚀',
      details: ['Production Deployment', 'Monitoring Setup', 'Training & Handover'],
      color: 'from-purple-500 to-purple-600',
      duration: '1 week',
    },
    {
      number: '06',
      title: 'Growth & Optimization',
      description: 'Continuous analysis, optimization, and scaling based on real-world usage data and evolving requirements to maximize long-term success.',
      icon: '📈',
      details: ['Analytics & Insights', 'Performance Optimization', 'Feature Updates'],
      color: 'from-pink-500 to-pink-600',
      duration: 'Ongoing',
    },
  ];

  const methodologies = [
    {
      icon: TrendingUp,
      title: 'Technology-Forward',
      description: 'We leverage the latest technologies while maintaining stability, security, and long-term maintainability of your solutions.',
      points: ['Latest frameworks & tools', 'Cloud-native architecture', 'Future-proof solutions'],
    },
    {
      icon: Users,
      title: 'Human-Centered',
      description: 'Every decision is informed by human insight, empathy, and deep understanding of user behavior and business context.',
      points: ['User research-driven', 'Accessibility-focused', 'Stakeholder collaboration'],
    },
    {
      icon: Zap,
      title: 'Process-Driven',
      description: 'Proven agile methodologies and rigorous quality processes ensure consistency, predictability, and excellence in delivery.',
      points: ['Agile development', 'Continuous integration', 'Quality assurance'],
    },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/50"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Our Methodology
          </span>
          <h2 
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            A Proven Path to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Digital Excellence
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our structured yet flexible approach combines cutting-edge technology with human 
            insight and proven processes to deliver exceptional results.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-cyan-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isLastRow = index >= steps.length - 3;
              
              return (
                <div 
                  key={index}
                  className="relative group"
                  style={{ 
                    marginTop: isEven && !isLastRow ? '2rem' : '0',
                    marginBottom: !isEven && !isLastRow ? '2rem' : '0'
                  }}
                >
                  {/* Step Card */}
                  <div 
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 
                             hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all 
                             duration-500 h-full hover:-translate-y-2"
                  >
                    {/* Step Number & Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div 
                          className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}
                        >
                          {step.number}
                        </div>
                        <div className="text-xs font-medium text-gray-500 px-3 py-1 
                                      bg-gray-100 rounded-full inline-block">
                          {step.duration}
                        </div>
                      </div>
                      <div 
                        className="text-4xl group-hover:scale-125 group-hover:rotate-12 
                                 transition-all duration-500"
                        role="img"
                        aria-label={`${step.title} icon`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Step Details */}
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Verification Indicator */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-blue-600 font-semibold text-sm">
                        <CheckCircle2 size={16} className="mr-2" />
                        Step Complete
                      </div>
                      <ArrowRight 
                        size={18} 
                        className="text-gray-400 group-hover:text-blue-600 
                                 group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </div>
                  </div>

                  {/* Connector Dots (Desktop) */}
                  {index < steps.length - 1 && (
                    <>
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 
                                    border-4 border-white rounded-full bg-gradient-to-r 
                                    from-blue-400 to-cyan-400 shadow-lg z-10"></div>
                      {index < steps.length - 3 && (
                        <div className="hidden lg:block absolute -bottom-8 left-1/2 
                                      -translate-x-1/2 w-8 h-8 border-4 border-white 
                                      rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 
                                      shadow-lg z-10"></div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology Principles */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Our Approach Delivers Results
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our unique combination of methodology pillars ensures every project achieves 
              its objectives efficiently and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 
                           border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 
                                  rounded-xl flex items-center justify-center">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {method.title}
                    </h4>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    {method.points.map((point, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-white/50 rounded-lg 
                                 hover:bg-white transition-colors"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center 
                                      justify-center flex-shrink-0">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-800 font-medium text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl 
                      p-8 lg:p-12 border border-blue-200 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven process can transform your ideas into successful 
              digital solutions. Schedule a free consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 
                               text-white font-semibold rounded-xl hover:shadow-lg 
                               transition-all duration-300 flex items-center justify-center gap-2">
                Book a Free Consultation
                <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl 
                               border-2 border-gray-300 hover:border-blue-400 
                               transition-all duration-300">
                Download Process Guide (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}