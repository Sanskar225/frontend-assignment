import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
              <Sparkles size={16} />
              AI-Powered Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
              Transform Ideas Into
              <span className="text-blue-600"> Digital Reality</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We leverage technology, human ingenuity, and intelligent processes to conceptualize
              and deliver innovative software products and services that drive your business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight size={20} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-blue-600"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl transform rotate-6 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-blue-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Innovation & Excellence</div>
                  <div className="text-sm text-gray-600">Technology meets creativity</div>
                </div>
              </div>

              <div className="h-72 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Professional team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">4+</div>
                  <div className="text-xs text-gray-700 font-medium">Years</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-4 border border-cyan-200">
                  <div className="text-2xl font-bold text-cyan-600">50+</div>
                  <div className="text-xs text-gray-700 font-medium">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-4 border border-sky-200">
                  <div className="text-2xl font-bold text-sky-600">100%</div>
                  <div className="text-xs text-gray-700 font-medium">Dedicated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
