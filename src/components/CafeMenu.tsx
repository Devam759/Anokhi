'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CafeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const menuCategories = [
    {
      name: 'Hot Drinks',
      items: [
        { name: 'Fresh French press biodynamic Coffee', description: 'Premium biodynamic coffee brewed fresh', price: '₹120' },
        { name: 'Loose leaf black tea selection', description: 'Curated selection of premium black teas', price: '₹80' },
        { name: 'Green tea', description: 'Refreshing green tea with antioxidants', price: '₹70' },
        { name: 'Chamomile tea', description: 'Soothing chamomile for relaxation', price: '₹70' },
        { name: 'Fresh lemongrass infusion', description: 'Aromatic lemongrass herbal infusion', price: '₹80' },
        { name: 'Fresh mint infusion', description: 'Refreshing mint herbal tea', price: '₹80' },
        { name: 'Iced Tea with lime', description: 'Cool iced tea with fresh lime', price: '₹90' }
      ]
    },
    {
      name: 'Juices & Drinks',
      items: [
        { name: 'Fresh Pomegranate Juice', description: 'Freshly squeezed pomegranate juice', price: '₹120' },
        { name: 'Seasonal Fresh Juices', description: 'Daily selection of seasonal fresh juices', price: '₹100' },
        { name: 'Lime & Ginger Cordial', description: 'Refreshing lime and ginger cordial', price: '₹80' },
        { name: 'Fresh Lime Soda', description: 'Classic fresh lime soda', price: '₹70' }
      ]
    },
    {
      name: 'Breads & Sandwiches',
      items: [
        { name: 'Cream cheese bagel', description: 'Fresh bagel with cream cheese', price: '₹150' },
        { name: 'Cheese muffin', description: 'Homemade cheese muffin', price: '₹120' },
        { name: 'Sun-dried tomato & cream cheese bagel', description: 'Bagel with sun-dried tomatoes and cream cheese', price: '₹180' },
        { name: 'Cheese & pesto focaccia', description: 'Focaccia with cheese and pesto', price: '₹160' },
        { name: 'Tomato & hummus wholemeal sandwich', description: 'Wholemeal bread with tomato and hummus', price: '₹140' },
        { name: 'Brie, tomato and basil baguette', description: 'French baguette with brie, tomato and basil', price: '₹200' }
      ]
    },
    {
      name: 'Salads & Sides',
      items: [
        { name: 'Thai Bean Salad', description: 'Fresh beans with Thai-inspired dressing', price: '₹180' },
        { name: 'Feta & Tapenade Salad', description: 'Mixed greens with feta and olive tapenade', price: '₹200' },
        { name: 'Blue Cheese Salad', description: 'Fresh salad with blue cheese dressing', price: '₹190' },
        { name: 'Toasted Seed Salad', description: 'Nutritious salad with toasted seeds', price: '₹170' }
      ]
    },
    {
      name: 'Mains',
      items: [
        { name: 'Roasted Tomato Soup', description: 'Creamy roasted tomato soup', price: '₹160' },
        { name: 'Masaman Thai Curry', description: 'Authentic Thai curry with vegetables', price: '₹220' },
        { name: 'Bean Burger', description: 'Homemade bean burger with fresh vegetables', price: '₹200' },
        { name: 'Falafel pockets', description: 'Crispy falafel in pita pockets', price: '₹180' },
        { name: 'Corn Fritters', description: 'Golden corn fritters with dipping sauce', price: '₹170' },
        { name: 'Stir fry', description: 'Fresh vegetables stir-fried to perfection', price: '₹190' },
        { name: 'Penne arrabiata', description: 'Spicy penne pasta with tomato sauce', price: '₹200' },
        { name: 'Pizza with char grilled vegetables', description: 'Wood-fired pizza with grilled vegetables', price: '₹250' },
        { name: 'Pizza with fresh tomato & mozzarella', description: 'Classic margherita pizza', price: '₹240' },
        { name: 'Pizza with caramelized onions & goats cheese', description: 'Gourmet pizza with caramelized onions', price: '₹280' }
      ]
    },
    {
      name: 'Cakes',
      items: [
        { name: 'Banana Cake', description: 'Moist banana cake with natural sweetness', price: '₹120' },
        { name: 'Carrot Cake with Cream Cheese Topping', description: 'Classic carrot cake with cream cheese frosting', price: '₹150' },
        { name: 'Baked Mascarpone Cheesecake', description: 'Rich mascarpone cheesecake', price: '₹180' },
        { name: 'Coffee Cake (VG)', description: 'Vegan coffee cake', price: '₹130' },
        { name: 'Chocolate Cake with Chocolate ganache (VG)', description: 'Vegan chocolate cake with ganache', price: '₹160' },
        { name: 'Chocolate Cheesecake', description: 'Decadent chocolate cheesecake', price: '₹190' },
        { name: 'Chocolate & Orange torte', description: 'Rich chocolate and orange torte', price: '₹170' },
        { name: 'Apple & cinnamon cake', description: 'Warm apple and cinnamon cake', price: '₹140' },
        { name: 'Coconut & Rose Cake', description: 'Delicate coconut and rose flavored cake', price: '₹160' }
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
    <section id="menu" className="section-padding bg-gradient-to-b from-cream-50 to-gold-50">
      <div className="container-max">
        <div className="text-center mb-12">
          {/* <div className="inline-block border-t border-b border-maroon-600 px-6 py-2 mb-6">
            <h5 className="text-sm text-maroon-700 uppercase tracking-wider font-medium">
              Fresh & Organic
            </h5>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800 mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-maroon-700 max-w-2xl mx-auto leading-relaxed">
            Fresh, organic ingredients from our farm and home-made delicacies.
          </p>
        </div>

        {/* Compact Menu Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                    className={`px-5 py-3 rounded-full text-sm font-serif font-semibold transition-all duration-300 ${
                      activeCategory === index
                        ? 'bg-maroon-600 text-white shadow-lg'
                        : 'bg-gold-100 text-maroon-700 hover:bg-gold-200 hover:shadow-md'
                    }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gold-200">
                <h3 className="text-2xl font-serif font-bold text-maroon-800 mb-6 text-center">
                  {menuCategories[activeCategory].name}
                </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-4 hover:bg-gold-50 rounded-lg transition-colors border-b border-gold-200 last:border-b-0"
                >
                  <div className="flex-1 pr-4">
                    <h4 className="font-serif font-semibold text-maroon-800 text-base mb-1">
                      {item.name}
                    </h4>
                    <p className="text-maroon-600 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif font-bold text-maroon-700 text-base whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Special Notes - Compact */}
                <div className="mt-6 pt-4 border-t border-gold-200">
                  <div className="text-center">
                    <p className="text-maroon-600 text-sm font-light italic">
                      All dishes are vegetarian • Vegan & gluten-free options available •
                      Fresh ingredients from our organic farm • Menu varies seasonally
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CafeMenu;
