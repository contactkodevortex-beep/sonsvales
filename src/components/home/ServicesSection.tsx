import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Development']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your digital transformation.',
      features: ['AWS & Azure', 'Microservices', 'DevOps & CI/CD']
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and provide valuable insights.',
      features: ['Data Analytics', 'Predictive Models', 'Natural Language Processing']
    },
    {
      icon: '🔗',
      title: 'Blockchain Development',
      description: 'Secure, decentralized solutions for modern business challenges.',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Solutions']
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital landscape.
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
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="text-brand-primary font-medium hover:text-brand-secondary transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;