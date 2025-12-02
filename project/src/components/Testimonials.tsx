import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'CEO, TechStart India',
      content: 'Pinak Idea Lab transformed our entire digital infrastructure. Their understanding of both technology and business was exceptional.',
      rating: 5,
      initials: 'RK',
    },
    {
      name: 'Priya Sharma',
      title: 'Product Manager, Digital Solutions',
      content: 'The team delivered beyond expectations. Their innovative approach and attention to detail resulted in a product our users absolutely love.',
      rating: 5,
      initials: 'PS',
    },
    {
      name: 'Amit Patel',
      title: 'Founder, Growth Analytics',
      content: 'Professional, reliable, and innovative. They understood our complex requirements and delivered a solution that drives real business impact.',
      rating: 5,
      initials: 'AP',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses across industries to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
