import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { PRODUCTS } from '../constants';
import Image from '../components/Image';

// Reusable Page Header
const PageHeader: React.FC<{title: string}> = ({title}) => (
    <div className="bg-gray-900/50 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
    </div>
);

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-2">
    <div className="aspect-video overflow-hidden">
      <Image 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">{product.category}</span>
      <h3 className="text-xl font-bold text-brand-light mt-2 mb-3 truncate">{product.name}</h3>
      <p className="text-brand-slate text-sm mb-4 h-20 overflow-hidden">{product.description}</p>
      <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
        <div>
            <p className="text-brand-slate text-sm">Price</p>
            <p className="text-brand-light font-semibold"> আলোচনা সাপেক্ষে (Negotiable)</p>
        </div>
        <Link 
            to="/contact"
            state={{ subject: `Inquiry about ${product.name}` }}
            className="px-4 py-2 text-sm font-semibold text-white bg-brand-blue rounded-md hover:bg-opacity-80 transition-colors"
        >
            Inquire Now
        </Link>
      </div>
    </div>
  </div>
);

// Main Products Page
const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const allCategories = PRODUCTS.map(p => p.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return PRODUCTS;
    }
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="animate-fade-in-up">
      <PageHeader title="Our Products" />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-brand-light">Explore Our Ready-to-Deploy Solutions</h2>
            <p className="text-brand-slate mt-4">
              We offer a range of pre-built software products and platforms that can be customized to fit your specific needs. Browse through our categories to find a solution that accelerates your business growth. All prices are project-based and negotiable.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-800/60 text-brand-slate hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={product.name} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;