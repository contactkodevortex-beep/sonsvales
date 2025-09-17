import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Insights, tutorials, and industry trends from our team of technology experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;