import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We understand your business goals, market dynamics, and user behavior to craft the perfect solution strategy.',
      icon: '🔍',
    },
    {
      number: '02',
      title: 'Design & Architecture',
      description: 'Our team designs intuitive interfaces and robust technical architecture aligned with your objectives.',
      icon: '🎨',
    },
    {
      number: '03',
      title: 'Development & Innovation',
      description: 'We build using latest technologies, best practices, and innovative approaches to ensure excellence.',
      icon: '⚙️',
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Rigorous testing and quality assurance ensure your product is reliable, secure, and performant.',
      icon: '✓',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Seamless deployment to production with continuous monitoring and 24/7 support for your peace of mind.',
      icon: '🚀',
    },
    {
      number: '06',
      title: 'Growth & Optimization',
      description: 'We continuously analyze, optimize, and scale your solution to meet evolving market and user demands.',
      icon: '📈',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A methodical approach combining technology, human insight, and proven processes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-400 transition-all duration-300 h-full hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  <CheckCircle2 size={16} className="mr-2" />
                  Complete & Verified
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Approach?</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Technology-Forward:</strong> We stay at the cutting edge of innovation while ensuring stability and maintainability.</span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Human-Centered:</strong> Every decision is guided by human insight, creativity, and deep understanding of user needs.</span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Process-Driven:</strong> Proven methodologies ensure consistency, quality, and predictable outcomes.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
