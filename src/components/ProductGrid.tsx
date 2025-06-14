import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Pop Art Tee",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    category: "Fashion",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Retro Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    category: "Footwear",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Comic Print Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center",
    category: "Fashion",
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: "Pop Art Canvas",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    category: "Art",
    isNew: false,
    isSale: true,
  },
  {
    id: 5,
    name: "Vintage Sunglasses",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    isNew: true,
    isSale: false,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="comic-speech-bubble inline-block">
            <h2 className="comic-title text-4xl md:text-5xl text-black mb-2">
              TRENDING NOW!
            </h2>
            <p className="handwritten text-xl text-gray-700">
              Check out our most popular pop art pieces
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bounce-button bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-4 px-8 rounded-full border-4 border-black handwritten text-2xl hover:from-orange-300 hover:to-pink-400 transition-all shadow-lg">
            View More Amazing Stuff! ✨
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;