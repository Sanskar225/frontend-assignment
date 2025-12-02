import { Target, Users, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Technology-Driven',
      description: 'Leveraging cutting-edge tech to solve complex business challenges.',
      color: 'blue',
    },
    {
      icon: Users,
      title: 'Human-Centered',
      description: 'Combining human ingenuity with processes for innovative solutions.',
      color: 'green',
    },
    {
      icon: Lightbulb,
      title: 'Consumer Behavior Focus',
      description: 'Understanding economics and behavior to build relevant products.',
      color: 'amber',
    },
    {
      icon: Award,
      title: 'Process Excellence',
      description: 'Methodical approach ensuring quality, reliability, and success.',
      color: 'purple',
    },
  ];

  const companyDetails = [
    { label: 'CIN', value: 'U72900UP2021PTC140751' },
    { label: 'Incorporated', value: 'January 22, 2021' },
    { label: 'Location', value: 'B-1204, Aditya Urban Casa, Sector-78, Noida 201301' },
  ];

  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Company Description */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                About Us
              </span>
              <h2 
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Innovating at the Intersection of{' '}
                <span className="text-blue-600">Technology & Human Ingenuity</span>
              </h2>

              <div className="space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p className="text-lg sm:text-xl text-gray-700 font-medium">
                  Founded in 2021, Pinak Idea Lab Private Limited is a forward-thinking technology
                  services company based in Noida, Uttar Pradesh.
                </p>
                
                <p>
                  We leverage the powerful combination of <strong>technology</strong>,{' '}
                  <strong>human ingenuity</strong>, and <strong>refined processes</strong> to 
                  conceptualize and deliver software products and services that create real, 
                  measurable impact for our clients.
                </p>

                <p>
                  Our unique position at the intersection of technology, economics, and consumer 
                  behavior allows us to build solutions that are not just technically robust, but 
                  also economically viable and perfectly aligned with user needs and market dynamics.
                </p>

                <p>
                  We partner with forward-thinking organizations to solve complex challenges, 
                  transform business operations, and unlock new opportunities in today's rapidly 
                  evolving digital economy.
                </p>
              </div>
            </div>

            {/* Company Details Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="text-blue-600" size={20} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Company Details</h3>
              </div>
              
              <div className="space-y-3">
                {companyDetails.map((detail, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 bg-white/50 rounded-lg"
                  >
                    <span className="font-semibold text-gray-700 text-sm min-w-[100px]">
                      {detail.label}:
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Value Propositions */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Our Core Values
              </h3>
              <p className="text-gray-600">
                These principles guide everything we do and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-emerald-100 text-emerald-600',
                  amber: 'bg-amber-100 text-amber-600',
                  purple: 'bg-purple-100 text-purple-600',
                };

                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl 
                             transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    role="article"
                    aria-label={`${value.title} - ${value.description}`}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className={`flex-shrink-0 w-12 h-12 ${colorClasses[value.color]} 
                                 rounded-xl flex items-center justify-center 
                                 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-gray-400">
                        Value {index + 1} of {values.length}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Section - Optional Enhancement */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}