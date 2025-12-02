import { ArrowRight, Sparkles, Zap, TrendingUp, Shield, ChevronRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' },
    { value: '100%', label: 'Client Satisfaction', icon: Shield, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { value: '24/7', label: 'Support Available', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  const capabilities = [
    { title: 'AI Integration', description: 'Smart automation solutions' },
    { title: 'Web Development', description: 'Modern, responsive applications' },
    { title: 'Cloud Solutions', description: 'Scalable infrastructure' },
    { title: 'UI/UX Design', description: 'User-centered design approach' },
  ];

  return (
    <section 
      id="home" 
      className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-slate-50 
                 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 
                            rounded-full text-blue-700 text-sm font-medium mb-6 shadow-sm"
                   aria-label="Specialization badge">
                <Sparkles size={16} className="text-blue-600" />
                <span>AI-Powered Digital Solutions</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              </div>

              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
              >
                Where{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Innovation
                </span>{' '}
                Meets{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Execution
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mt-6 max-w-3xl">
                We transform complex business challenges into elegant digital solutions by combining 
                cutting-edge technology with human creativity and proven processes.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-xl">
              {capabilities.map((cap, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-xl 
                           border border-gray-200 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center 
                                group-hover:bg-blue-200 transition-colors">
                    <Zap size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{cap.title}</div>
                    <div className="text-xs text-gray-500">{cap.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl 
                         font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all 
                         duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Get started with our services"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 
                         bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 
                         transition-all duration-300 border-2 border-gray-300 hover:border-blue-400"
                aria-label="Explore our services"
              >
                <span>View Case Studies</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-3 hover:bg-white/50 rounded-lg transition-colors group"
                  >
                    <div className="flex justify-center mb-2">
                      <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center 
                                    group-hover:scale-110 transition-transform`}>
                        <Icon className={stat.color} size={18} />
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="relative">
            {/* Decorative Background Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-cyan-500 to-teal-400 
                          rounded-3xl transform rotate-3 opacity-5 blur-xl"></div>
            
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 lg:p-8 
                          border border-gray-200/50 space-y-6 group hover:shadow-3xl transition-shadow 
                          duration-500">
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl 
                                  flex items-center justify-center shadow-lg">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full 
                                  border-2 border-white shadow-sm"></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Innovation Hub</div>
                    <div className="text-sm text-gray-600">Real-time project dashboard</div>
                  </div>
                </div>
                <div className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Live Demo
                </div>
              </div>

              {/* Hero Image with Overlay */}
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg group/image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaborating on digital project with multiple screens and technology"
                  className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Image Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      Active Project: E-Commerce Platform
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">Progress: 85%</div>
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full 
                                      w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '4+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
                  { value: '50+', label: 'Projects', color: 'from-cyan-500 to-cyan-600' },
                  { value: '100%', label: 'Client Retention', color: 'from-emerald-500 to-emerald-600' },
                ].map((metric, index) => (
                  <div 
                    key={index}
                    className="group/card relative overflow-hidden rounded-xl p-4 border border-gray-200 
                             hover:border-blue-300 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 
                                  group-hover/card:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-600 font-medium">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-600">
                    Trusted by <span className="font-semibold text-gray-900">50+</span> companies
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full 
                                 border-2 border-white"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 
                          rounded-2xl border border-blue-200/30 backdrop-blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 
                          rounded-2xl border border-amber-200/30 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}