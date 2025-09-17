import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import servicesImage from '@/assets/services-bg.jpg';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://readdy.ai/api/search-image?query=Modern%20technology%20services%20concept%20with%20digital%20interfaces%2C%20web%20development%20tools%2C%20mobile%20devices%2C%20cloud%20computing%20elements%2C%20AI%20and%20blockchain%20symbols%2C%20professional%20tech%20workspace%20with%20multiple%20screens%20and%20coding%20environments&width=1920&height=1080&seq=services-hero&orientation=landscape")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Comprehensive technology solutions to accelerate your digital transformation journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
