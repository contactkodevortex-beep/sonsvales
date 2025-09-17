import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactInfo = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      info: 'hello@sonsvales.com',
      description: 'Send us an email and we\'ll respond within 24 hours.'
    },
    {
      icon: '📞',
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Speak directly with our team during business hours.'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      info: '123 Tech Street, San Francisco, CA 94105',
      description: 'Come visit our headquarters in the heart of Silicon Valley.'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      info: 'Available 9 AM - 6 PM PST',
      description: 'Get instant answers to your questions via live chat.'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Most projects range from 3-8 months depending on complexity and scope.'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes! We love working with startups and offer flexible engagement models.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Node.js, Python, AI/ML, blockchain, and cloud platforms.'
    }
  ];

  return (
    <div ref={ref} className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We're here to help bring your vision to life. Choose the best way to reach us 
            and we'll ensure you get the support you need.
          </p>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="card-elevated p-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-2xl">{method.icon}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-brand-primary font-medium mb-1">{method.info}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-elevated">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <h4 className="font-medium text-foreground mb-2">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-hero p-6 rounded-xl border border-brand-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            🚀 Ready to get started?
          </h3>
          <p className="text-muted-foreground mb-4">
            Schedule a free consultation to discuss your project requirements and get a custom quote.
          </p>
          <button className="w-full btn-hero">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;