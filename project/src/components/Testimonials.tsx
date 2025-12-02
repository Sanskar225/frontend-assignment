import { Star, Quote, ChevronRight, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'CEO, TechStart India',
      company: 'E-commerce Platform',
      content: 'Pinak Idea Lab completely transformed our digital infrastructure. Their deep understanding of both cutting-edge technology and business operations resulted in a 300% increase in platform performance and a 45% reduction in operational costs. Truly exceptional partnership.',
      rating: 5,
      initials: 'RK',
      avatarColor: 'from-blue-500 to-blue-600',
      stats: [
        { label: 'Performance', value: '+300%', change: 'improvement' },
        { label: 'Costs', value: '-45%', change: 'reduction' },
      ],
      duration: '6-month project',
      verified: true,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Product Manager',
      company: 'FinTech Solutions Inc.',
      content: 'The team exceeded all expectations with their innovative approach. They delivered a product that our users absolutely love—resulting in 60% higher engagement and 25% increased conversion rates. Their attention to detail and user-centric design philosophy set them apart.',
      rating: 5,
      initials: 'PS',
      avatarColor: 'from-cyan-500 to-cyan-600',
      stats: [
        { label: 'Engagement', value: '+60%', change: 'increase' },
        { label: 'Conversion', value: '+25%', change: 'improvement' },
      ],
      duration: '4-month engagement',
      verified: true,
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Founder & CTO',
      company: 'Growth Analytics Platform',
      content: 'Professional, reliable, and consistently innovative. They understood our complex data visualization requirements and delivered a solution that now serves 50,000+ active users with 99.9% uptime. Their technical expertise combined with business acumen drives real impact.',
      rating: 5,
      initials: 'AP',
      avatarColor: 'from-emerald-500 to-emerald-600',
      stats: [
        { label: 'Active Users', value: '50k+', change: 'monthly' },
        { label: 'Uptime', value: '99.9%', change: 'reliability' },
      ],
      duration: '8-month partnership',
      verified: true,
    },
    {
      id: 4,
      name: 'Sneha Mehta',
      title: 'Operations Director',
      company: 'Healthcare Technology',
      content: 'Their automation solutions saved us 120+ hours per week in manual processes. The implementation was seamless, and their ongoing support ensures we continue to optimize. Highly recommend for any organization looking to streamline operations.',
      rating: 5,
      initials: 'SM',
      avatarColor: 'from-violet-500 to-violet-600',
      stats: [
        { label: 'Time Saved', value: '120+ hrs', change: 'weekly' },
        { label: 'Efficiency', value: '+80%', change: 'improvement' },
      ],
      duration: '3-month implementation',
      verified: true,
    },
    {
      id: 5,
      name: 'Vikram Singh',
      title: 'Head of Technology',
      company: 'Retail Chain',
      content: 'The mobile app they developed increased our in-store sales by 35% through innovative features. Their understanding of consumer behavior and retail technology transformed our customer experience. A true strategic partner.',
      rating: 5,
      initials: 'VS',
      avatarColor: 'from-amber-500 to-amber-600',
      stats: [
        { label: 'Sales Growth', value: '+35%', change: 'increase' },
        { label: 'App Rating', value: '4.9/5', change: 'stars' },
      ],
      duration: '5-month development',
      verified: true,
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      title: 'Digital Transformation Lead',
      company: 'Global Manufacturing',
      content: 'Working with Pinak Idea Lab was a game-changer. Their cloud migration strategy saved us $500K annually while improving scalability. Their team combines technical excellence with practical business solutions.',
      rating: 5,
      initials: 'AR',
      avatarColor: 'from-pink-500 to-pink-600',
      stats: [
        { label: 'Cost Savings', value: '$500K', change: 'annual' },
        { label: 'Scalability', value: '10x', change: 'improvement' },
      ],
      duration: '9-month transformation',
      verified: true,
    },
  ];

  const stats = [
    { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'text-amber-500' },
    { icon: Award, value: '98%', label: 'Client Retention', color: 'text-emerald-500' },
    { icon: TrendingUp, value: '150+', label: 'Projects Completed', color: 'text-blue-500' },
    { icon: CheckCircle, value: '100%', label: 'On-Time Delivery', color: 'text-cyan-500' },
  ];

  return (
    <section 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Client Success Stories
          </span>
          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Trusted by Industry{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Leaders & Innovators
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Discover why businesses across sectors choose us as their technology partner 
            for digital transformation and innovation.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 shadow-sm 
                         hover:shadow-md transition-shadow duration-300 text-center"
              >
                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === testimonial.id;
            
            return (
              <article
                key={testimonial.id}
                className="group relative"
                onMouseEnter={() => setActiveIndex(testimonial.id)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(testimonial.id)}
                onBlur={() => setActiveIndex(null)}
              >
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.avatarColor.replace('from-', 'from-').replace('to-', 'to-')} 
                              rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl -z-10`}></div>

                {/* Testimonial Card */}
                <div 
                  className={`bg-white rounded-2xl p-6 lg:p-8 border transition-all duration-500 h-full 
                            ${isActive ? 'border-blue-300 shadow-2xl' : 'border-gray-200 shadow-lg hover:shadow-xl'}`}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-blue-400 opacity-20" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                        aria-label={`${testimonial.rating} star rating`}
                      />
                    ))}
                    {testimonial.verified && (
                      <div className="ml-2 flex items-center gap-1 text-xs font-medium text-emerald-600 
                                    bg-emerald-50 px-2 py-1 rounded-full">
                        <CheckCircle size={12} />
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <blockquote className="mb-6">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </blockquote>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {testimonial.stats.map((stat, idx) => (
                      <div 
                        key={idx}
                        className="bg-gray-50 rounded-lg p-3 text-center hover:bg-gray-100 transition-colors"
                      >
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {stat.label}
                          <span className="block text-xs text-blue-600 font-medium">
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`w-12 h-12 ${testimonial.avatarColor} rounded-full 
                                      flex items-center justify-center text-white font-bold text-sm`}>
                          {testimonial.initials}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full 
                                      border-2 border-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {testimonial.duration}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-blue-50 via-white to-cyan-50 rounded-2xl 
                      p-8 lg:p-12 border border-blue-200 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              See what we can achieve together. Schedule a discovery call to discuss 
              how our expertise can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 
                               text-white font-semibold rounded-xl hover:shadow-lg 
                               transition-all duration-300 flex items-center justify-center gap-2 group">
                Schedule a Discovery Call
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl 
                               border-2 border-gray-300 hover:border-blue-400 
                               transition-all duration-300">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos (Placeholder) */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <h4 className="text-center text-gray-600 font-medium mb-8">
            Trusted by forward-thinking companies
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="h-16 bg-gray-100 rounded-xl flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="text-gray-400 font-semibold">Client {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}