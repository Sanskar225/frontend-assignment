import { Activity, Users, Code2, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Code2,
      value: '50+',
      label: 'Projects Delivered',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      value: '30+',
      label: 'Happy Clients',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Activity,
      value: '100%',
      label: 'Satisfaction Rate',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Support Available',
      color: 'from-sky-500 to-sky-600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>

                  <p className="text-blue-100 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
