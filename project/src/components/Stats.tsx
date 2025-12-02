import { Activity, Users, Code2, Clock, TrendingUp, Award, Zap, Target } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    support: 0,
  });

  const stats = [
    {
      id: 1,
      icon: Code2,
      value: '50+',
      label: 'Projects Delivered',
      description: 'Successful digital transformations across various industries',
      color: 'from-blue-500 to-blue-600',
      gradient: 'from-blue-400/20 to-blue-600/20',
      endValue: 50,
      suffix: '+',
      duration: '2-12 months',
    },
    {
      id: 2,
      icon: Users,
      value: '30+',
      label: 'Happy Clients',
      description: 'Businesses transformed through our technology solutions',
      color: 'from-cyan-500 to-cyan-600',
      gradient: 'from-cyan-400/20 to-cyan-600/20',
      endValue: 30,
      suffix: '+',
      growth: '15% YoY',
    },
    {
      id: 3,
      icon: Activity,
      value: '100%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction and project success rate',
      color: 'from-emerald-500 to-emerald-600',
      gradient: 'from-emerald-400/20 to-emerald-600/20',
      endValue: 100,
      suffix: '%',
      badge: 'Industry Leader',
    },
    {
      id: 4,
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock technical support and maintenance',
      color: 'from-violet-500 to-violet-600',
      gradient: 'from-violet-400/20 to-violet-600/20',
      badge: 'Always On',
    },
  ];

  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '5+', color: 'text-amber-400' },
    { icon: TrendingUp, label: 'Growth Rate', value: '40%', color: 'text-green-400' },
    { icon: Zap, label: 'Uptime', value: '99.9%', color: 'text-blue-400' },
    { icon: Target, label: 'Goal Achievement', value: '95%', color: 'text-red-400' },
  ];

  useEffect(() => {
    const animateCount = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      stats.forEach((stat) => {
        if (stat.endValue) {
          let current = 0;
          const increment = stat.endValue / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.endValue) {
              current = stat.endValue;
              clearInterval(timer);
            }
            setCounts(prev => ({
              ...prev,
              [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(current)
            }));
          }, interval);
        }
      });
    };

    animateCount();
  }, []);

  if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
      }
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      @keyframes float-stat {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      .animate-float-stat {
        animation: float-stat 3s ease-in-out infinite;
      }
    `;
    if (!document.head.querySelector('style[data-stats-animations]')) {
      style.setAttribute('data-stats-animations', 'true');
      document.head.appendChild(style);
    }
  }

  return (
    <section 
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background with Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/90 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-violet-500 rounded-full mix-blend-screen opacity-5 blur-3xl animate-float-stat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
            By The Numbers
          </span>
          <h2 
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Driving{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Measurable Results
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence is reflected in the numbers. Here's what we've achieved 
            by combining cutting-edge technology with deep business understanding.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const currentCount = counts[stat.label.toLowerCase().replace(/\s+/g, '') as keyof typeof counts];
            
            return (
              <div
                key={stat.id}
                className="group relative animate-float-stat"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {/* Hover Background Glow */}
                <div className={`absolute inset-0 ${stat.gradient} rounded-2xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}></div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Stats Card */}
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 lg:p-8 border border-white/10 
                              hover:border-white/30 transition-all duration-500 text-center group-hover:scale-[1.02]">
                  {/* Icon Container */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 ${stat.color} rounded-xl opacity-20 blur-lg 
                                  group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 ${stat.color} rounded-xl flex items-center 
                                  justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={30} />
                    </div>
                  </div>

                  {/* Animated Value */}
                  <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 font-mono">
                    {stat.endValue ? 
                      `${currentCount || 0}${stat.suffix}` : 
                      stat.value
                    }
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-blue-200/70 text-sm mb-4">
                    {stat.description}
                  </p>

                  {/* Additional Info */}
                  <div className="flex items-center justify-center gap-4 text-xs">
                    {stat.duration && (
                      <div className="px-3 py-1 bg-white/10 rounded-full text-white/80">
                        {stat.duration}
                      </div>
                    )}
                    {stat.growth && (
                      <div className="px-3 py-1 bg-green-500/20 rounded-full text-green-300">
                        ↑ {stat.growth}
                      </div>
                    )}
                    {stat.badge && (
                      <div className="px-3 py-1 bg-amber-500/20 rounded-full text-amber-300">
                        {stat.badge}
                      </div>
                    )}
                  </div>

                  {/* Progress Bar (Optional) */}
                  {stat.endValue && stat.endValue < 100 && (
                    <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${stat.color.replace('from-', 'bg-gradient-to-r from-')} transition-all duration-1000`}
                        style={{ width: `${currentCount || 0}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Achievements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Additional Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-4 hover:bg-white/5 rounded-xl transition-colors duration-300"
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color}`} />
                  <div className={`text-2xl font-bold ${achievement.color} mb-1`}>
                    {achievement.value}
                  </div>
                  <div className="text-sm text-blue-200/80">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm 
                        rounded-full border border-white/10">
            <div className="text-sm text-blue-200">Trusted by industry leaders:</div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gradient-to-br 
                           from-blue-400 to-cyan-400 flex items-center justify-center text-xs 
                           font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-blue-300">and 25+ more</div>
          </div>
        </div>
      </div>
    </section>
  );
}