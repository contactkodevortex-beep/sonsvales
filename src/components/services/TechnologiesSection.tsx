import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TechnologiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const technologies = {
    frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Nuxt.js'],
    backend: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Go'],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    ai: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'scikit-learn']
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs], index) => (
            <div
              key={category}
              className={`card-elevated group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4 capitalize">
                {category.replace('frontend', 'Frontend').replace('backend', 'Backend')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-hero text-brand-primary text-sm font-medium rounded-lg border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;