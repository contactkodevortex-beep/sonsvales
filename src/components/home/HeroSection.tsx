import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://readdy.ai/api/search-image?query=Modern%20software%20development%20team%20working%20in%20a%20futuristic%20office%20environment%20with%20multiple%20monitors%2C%20coding%20on%20computers%2C%20with%20blue%20and%20purple%20lighting%2C%20high-tech%20atmosphere%2C%20professional%20workspace%2C%20clean%20minimal%20design%2C%20soft%20gradients%20in%20background%2C%20technology%20innovation%20concept&width=1920&height=1080&seq=hero-bg&orientation=landscape")`,
       }}
      
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Tomorrow's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Digital Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            We transform your ideas into powerful, scalable software solutions that drive innovation 
            and accelerate business growth in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="btn-hero-outline bg-transparent border-white text-white hover:bg-white hover:text-brand-primary text-lg px-8 py-4">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;