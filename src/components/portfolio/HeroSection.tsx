import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://readdy.ai/api/search-image?query=Creative%20portfolio%20showcase%20with%20multiple%20device%20mockups%20displaying%20web%20and%20mobile%20applications%2C%20modern%20design%20gallery%2C%20digital%20project%20presentations%2C%20clean%20minimalist%20workspace%20with%20designer%20tools%20and%20screens&width=1920&height=1080&seq=portfolio-hero&orientation=landscape")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Portfolio
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Showcasing innovative solutions that have transformed businesses
            across industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
