import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const timeline = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Sonsvales was founded with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2018',
      title: 'First Major Milestone',
      description: 'Reached 50+ completed projects and established partnerships with leading technology providers.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations internationally and launched our AI/ML development division.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Awarded "Best Software Development Company" and reached 500+ successful project deliveries.'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched our innovation lab focusing on emerging technologies like blockchain and quantum computing.'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A timeline of growth, innovation, and success.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary"></div>

          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex mb-12 transition-all duration-1000 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* LEFT SIDE (even index) */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="card-elevated p-6">
                      <div className="text-2xl font-bold text-gradient mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                /* RIGHT SIDE (odd index) */
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <div className="card-elevated p-6">
                      <div className="text-2xl font-bold text-gradient mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </>
              )}

              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full border-4 border-white shadow-medium"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
