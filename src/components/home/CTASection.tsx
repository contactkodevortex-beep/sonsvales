import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how we can help you build innovative solutions that drive growth 
            and create lasting value for your customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-8 py-4 bg-transparent font-semibold"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-white/80 text-sm">Most projects delivered within 3-6 months</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">💯</div>
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-white/80 text-sm">Rigorous testing and quality assurance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold mb-2">Ongoing Support</h3>
              <p className="text-white/80 text-sm">24/7 maintenance and support services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;