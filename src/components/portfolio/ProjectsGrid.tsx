import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ProjectsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution with advanced inventory management and AI-powered recommendations.',
      client: 'RetailMax Inc.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/projects/ecommerce.jpg',
    },
    {
      title: 'FinTech Mobile App',
      category: 'mobile',
      description: 'A secure banking application with biometric authentication and real-time transaction tracking.',
      client: 'SecureBank Solutions',
      tech: ['React Native', 'Firebase', 'Plaid API', 'AWS'],
      image: '/images/projects/fintech.jpg',
    },
    {
      title: 'AI-Powered Analytics',
      category: 'ai',
      description: 'Machine learning platform that provides predictive analytics and business intelligence insights.',
      client: 'DataDriven Corp',
      tech: ['Python', 'TensorFlow', 'React', 'PostgreSQL'],
      image: '/images/projects/analytics.jpg',
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'blockchain', label: 'Blockchain' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Filters */}
        <div className='flex flex-col items-center'>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6"> Featured <span className="text-gradient">Projects</span> </h2> <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-center"> Explore our latest work and see how we've helped businesses achieve their goals. </p>

        </div>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? "default" : "outline"}
                className="rounded-full px-5"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                
                <p className="text-sm mb-4">
                  <span className="font-medium text-foreground">Client: </span>
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {project.client}
                  </span>
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-md text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  View Case Study <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
