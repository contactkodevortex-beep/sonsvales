import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '8+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ];

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Businesses Through
              <span className="text-gradient block">Innovative Technology</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 8 years, Sonsvales has been at the forefront of digital transformation, 
              helping businesses navigate the complex world of modern technology. Our team of 
              expert developers, designers, and strategists work together to create solutions 
              that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-foreground">Cutting-edge technology solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-foreground">Agile development methodology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                <span className="text-foreground">24/7 support and maintenance</span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-elevated text-center p-6 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;