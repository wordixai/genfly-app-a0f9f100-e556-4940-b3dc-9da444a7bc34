import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 comic-dots opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center transform rotate-12">
                <Heart className="w-6 h-6 text-black" fill="black" />
              </div>
              <h3 className="comic-title text-4xl text-white">
                POP<span className="text-yellow-400">ART</span>
              </h3>
            </div>
            <p className="handwritten text-lg text-gray-300 mb-6">
              Your one-stop shop for the most vibrant and fun pop art fashion! 
              Express yourself with our amazing collection of retro-inspired pieces.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter', 'TikTok'].map((social) => (
                <button
                  key={social}
                  className="w-12 h-12 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center hover:bg-pink-400 transition-colors wiggle-on-hover"
                >
                  <span className="text-white font-bold">
                    {social.charAt(0)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="comic-title text-2xl text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Fashion', 'Art Collection', 'Accessories', 'Sale', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="handwritten text-lg text-gray-300 hover:text-yellow-400 transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="comic-title text-2xl text-yellow-400 mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="handwritten text-gray-300">hello@popart.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="handwritten text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="handwritten text-gray-300">123 Pop Street, Art City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="comic-speech-bubble bg-gradient-to-r from-pink-500 to-orange-400 border-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="comic-title text-2xl text-white mb-2">
                  Join Our Pop Art Family!
                </h4>
                <p className="handwritten text-lg text-white">
                  Get the latest updates on new collections and special offers
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="px-4 py-3 rounded-l-full border-2 border-black handwritten text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-r-full border-2 border-l-0 border-black handwritten font-bold hover:bg-yellow-300 transition-colors">
                  Subscribe!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="handwritten text-gray-400">
            © 2024 PopArt Store. Made with <Heart className="inline w-4 h-4 text-red-500" fill="red" /> and lots of creativity!
          </p>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 w-8 h-8 bg-yellow-400 rounded-full border-2 border-white float-element opacity-60"></div>
      <div className="absolute top-10 right-20 w-6 h-6 bg-pink-500 rounded-full border-2 border-white float-element opacity-60" style={{animationDelay: '1s'}}></div>
    </footer>
  );
};

export default Footer;