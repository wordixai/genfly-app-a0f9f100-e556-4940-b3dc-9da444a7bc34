import { ShoppingBag, Search, Star } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background with comic dots */}
      <div className="orange-pink-gradient comic-dots py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center transform rotate-12 pulse-pop">
                <Star className="w-6 h-6 text-black" fill="black" />
              </div>
              <h1 className="comic-title text-4xl text-white">
                POP<span className="text-yellow-300">ART</span>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Fashion', 'Art', 'Accessories', 'Sale'].map((item) => (
                <button
                  key={item}
                  className="handwritten text-2xl text-white hover:text-yellow-300 transition-colors wiggle-on-hover"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-8 h-8 text-white cursor-pointer wiggle-on-hover" />
              </div>
              <div className="relative">
                <ShoppingBag className="w-8 h-8 text-white cursor-pointer wiggle-on-hover" />
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-black rounded-full border-2 border-black text-sm font-bold flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-20 w-8 h-8 bg-yellow-400 rounded-full border-2 border-black float-element"></div>
      <div className="absolute bottom-4 left-20 w-6 h-6 bg-pink-500 rounded-full border-2 border-black float-element" style={{animationDelay: '1s'}}></div>
    </header>
  );
};

export default Header;