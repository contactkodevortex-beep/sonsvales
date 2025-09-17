import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MissionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: '🎯',
      title: 'Mission',
      description: 'To empower businesses worldwide with innovative technology solutions that drive growth and create lasting value.'
    },
    {
      icon: '👁️',
      title: 'Vision',
      description: 'To be the global leader in digital transformation, shaping the future of technology and business.'
    },
    {
      icon: '⭐',
      title: 'Values',
      description: 'Innovation, Excellence, Integrity, Collaboration, and Customer Success drive everything we do.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on strong principles and driven by a passion for excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card-elevated text-center group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;