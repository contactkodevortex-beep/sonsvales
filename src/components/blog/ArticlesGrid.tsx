import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const ArticlesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  const articles = [
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'AI',
      image: '🤖'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices and architectural patterns for creating maintainable React applications at scale.',
      author: 'Michael Rodriguez',
      date: 'March 12, 2024',
      readTime: '8 min read',
      category: 'Web Development',
      image: '⚛️'
    },
    {
      title: 'Blockchain Beyond Cryptocurrency',
      excerpt: 'Real-world applications of blockchain technology in supply chain, healthcare, and identity management.',
      author: 'David Kim',
      date: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Blockchain',
      image: '🔗'
    },
    {
      title: 'Mobile App Performance Optimization',
      excerpt: 'Techniques and tools to improve performance and user experience in React Native applications.',
      author: 'Emily Watson',
      date: 'March 8, 2024',
      readTime: '7 min read',
      category: 'Mobile',
      image: '📱'
    },
    {
      title: 'Cloud Security Best Practices',
      excerpt: 'Essential security measures every organization should implement in their cloud infrastructure.',
      author: 'Alex Johnson',
      date: 'March 5, 2024',
      readTime: '10 min read',
      category: 'Cloud',
      image: '☁️'
    },
    {
      title: 'The Rise of Edge Computing',
      excerpt: 'How edge computing is transforming data processing and reducing latency in modern applications.',
      author: 'Lisa Thompson',
      date: 'March 3, 2024',
      readTime: '6 min read',
      category: 'Cloud',
      image: '🌐'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep insights and practical knowledge from our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`card-elevated group hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {article.image}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors duration-200">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{article.author}</div>
                    <div className="text-xs text-muted-foreground">{article.date}</div>
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" className="text-brand-primary hover:text-brand-secondary">
                  Read More →
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-hero">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;