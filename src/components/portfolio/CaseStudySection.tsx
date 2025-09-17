import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const CaseStudySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Case Study</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into how we transformed a traditional business into a digital leader.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Global Retail Chain Digital Transformation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A 50-year-old retail chain needed to modernize their operations and compete with 
                e-commerce giants. We built a comprehensive omnichannel platform that unified 
                their online and offline presence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-foreground">Complete system modernization in 8 months</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-foreground">Integration with 500+ physical stores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                  <span className="text-foreground">AI-powered inventory management</span>
                </div>
              </div>

              <Button className="btn-hero">
                Read Full Case Study
              </Button>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elevated text-center p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">400%</div>
                  <div className="text-muted-foreground">Online Sales Increase</div>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">60%</div>
                  <div className="text-muted-foreground">Operational Efficiency</div>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">8 Months</div>
                  <div className="text-muted-foreground">Implementation Time</div>
                </div>
                <div className="card-elevated text-center p-6">
                  <div className="text-3xl font-bold text-gradient mb-2">$2M+</div>
                  <div className="text-muted-foreground">Annual Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;