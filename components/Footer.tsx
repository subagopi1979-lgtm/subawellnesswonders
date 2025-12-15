import React from 'react';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Desc */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-brand-300">Suba Wellness Wonders</h3>
            <p className="text-gray-200 text-sm mb-8 leading-relaxed max-w-xs">
              Your path to a healthier, more balanced lifestyle through personalized nutrition guidance and sustainable wellness strategies.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/subawellnesswonders?igsh=Z3AxYWFvbDFvNGo3" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-brand-300 hover:bg-brand-600 hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/share/14Ms6XFstVw/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-brand-300 hover:bg-brand-600 hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-200 hover:text-brand-300 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-brand-300 transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-gray-200 hover:text-brand-300 transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-brand-300 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-600 transition-colors">
                   <Mail className="h-4 w-4 text-brand-300 group-hover:text-white" />
                </div>
                <span className="text-gray-200 text-sm mt-1">subawellnesswonders@gmail.com</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-600 transition-colors">
                  <svg className="h-4 w-4 text-brand-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.304-5.266c0-5.452 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span className="text-gray-200 text-sm"> +91 9894267069</span>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-600 transition-colors">
                  <MapPin className="h-4 w-4 text-brand-300 group-hover:text-white" />
                </div>
                <span className="text-gray-200 text-sm mt-1">Chennai, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
          <p>&copy; 2025 Suba Wellness Wonders. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Designed with <span className="text-red-500">❤</span> for Wellness</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
