import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const CategoriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Posts', count: 42 },
    { key: 'web', label: 'Web Development', count: 15 },
    { key: 'mobile', label: 'Mobile Apps', count: 8 },
    { key: 'ai', label: 'AI & Machine Learning', count: 12 },
    { key: 'blockchain', label: 'Blockchain', count: 5 },
    { key: 'cloud', label: 'Cloud Computing', count: 7 }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore <span className="text-gradient">Topics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends and best practices in technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <Button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              variant={activeCategory === category.key ? "default" : "outline"}
              className={`${
                activeCategory === category.key ? "btn-hero" : "btn-hero-outline"
              } transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;