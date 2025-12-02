import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'AI/ML Solutions',
    'Consulting',
    'Other',
  ];

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Please enter a valid email' : '';
      case 'phone':
        return value && !/^[\d\s\-\+\(\)]{10,20}$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'message'].includes(key)) {
        const error = validateField(key, formData[key as keyof FormData]);
        if (error) {
          newErrors[key as keyof FormErrors] = error;
        }
      }
    });
    
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setErrors({});
      setTouched({});
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['B-1204, Aditya Urban Casa', 'Sector-78, Noida 201301', 'Uttar Pradesh, India'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      link: 'https://maps.google.com',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@pinakidealab.com', 'support@pinakidealab.com'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100',
      link: 'mailto:info@pinakidealab.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 123 456 7890', '+91 987 654 3210'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      link: 'tel:+911234567890',
    },
    {
      icon: Globe,
      title: 'Online Presence',
      details: ['LinkedIn: @pinakidealab', 'GitHub: pinakidealab'],
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
      link: 'https://linkedin.com',
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Contact Us
          </span>
          <h2 
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Amazing Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Have a project in mind? Get in touch with our team and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                Get In Touch
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 
                               hover:shadow-lg transition-all duration-300 block"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={info.color} size={24} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {info.title}
                          </div>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <div key={idx} className="text-sm text-gray-600">
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Business Hours</h4>
              </div>
              
              <div className="space-y-4">
                {[
                  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM', status: 'Open' },
                  { day: 'Saturday', time: '10:00 AM - 4:00 PM', status: 'Open' },
                  { day: 'Sunday', time: 'Closed', status: 'Closed' },
                ].map((schedule, idx) => (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      schedule.status === 'Closed' ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-medium text-gray-900">{schedule.day}</div>
                      <div className={`text-sm ${schedule.status === 'Closed' ? 'text-gray-500' : 'text-gray-600'}`}>
                        {schedule.time}
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      schedule.status === 'Closed' 
                        ? 'bg-gray-100 text-gray-600' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Response Time:</span> We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent outline-none transition-all ${
                               errors.name ? 'border-red-300' : 'border-gray-300'
                             }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent outline-none transition-all ${
                               errors.email ? 'border-red-300' : 'border-gray-300'
                             }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent outline-none transition-all ${
                               errors.phone ? 'border-red-300' : 'border-gray-300'
                             }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
                      <AlertCircle size={14} />
                      <span>{errors.phone}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent outline-none transition-all resize-none ${
                             errors.message ? 'border-red-300' : 'border-gray-300'
                           }`}
                  placeholder="Tell us about your project, timeline, budget, and goals..."
                />
                {errors.message && (
                  <div className="flex items-center gap-1 mt-2 text-sm text-red-600">
                    <AlertCircle size={14} />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 
                         shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                           isSubmitted
                             ? 'bg-green-600 text-white cursor-not-allowed'
                             : isSubmitting
                             ? 'bg-blue-500 text-white cursor-wait'
                             : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                         }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {isSubmitted && (
                <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 
                              rounded-xl text-green-800 font-medium">
                  <CheckCircle className="inline-block mr-2" size={20} />
                  Thank you! We've received your message and will get back to you within 24 hours.
                </div>
              )}

              <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-100">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}