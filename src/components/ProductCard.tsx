import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Pop art frame */}
      <div className="pop-frame bg-white p-4 relative overflow-hidden">
        {/* Sale/New badges */}
        {product.isSale && (
          <div className="absolute top-2 left-2 z-10 bg-red-500 text-white px-3 py-1 rounded-full border-2 border-black handwritten font-bold transform -rotate-12">
            SALE!
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 right-2 z-10 bg-green-400 text-black px-3 py-1 rounded-full border-2 border-black handwritten font-bold transform rotate-12">
            NEW!
          </div>
        )}

        {/* Product Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg border-2 border-black mb-4 aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
              <button className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors wiggle-on-hover">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full border-2 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors wiggle-on-hover">
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <p className="handwritten text-sm text-gray-600 mb-1">{product.category}</p>
          <h3 className="comic-title text-lg text-black mb-2">{product.name}</h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="comic-title text-xl text-black">${product.price}</span>
              {product.originalPrice && (
                <span className="handwritten text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button className="bg-pink-500 text-white p-2 rounded-full border-2 border-black hover:bg-pink-400 transition-colors bounce-button">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;