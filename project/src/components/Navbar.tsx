import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Sparkles, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home', current: true },
    { name: 'Services', href: '#services', badge: 'Popular' },
    { name: 'Case Studies', href: '#casestudies' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/80 backdrop-blur-sm shadow-sm py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand/Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg 
                            flex items-center justify-center shadow-md">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 
                               bg-clip-text text-transparent">
                  Pinak Idea Lab
                </span>
                <div className="text-xs text-gray-500 hidden sm:block">Innovating since 2021</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative group px-4 py-2 rounded-lg font-medium transition-all duration-200 
                         ${link.current ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                aria-current={link.current ? 'page' : undefined}
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                               bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-3/4 
                               transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Desktop CTA & Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+911234567890"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 
                       transition-colors"
              aria-label="Call us"
            >
              <Phone size={18} />
              <span className="font-medium">+91 123 456 7890</span>
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold 
                       rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 
                       shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              Get Started
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4" ref={menuRef}>
            <a 
              href="tel:+911234567890"
              className="flex items-center p-2 text-gray-700 hover:text-blue-600"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute left-0 right-0 bg-white border-t border-gray-200 shadow-xl 
                     transition-all duration-300 ease-in-out ${
                       isOpen 
                         ? 'max-h-96 opacity-100 mt-2' 
                         : 'max-h-0 opacity-0 overflow-hidden'
                     }`}
          role="menu"
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg 
                         font-medium transition-all duration-200 group ${
                           link.current 
                             ? 'bg-blue-50 text-blue-600' 
                             : 'text-gray-700 hover:bg-gray-50'
                         }`}
                role="menuitem"
                aria-current={link.current ? 'page' : undefined}
              >
                <span className="flex items-center gap-3">
                  {link.current && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                  {link.name}
                  {link.badge && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 
                                                 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white 
                         font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 
                         transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-4 text-center">
                <a 
                  href="tel:+911234567890"
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 
                           transition-colors text-sm font-medium"
                >
                  <Phone size={16} />
                  +91 123 456 7890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
          style={{ 
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` 
          }}
        ></div>
      </div>
    </nav>
  );
}