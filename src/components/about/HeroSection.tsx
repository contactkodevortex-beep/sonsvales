import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import aboutImage from '@/assets/about-bg.jpg';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20building%20with%20glass%20walls%20and%20contemporary%20architecture%2C%20professional%20business%20environment%2C%20clean%20lines%20and%20minimalist%20design%2C%20natural%20lighting%2C%20corporate%20headquarters%20concept%2C%20blue%20and%20white%20color%20scheme%2C%20technology%20company%20atmosphere&width=1920&height=1080&seq=about-hero&orientation=landscape")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold ">
            About
          </h1>
           <span className="text-5xl md:text-7xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Sonsvales</span>
          <p className="text-xl md:text-2xl mb-8 mt-8 leading-relaxed opacity-90">
            Innovating the future through cutting-edge software development and digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;