import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamPhoto from '@/assets/team-photo.jpg';

const CultureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    'Innovation-driven mindset',
    'Collaborative team environment',
    'Continuous learning culture',
    'Work-life balance priority',
    'Diversity and inclusion',
    'Transparency and trust'
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Culture</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Sonsvales, we foster an environment where creativity thrives, collaboration is valued, 
              and every team member has the opportunity to make a meaningful impact on the future of technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-hero p-6 rounded-xl border border-brand-primary/20">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                💬 What our team says:
              </h3>
              <p className="text-muted-foreground italic">
                "Working at Sonsvales has been incredible. The team is supportive, the projects are 
                challenging, and there's always room to grow and learn new technologies."
              </p>
              <p className="text-brand-primary font-medium mt-2">- Sarah K., Senior Developer</p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={teamPhoto} 
                alt="Sonsvales Team Culture" 
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="card-elevated text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Employee Rating</div>
              </div>
              <div className="card-elevated text-center p-4">
                <div className="text-2xl font-bold text-gradient mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;