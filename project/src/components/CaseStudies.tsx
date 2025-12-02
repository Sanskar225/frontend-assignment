import { TrendingUp, Users, Zap, ChevronRight, Clock, BarChart3 } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      icon: TrendingUp,
      statsIcon: Clock,
      title: 'E-Commerce Platform',
      client: 'FashionRetail Inc.',
      challenge: 'Legacy system slowing down sales operations with 4-second load times causing 30% cart abandonment',
      result: '3x faster checkout, 45% increase in conversions',
      timeline: '12 weeks',
      metrics: [
        { label: 'Load Time', value: '0.8s', change: '-80%' },
        { label: 'Conversion', value: '+45%', change: 'improved' },
        { label: 'Revenue', value: '+60%', change: 'growth' },
      ],
      color: 'from-emerald-500 to-teal-600',
      badge: 'E-commerce',
    },
    {
      icon: Users,
      statsIcon: BarChart3,
      title: 'Social Analytics Dashboard',
      client: 'MediaFlow Network',
      challenge: 'Complex data visualization requirements across 15+ platforms with real-time processing needs',
      result: 'Real-time insights, 10k+ active users, 2M daily data points processed',
      timeline: '16 weeks',
      metrics: [
        { label: 'Active Users', value: '10k+', change: 'monthly' },
        { label: 'Data Points', value: '2M/day', change: 'processed' },
        { label: 'Load Time', value: '<1s', change: 'real-time' },
      ],
      color: 'from-blue-500 to-cyan-600',
      badge: 'Analytics',
    },
    {
      icon: Zap,
      statsIcon: TrendingUp,
      title: 'Automation Suite',
      client: 'LogisticsPro Corp',
      challenge: 'Manual processes consuming 40+ hours/week with 15% error rate in inventory management',
      result: '95% automation achieved, ROI in 6 months, 99.8% accuracy rate',
      timeline: '20 weeks',
      metrics: [
        { label: 'Automation', value: '95%', change: 'achieved' },
        { label: 'ROI Time', value: '6 months', change: 'fast' },
        { label: 'Accuracy', value: '99.8%', change: 'improved' },
      ],
      color: 'from-orange-500 to-red-600',
      badge: 'Automation',
    },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Case Studies
          </span>
          <h2 
            id="case-studies-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Transforming Businesses Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Innovation
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover how our technology solutions have driven measurable results 
            for companies across various industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            const StatsIcon = caseStudy.statsIcon;
            
            return (
              <article
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                         transition-all duration-500 hover:-translate-y-2 border border-gray-200 
                         hover:border-blue-200 flex flex-col"
              >
                {/* Gradient Header */}
                <div className={`relative h-40 bg-gradient-to-br ${caseStudy.color} overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-black/20 rounded-full backdrop-blur-sm">
                      {caseStudy.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 lg:p-8 flex-grow">
                  {/* Client & Timeline */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-700">
                      {caseStudy.client}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseStudy.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                        Challenge
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide">
                        Result
                      </h4>
                    </div>
                    <p className="text-emerald-800 font-medium text-sm leading-relaxed">
                      {caseStudy.result}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <button
                      className="flex items-center justify-between w-full text-blue-600 hover:text-blue-700 
                               font-medium text-sm group/link"
                      aria-label={`View details for ${caseStudy.title}`}
                    >
                      <span>View Detailed Case Study</span>
                      <ChevronRight 
                        size={16} 
                        className="group-hover/link:translate-x-1 transition-transform" 
                      />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-600 mb-6">
            Ready to transform your business with technology?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 
                          text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 
                          hover:-translate-y-0.5">
            Start Your Project
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}