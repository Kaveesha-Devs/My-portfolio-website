import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Server, Smartphone, Globe, Cpu, ExternalLink } from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);

      // Update current section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      const currentSectionIndex = sectionElements.findIndex(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSectionIndex >= 0) {
        setCurrentSection(sections[currentSectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-x-hidden text-white bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-black/80 backdrop-blur-sm border-green-800/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
              Kaveesha.dev
            </div>
            <div className="hidden space-x-8 md:flex">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-green-400 transition-colors duration-300 ${
                    currentSection === section ? 'text-green-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div 
          className="h-1 transition-all duration-300 bg-gradient-to-r from-green-400 to-emerald-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </nav>

      {/* Floating Background Elements */}

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-screen pt-20">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-green-500 rounded-full">
                  <img 
                    src="C:\Users\Kavisha\Desktop\my portfolio\project\src\IMG_0262.jpg" 
                    alt="Kaveesha Sandanuwan"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <h1 className="mb-4 text-4xl font-bold sm:text-6xl lg:text-8xl">
                <span className="text-green-400">
                  Kaveesha
                </span>
                <br />
                <span className="text-white">Sandanuwan</span>
              </h1>
            </div>
            
            <div className="mb-8 text-xl text-white sm:text-2xl lg:text-3xl">
              <TypeWriter text="Full Stack Developer | Software Engineer" />
            </div>
            
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-white sm:text-xl">
              Passionate software engineering undergraduate at CINEC Campus, specializing in 
              full-stack development with a love for creating innovative digital solutions.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
              <button 
                onClick={() => scrollToSection('projects')}
                className="relative px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-green-600 rounded-lg group hover:scale-105"
              >
                <span className="relative z-10">View My Work</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 font-semibold text-green-400 transition-all duration-300 transform border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-black hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              About <span className="text-green-400">Me</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-green-500"></div>
          </div>
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="p-8 transition-all duration-300 transform bg-black border border-green-500 rounded-2xl hover:scale-105">
                <h3 className="mb-4 text-2xl font-bold text-green-400">Who I Am</h3>
                <p className="mb-4 leading-relaxed text-white">
                  I'm Kaveesha Sandanuwan, a passionate software engineering undergraduate at CINEC Campus in Sri Lanka. 
                  Based in the beautiful coastal city of Negombo, I'm dedicated to creating innovative digital solutions 
                  that make a difference.
                </p>
                <p className="leading-relaxed text-white">
                  My journey in software development is driven by curiosity and a constant desire to learn. 
                  I specialize in full-stack development, combining frontend creativity with backend logic 
                  to build comprehensive applications.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-6 bg-black border border-green-500 rounded-xl">
                  <MapPin className="mb-2 text-green-400" size={24} />
                  <h4 className="mb-1 font-semibold text-white">Location</h4>
                  <p className="text-white">Negombo, Sri Lanka</p>
                </div>
                <div className="p-6 bg-black border border-green-500 rounded-xl">
                  <Code className="mb-2 text-green-400" size={24} />
                  <h4 className="mb-1 font-semibold text-white">Focus</h4>
                  <p className="text-white">Full Stack Development</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto overflow-hidden rounded-full w-80 h-80">
                <div className="relative w-full h-full overflow-hidden bg-gray-800 border-4 border-green-500 rounded-full">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Kaveesha at work"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute text-center bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                    <p className="text-green-400">CINEC Campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Technical <span className="text-green-400">Skills</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-green-500"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
              { icon: Server, title: "Backend", skills: ["Node.js", "Express", "Python", "Java", "REST APIs", "GraphQL"] },
              { icon: Database, title: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase"] },
              { icon: Smartphone, title: "Mobile", skills: ["React Native", "Flutter", "iOS", "Android", "Cross-platform"] },
              { icon: Cpu, title: "DevOps", skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Nginx"] },
              { icon: Code, title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"] }
            ].map((category, index) => (
              <SkillCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Featured <span className="text-green-400">Projects</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-green-500"></div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                github: "https://github.com/kaveesha-sandanuwan/ecommerce-platform"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management tool with real-time updates",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"],
                github: "https://github.com/kaveesha-sandanuwan/task-manager"
              },
              {
                title: "Weather Dashboard",
                description: "Interactive weather application with data visualization",
                tech: ["React", "Chart.js", "Weather API", "Tailwind"],
                github: "https://github.com/kaveesha-sandanuwan/weather-dashboard"
              }
            ].map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Get In <span className="text-green-400">Touch</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-green-500"></div>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="p-8 bg-gray-900 border border-green-500 rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-green-400">Let's Connect</h3>
                <p className="mb-6 leading-relaxed text-white">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                  Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "kaveeshasandanuwan@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+94 760263586" },
                    { icon: MapPin, label: "Location", value: "Negombo, Sri Lanka" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="p-3 transition-all duration-300 bg-green-600 rounded-lg">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-white">{item.label}</p>
                        <p className="text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 transition-all duration-300 bg-gray-900 border border-green-500 rounded-lg group hover:border-green-400"
                  >
                    <social.icon size={24} className="text-white transition-colors duration-300 group-hover:text-green-400" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="p-8 bg-gray-900 border border-green-500 rounded-2xl">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 text-white placeholder-gray-400 transition-colors duration-300 bg-black border border-green-500 rounded-lg focus:border-green-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 text-white placeholder-gray-400 transition-colors duration-300 bg-black border border-green-500 rounded-lg focus:border-green-400 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 text-white placeholder-gray-400 transition-colors duration-300 bg-black border border-green-500 rounded-lg focus:border-green-400 focus:outline-none"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full p-4 text-white placeholder-gray-400 transition-colors duration-300 bg-black border border-green-500 rounded-lg resize-none focus:border-green-400 focus:outline-none"
                ></textarea>
                <button className="w-full py-4 font-semibold text-white transition-all duration-300 transform bg-green-600 rounded-lg hover:scale-105">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-green-500">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p className="text-white">
            © 2025 Kaveesha Sandanuwan. Crafted with React.
          </p>
        </div>
      </footer>
    </div>
  );
}

// TypeWriter Component
function TypeWriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
}

// SkillCard Component
function SkillCard({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) {
  return (
    <div className="relative p-6 transition-all duration-300 transform bg-gray-900 border border-green-500 group rounded-2xl hover:border-green-400 hover:scale-105 hover:rotate-1">
      <div className="relative">
        <div className="inline-flex p-3 mb-4 transition-all duration-300 bg-green-600 rounded-lg">
          <Icon size={24} className="text-white" />
        </div>
        <h3 className="mb-4 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm text-white transition-all duration-300 bg-black border border-green-500 rounded-full group-hover:border-green-400 group-hover:text-green-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ title, description, tech, github }: { title: string, description: string, tech: string[], github: string }) {
  return (
    <div className="relative overflow-hidden transition-all duration-300 transform bg-gray-900 border border-green-500 group rounded-2xl hover:border-green-400 hover:scale-105">
      <div className="relative h-48 overflow-hidden bg-green-700">
        <div className="absolute inset-0 transition-colors duration-300 bg-black/30 group-hover:bg-black/20"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs text-white bg-black border border-green-400 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-green-400">{title}</h3>
        <p className="leading-relaxed text-white">{description}</p>
        <div className="flex mt-4 space-x-4">
          <button className="font-medium text-green-400 transition-colors duration-300 hover:text-green-300">
            View Demo
          </button>
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 font-medium text-white transition-colors duration-300 hover:text-green-400"
          >
            <Github size={16} />
            <span>GitHub</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;