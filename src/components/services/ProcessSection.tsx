import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a detailed roadmap for success.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates intuitive user experiences and interactive prototypes for validation.',
      icon: '🎨'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures high-quality, bug-free solutions.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Deployment & Launch',
      description: 'Seamless deployment with comprehensive monitoring and performance optimization.',
      icon: '🚀'
    },
    {
      step: '05',
      title: 'Support & Maintenance',
      description: 'Ongoing support, updates, and enhancements to keep your solution running smoothly.',
      icon: '🛠️'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery every time.
          </p>
        </div>

        <div className="relative">
          {/* Process line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="card-elevated text-center group hover:scale-105 transition-all duration-500">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  
                  <div className="pt-6">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;