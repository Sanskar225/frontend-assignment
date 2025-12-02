import { Github, Linkedin, Twitter, Mail, MapPin, Phone, ExternalLink, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about', icon: ChevronRight },
      { name: 'Services', href: '#services', icon: ChevronRight },
      { name: 'Case Studies', href: '#casestudies', icon: ChevronRight },
      { name: 'Careers', href: '#careers', icon: ChevronRight },
      { name: 'Contact', href: '#contact', icon: ChevronRight },
    ],
    services: [
      { name: 'Web Development', href: '#services', badge: 'Popular' },
      { name: 'Mobile App Development', href: '#services', badge: 'Trending' },
      { name: 'AI/ML Solutions', href: '#services', badge: 'Innovative' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Digital Transformation', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
    ],
    resources: [
      { name: 'Documentation', href: '#', external: true },
      { name: 'API Reference', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Tutorials', href: '#', external: true },
      { name: 'Community', href: '#', external: true },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
      { name: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/pinak-idea-lab', label: 'LinkedIn', followers: '2.5k+' },
    { icon: Twitter, href: 'https://twitter.com/pinakidealab', label: 'Twitter', followers: '1.8k+' },
    { icon: Github, href: 'https://github.com/pinakidealab', label: 'GitHub', followers: '500+' },
    { icon: Mail, href: 'mailto:info@pinakidealab.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'B-1204, Aditya Urban Casa, Sector-78, Noida 201301' },
    { icon: Phone, text: '+91 123 456 7890' },
  ];

  return (
    <footer 
      className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden"
      aria-label="Website footer"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand/Company Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Pinak Idea Lab
                </h3>
                <p className="text-sm text-gray-400">Innovating since 2021</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We leverage the powerful combination of technology, human ingenuity, and refined processes
              to deliver innovative software solutions that drive business transformation and create
              measurable impact at the intersection of technology, economics, and consumer behavior.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3 text-gray-400">
                    <Icon size={16} className="text-blue-400" />
                    <span className="text-sm">{info.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300 mb-3">Stay updated with our latest insights</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white 
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium 
                           rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 
                           text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors 
                               duration-200 group text-sm"
                    >
                      <Icon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center justify-between text-gray-400 hover:text-white 
                             transition-colors duration-200 group text-sm"
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        link.badge === 'Popular' ? 'bg-red-500/20 text-red-400' :
                        link.badge === 'Trending' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors 
                             duration-200 group text-sm"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                    {link.external && <ExternalLink size={12} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-medium mb-4 text-gray-300">Connect with us</h5>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center 
                                    hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 
                                    transition-all duration-300 group-hover:scale-110">
                        <Icon size={18} className="text-gray-400 group-hover:text-white" />
                      </div>
                      {social.followers && (
                        <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-gray-900 text-xs 
                                     text-gray-400 rounded-full border border-gray-700">
                          {social.followers}
                        </div>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p className="mb-1">© {currentYear} Pinak Idea Lab Private Limited. All rights reserved.</p>
            <p className="text-gray-500 text-xs">
              CIN: U72900UP2021PTC140751 | Registered in Noida, Uttar Pradesh, India
            </p>
          </div>

          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              System Status: <span className="text-green-400 font-medium">All Systems Operational</span>
            </span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Status Page
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors 
                     text-sm group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ChevronRight size={16} className="rotate-270 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}