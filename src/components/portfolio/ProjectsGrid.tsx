import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    // ✅ Web Apps
    {
      title: "E-Commerce Platform",
      category: "web",
      description:
        "A comprehensive e-commerce solution with advanced inventory management and AI-powered recommendations.",
      client: "RetailMax Inc.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/projects/ecommerce.jpg",
    },
    {
      title: "Healthcare Management System",
      category: "web",
      description:
        "Comprehensive patient management with telemedicine capabilities.",
      client: "HealthFirst",
      tech: ["Vue.js", "Python", "PostgreSQL", "WebRTC"],
      image: "/images/projects/healthcare.jpg",
    },

    // ✅ Mobile Apps
    {
      title: "FinTech Mobile App",
      category: "mobile",
      description:
        "A secure banking application with biometric authentication and real-time transaction tracking.",
      client: "SecureBank Solutions",
      tech: ["React Native", "Firebase", "Plaid API", "AWS"],
      image: "/images/projects/fintech.jpg",
    },
    {
      title: "Food Delivery App",
      category: "mobile",
      description: "On-demand food delivery app with live tracking and payments.",
      client: "QuickEats",
      tech: ["Flutter", "Node.js", "Firebase", "Stripe"],
      image: "/images/projects/foodapp.jpg",
    },

    // ✅ AI/ML
    {
      title: "AI-Powered Analytics",
      category: "ai",
      description:
        "Machine learning platform providing predictive analytics and BI insights.",
      client: "DataDriven Corp",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      image: "/images/projects/analytics.jpg",
    },
    {
      title: "Chatbot Assistant",
      category: "ai",
      description:
        "Conversational AI chatbot for customer support automation.",
      client: "HelpDesk Pro",
      tech: ["Python", "Dialogflow", "Node.js", "MongoDB"],
      image: "/images/projects/chatbot.jpg",
    },

    // ✅ Blockchain
    {
      title: "Blockchain Supply Chain",
      category: "blockchain",
      description: "Transparent supply chain tracking with smart contracts.",
      client: "LogiChain",
      tech: ["React", "Solidity", "Ethereum", "IPFS"],
      image: "/images/projects/supplychain.jpg",
    },
    {
      title: "Crypto Wallet",
      category: "blockchain",
      description: "Secure crypto wallet with multi-chain support.",
      client: "WalletX",
      tech: ["React Native", "Solidity", "Metamask API", "Firebase"],
      image: "/images/projects/cryptowallet.jpg",
    },

    // ✅ IoT
    {
      title: "Smart IoT Dashboard",
      category: "iot",
      description: "Real-time monitoring and control for industrial IoT devices.",
      client: "IndustroTech",
      tech: ["React", "Python", "IoT", "Real-time Analytics"],
      image: "/images/projects/iot.jpg",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "web", label: "Web Development" },
    { key: "mobile", label: "Mobile Apps" },
    { key: "ai", label: "AI & ML" },
    { key: "blockchain", label: "Blockchain" },
    { key: "iot", label: "IoT" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-center">
            Explore our latest work and see how we've helped businesses achieve
            their goals.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
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
        {activeFilter === "all" ? (
          // ✅ Carousel for ALL Projects
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true} // ✅ Infinite loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "40px" }} // ✅ Adds gap for pagination dots
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filteredProjects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  project={project}
                  isVisible={isVisible}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // ✅ Normal Grid for filtered view
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isVisible, index }) => (
  <div
    className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full w-full max-w-sm mx-auto ${
      isVisible ? "animate-slide-up" : "opacity-0"
    }`}
    style={{
      animationDelay: `${index * 100}ms`,
      height: "500px", // ✅ constant card height
      width: "100%",   // ✅ takes full available width
    }}
  >
    {/* 🔹 Fixed image height */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-56 object-cover"
    />

    {/* 🔹 Flex grow keeps button at bottom */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold text-foreground mb-2">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-3 flex-grow overflow-hidden line-clamp-3">
        {project.description}
      </p>

      <p className="text-sm mb-4">
        <span className="font-medium text-foreground">Client: </span>
        <span className="text-blue-600 hover:underline cursor-pointer">
          {project.client}
        </span>
      </p>

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

      {/* 🔹 Button always pinned at bottom */}
      <div className="mt-auto">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          View Case Study <ExternalLink size={16} />
        </Button>
      </div>
    </div>
  </div>
);


export default ProjectsGrid;
