import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
      <div className="card-elevated">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Start Your <span className="text-gradient">Project</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company Name
              </label>
              <Input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select budget range</option>
                <option value="under-25k">Under $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k-250k">$100k - $250k</option>
                <option value="250k-plus">$250k+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
              Project Type
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">Select project type</option>
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile Application</option>
              <option value="ai-ml">AI/ML Solution</option>
              <option value="blockchain">Blockchain Development</option>
              <option value="cloud">Cloud Migration</option>
              <option value="consulting">Technology Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Project Details *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full"
              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
            />
          </div>

          <Button type="submit" className="w-full btn-hero">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;