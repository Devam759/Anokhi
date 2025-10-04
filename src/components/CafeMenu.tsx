'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CafeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const menuCategories = [
    {
      name: 'Traditional Dishes',
      items: [
        { name: 'Dal Makhani', description: 'Creamy black lentils cooked overnight with butter and cream', price: '₹180' },
        { name: 'Chicken Curry', description: 'Aromatic chicken curry with traditional Rajasthani spices', price: '₹220' },
        { name: 'Paneer Butter Masala', description: 'Fresh cottage cheese in rich tomato and cream sauce', price: '₹160' },
        { name: 'Biryani', description: 'Fragrant basmati rice with choice of chicken or vegetables', price: '₹200' }
      ]
    },
    {
      name: 'Street Food',
      items: [
        { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', price: '₹40' },
        { name: 'Pakora Platter', description: 'Mixed vegetable fritters with mint chutney', price: '₹120' },
        { name: 'Chaat', description: 'Traditional Indian street snack with yogurt and chutneys', price: '₹80' },
        { name: 'Vada Pav', description: 'Spiced potato fritter in soft bun with chutneys', price: '₹60' }
      ]
    },
    {
      name: 'Beverages',
      items: [
        { name: 'Masala Chai', description: 'Spiced tea brewed with traditional Indian spices', price: '₹50' },
        { name: 'Lassi', description: 'Creamy yogurt drink available in sweet or salty', price: '₹80' },
        { name: 'Fresh Juice', description: 'Seasonal fresh fruit juices', price: '₹100' },
        { name: 'Filter Coffee', description: 'Traditional South Indian filter coffee', price: '₹60' }
      ]
    },
    {
      name: 'Desserts',
      items: [
        { name: 'Gulab Jamun', description: 'Soft milk dumplings in rose-flavored syrup', price: '₹80' },
        { name: 'Ras Malai', description: 'Cottage cheese dumplings in sweetened milk', price: '₹90' },
        { name: 'Kulfi', description: 'Traditional Indian ice cream in various flavors', price: '₹70' },
        { name: 'Jalebi', description: 'Crispy sweet spirals soaked in sugar syrup', price: '₹60' }
      ]
    }
  ];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % menuCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + menuCategories.length) % menuCategories.length);
  };

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Indian flavors with our carefully curated menu featuring 
            traditional recipes and fresh, locally-sourced ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Menu Categories */}
          <div>
            <div className="space-y-4 mb-8">
              {menuCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-terracotta-50 border-2 border-terracotta-200'
                      : 'bg-earth-50 hover:bg-earth-100 border-2 border-transparent'
                  }`}
                >
                  <h3 className="text-lg font-serif font-semibold text-earth-900">
                    {category.name}
                  </h3>
                  <p className="text-earth-600 text-sm">
                    {category.items.length} items available
                  </p>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={prevCategory}
                className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center hover:bg-earth-200 transition-colors"
                aria-label="Previous category"
              >
                <ChevronLeft size={20} className="text-earth-600" />
              </button>
              <button
                onClick={nextCategory}
                className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center hover:bg-earth-200 transition-colors"
                aria-label="Next category"
              >
                <ChevronRight size={20} className="text-earth-600" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="bg-earth-50 rounded-2xl p-8">
            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-6">
              {menuCategories[activeCategory].name}
            </h3>
            
            <div className="space-y-6">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-earth-900">
                      {item.name}
                    </h4>
                    <span className="font-bold text-terracotta-600">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-earth-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Notes */}
            <div className="mt-8 pt-6 border-t border-earth-200">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-earth-900 mb-2">Special Notes</h4>
                <ul className="text-earth-600 text-sm space-y-1">
                  <li>• All dishes can be made vegetarian upon request</li>
                  <li>• Spice levels can be adjusted to your preference</li>
                  <li>• Fresh ingredients sourced daily from local markets</li>
                  <li>• Traditional recipes passed down through generations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* All Categories Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-serif font-bold text-earth-900 text-center mb-12">
            All Menu Categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                  activeCategory === index ? 'border-terracotta-200' : 'border-transparent hover:border-earth-200'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="aspect-video bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">
                    {index === 0 && '🍽️'}
                    {index === 1 && '🌶️'}
                    {index === 2 && '☕'}
                    {index === 3 && '🍰'}
                  </span>
                </div>
                <h4 className="font-serif font-semibold text-earth-900 mb-2">
                  {category.name}
                </h4>
                <p className="text-sm text-earth-600">
                  {category.items.length} delicious options
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeMenu;
