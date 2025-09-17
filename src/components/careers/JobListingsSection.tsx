import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const JobListingsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Join our core engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['5+ years React/Node.js experience', 'Cloud platforms (AWS/Azure)', 'TypeScript proficiency'],
      salary: '$120k - $180k'
    },
    {
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Develop cutting-edge mobile applications for iOS and Android using React Native and Flutter.',
      requirements: ['3+ years mobile development', 'React Native or Flutter', 'App Store deployment experience'],
      salary: '$100k - $150k'
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Build intelligent systems and machine learning models to power our AI-driven products.',
      requirements: ['PhD/MS in CS or related field', 'TensorFlow/PyTorch experience', 'Production ML deployment'],
      salary: '$140k - $200k'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Create beautiful, intuitive user experiences for web and mobile applications.',
      requirements: ['5+ years UI/UX design', 'Figma/Sketch proficiency', 'Design system experience'],
      salary: '$90k - $130k'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: ['Docker/Kubernetes experience', 'AWS/Azure/GCP', 'Infrastructure as Code'],
      salary: '$110k - $160k'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Drive product strategy and work with cross-functional teams to deliver exceptional user experiences.',
      requirements: ['5+ years product management', 'Technical background preferred', 'Agile/Scrum experience'],
      salary: '$130k - $180k'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Open <span className="text-gradient">Positions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover exciting opportunities to grow your career with cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`card-elevated group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded">
                      {job.department}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-brand-primary">{job.salary}</div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                <ul className="space-y-1">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="text-sm text-muted-foreground">
                  📍 {job.location}
                </div>
                <Button className="btn-hero">
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListingsSection;