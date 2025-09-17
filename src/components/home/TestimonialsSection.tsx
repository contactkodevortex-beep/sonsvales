import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO at TechStart Inc.',
      content: 'Sonsvales transformed our outdated system into a modern, scalable platform. Their expertise in cloud solutions helped us reduce costs by 40% while improving performance.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO at DataFlow Solutions',
      content: 'The AI-powered analytics dashboard they built has revolutionized our decision-making process. The team\'s deep understanding of machine learning is impressive.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder at GreenTech Innovations',
      content: 'Working with Sonsvales was a game-changer. They delivered our mobile app ahead of schedule and it has already gained 100K+ downloads in the first month.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'VP of Engineering at SecureBank',
      content: 'Their cybersecurity solutions and blockchain implementation exceeded our expectations. The security audit revealed and fixed vulnerabilities we never knew existed.',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Don't just take our word for it - hear from the companies we've helped transform.
          </p>
        </div>

        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="card-elevated p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[currentTestimonial].content}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-bold text-foreground text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;