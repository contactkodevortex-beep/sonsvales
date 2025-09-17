import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import teamPhoto from '@/assets/team-photo.jpg';

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech industry and successful exits.',
      initials: 'AJ'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Former Google engineer specializing in scalable architecture and AI.',
      initials: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on user experience and innovation.',
      initials: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'VP of Engineering',
      bio: 'Full-stack expert leading our development teams to excellence.',
      initials: 'EW'
    },
    {
      name: 'David Kim',
      role: 'Head of AI/ML',
      bio: 'PhD in Computer Science with expertise in machine learning.',
      initials: 'DK'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Operations',
      bio: 'Operations expert ensuring smooth project delivery and client success.',
      initials: 'LT'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Talented professionals dedicated to delivering exceptional results.
          </p>
          
          <div className="rounded-2xl overflow-hidden shadow-strong mb-16">
            <img 
              src={teamPhoto} 
              alt="Sonsvales Team" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`card-elevated text-center group hover:scale-105 transition-all duration-500 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-brand-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;