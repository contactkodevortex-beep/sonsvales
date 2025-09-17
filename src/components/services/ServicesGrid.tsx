import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and best practices.',
      features: ['React & Next.js', 'Vue.js & Nuxt.js', 'Node.js & Express', 'TypeScript', 'PWA Development'],
      price: 'Starting from $15,000'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Cross-platform UI'],
      price: 'Starting from $20,000'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps implementation.',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Microservices', 'Auto-scaling'],
      price: 'Starting from $10,000'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Integration'],
      price: 'Starting from $25,000'
    },
    {
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Decentralized applications and smart contract development.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration', 'Cryptocurrency'],
      price: 'Starting from $30,000'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions', 'Secure Development', 'Risk Assessment'],
      price: 'Starting from $8,000'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end technology services designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-elevated group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="text-lg font-semibold text-brand-primary mb-4">
                  {service.price}
                </div>
                <Button className="w-full btn-hero">
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;