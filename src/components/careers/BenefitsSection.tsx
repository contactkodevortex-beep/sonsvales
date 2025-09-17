import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const BenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-leading compensation with equity options and annual performance bonuses.'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.'
    },
    {
      icon: '🏖️',
      title: 'Flexible PTO',
      description: 'Unlimited vacation policy and flexible working hours for work-life balance.'
    },
    {
      icon: '🎓',
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs.'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Hybrid or fully remote options with home office setup allowance.'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and leadership opportunities.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-gradient">Sonsvales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in taking care of our team with competitive benefits and a supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card-elevated text-center group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;