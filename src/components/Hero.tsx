const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 py-20">
      {/* Comic dots overlay */}
      <div className="absolute inset-0 comic-dots opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Speech bubble */}
          <div className="comic-speech-bubble inline-block mb-8 max-w-2xl">
            <h2 className="comic-title text-5xl md:text-7xl text-black mb-4">
              AMAZING POP ART COLLECTION!
            </h2>
            <p className="handwritten text-xl text-gray-800">
              Discover the most vibrant and fun fashion pieces that'll make you stand out!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bounce-button bg-yellow-400 text-black font-bold py-4 px-8 rounded-full border-4 border-black handwritten text-2xl hover:bg-yellow-300 transition-colors shadow-lg">
              Shop Now! 🎨
            </button>
            <button className="bounce-button bg-pink-500 text-white font-bold py-4 px-8 rounded-full border-4 border-black handwritten text-2xl hover:bg-pink-400 transition-colors shadow-lg" style={{animationDelay: '0.5s'}}>
              View Art 🖼️
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full border-4 border-black float-element opacity-80"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-green-400 transform rotate-45 border-4 border-black float-element opacity-80" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-500 rounded-full border-4 border-black float-element opacity-80" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Hero;