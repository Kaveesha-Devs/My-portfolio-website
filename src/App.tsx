import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Code, Database, Globe, Mail, Phone, MapPin, 
  ExternalLink, Star, ChevronDown, User, Briefcase, 
  MessageSquare, Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Create floating code snippets
  const codeSnippets = [
    'const developer = "Kaveesha";',
    'function createAwesome() { return true; }',
    'if (coding) { happiness++; }',
    'while (learning) { skills.push(new Skill()); }',
    'class SoftwareEngineer extends Student {}',
    'SELECT * FROM opportunities WHERE passion = true;',
    'import React from "react";',
    'console.log("Hello World!");',
    'git commit -m "Amazing features"',
    'npm install success'
  ];

  const skills = [
    { name: 'C', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'Java', level: 90 },
    { name: 'React', level: 85 },
    { name: 'MySQL', level: 75 },
    { name: 'JavaScript', level: 88 },
    { name: 'Python', level: 70 },
    { name: 'Node.js', level: 75 }
  ];

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'Full-stack e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MySQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates, built using modern web technologies.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Student Information System',
      description: 'Comprehensive system for managing student records, grades, and academic information with intuitive interface.',
      tech: ['Java', 'MySQL', 'JavaFX'],
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const reviews = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'Tech Solutions Ltd',
      rating: 5,
      comment: 'Kaveesha delivered exceptional work on our web application. His attention to detail and technical expertise made the project a huge success.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      rating: 5,
      comment: 'Outstanding developer with great communication skills. The solution he provided exceeded our expectations and was delivered on time.'
    },
    {
      name: 'Emma Davis',
      role: 'Business Owner',
      company: 'Local Business',
      rating: 5,
      comment: 'Professional, reliable, and skilled. Kaveesha transformed our business requirements into a beautiful, functional application.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Generate stars for background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
        size: Math.random() * 3 + 1
      });
    }
    return stars;
  };

  const [stars] = useState(generateStars());

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Night Sky with Stars */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.animationDelay}s`
              }}
            />
          ))}
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0">
          {codeSnippets.map((code, index) => (
            <div
              key={index}
              className="absolute font-mono text-sm text-green-400 opacity-20 animate-float"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${index * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {code}
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-gray-900/80 backdrop-blur-md">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                KSM
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden space-x-8 md:flex">
                {['home', 'about', 'skills', 'projects', 'reviews', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 capitalize transition-colors duration-300 hover:text-blue-400 hover:scale-105"
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Mobile menu button */}
              <button
                className="text-white md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-t border-gray-700 md:hidden bg-gray-900/90">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'skills', 'projects', 'reviews', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 text-gray-300 capitalize transition-colors duration-300 hover:text-blue-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="flex items-center min-h-screen pt-20 pb-16">
          <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Profile Photo */}
              <div className="mb-8 animate-fade-in">
                <div className="w-48 h-48 p-1 mx-auto transition-transform duration-300 rounded-full shadow-2xl bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105">
                  <div className="flex items-center justify-center w-full h-full bg-gray-800 border-2 border-gray-700 rounded-full">
                    <User size={80} className="text-gray-400" />
                  </div>
                </div>
              </div>

              <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl animate-slide-up">
                Kaveesha Sandanuwan
                <span className="block text-4xl text-transparent md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Muthugala
                </span>
              </h1>

              <p className="mb-4 text-xl text-gray-300 md:text-2xl animate-slide-up animation-delay-200">
                Software Engineer Undergraduate
              </p>

              <div className="flex items-center justify-center mb-8 text-gray-400 animate-slide-up animation-delay-400">
                <MapPin size={20} className="mr-2" />
                <span>Cinec Campus, Malabe • Negombo, Sri Lanka</span>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-xl animate-slide-up animation-delay-600"
              >
                Get In Touch
              </button>

              <div className="mt-12 animate-bounce">
                <ChevronDown size={32} className="mx-auto text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-300">
                  I'm a passionate Software Engineering undergraduate at Cinec Campus, Malabe, with a strong foundation in programming and web development. Currently based in Negombo, I bring creativity and technical expertise to every project I work on.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  My journey in software development has been driven by curiosity and a desire to create solutions that make a difference. I specialize in full-stack development, with particular expertise in modern web technologies and database management.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow developers to build innovative solutions.
                </p>
              </div>

              <div className="p-8 border border-gray-700 bg-gray-800/70 backdrop-blur-sm rounded-2xl">
                <h3 className="mb-6 text-2xl font-bold text-white">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Software Engineering Student</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Database Enthusiast</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 mr-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">Technical Skills</h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skills.map((skill, index) => (
                <div key={skill.name} className="p-6 transition-shadow duration-300 border border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm rounded-xl hover:shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full">
                    <div 
                      className="h-3 transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 md:grid-cols-4">
              {[
                { icon: Code, name: 'Programming' },
                { icon: Globe, name: 'Web Development' },
                { icon: Database, name: 'Database Design' },
                { icon: Briefcase, name: 'Project Management' }
              ].map((item, index) => (
                <div key={item.name} className="text-center group">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 transition-transform duration-300 border border-gray-700 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110">
                    <item.icon size={32} className="text-blue-400" />
                  </div>
                  <p className="font-medium text-gray-300">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">My Projects</h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="overflow-hidden transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm rounded-xl hover:shadow-2xl hover:scale-105">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-xs text-blue-300 border rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-blue-400 transition-colors duration-300 hover:text-purple-400">
                      <span className="mr-1">View Project</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">Client Reviews</h2>
              <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, index) => (
                <div key={index} className="p-6 transition-all duration-300 border border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-sm rounded-xl hover:shadow-xl hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mb-4 italic text-gray-300">"{review.comment}"</p>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.role}</p>
                    <p className="text-sm text-blue-400">{review.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/50 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">Get In Touch</h2>
              <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></div>
              <p className="text-xl text-gray-300">Let's discuss your next project</p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
                
                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg text-white">kaveesha.muthugala@email.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-lg text-white">+94 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-lg text-white">Negombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-gray-700 bg-gray-800/70 backdrop-blur-sm rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-white">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border border-gray-600 rounded-lg bg-gray-700/70 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border border-gray-600 rounded-lg bg-gray-700/70 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border border-gray-600 rounded-lg bg-gray-700/70 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 text-white placeholder-gray-400 transition-colors duration-300 border border-gray-600 rounded-lg bg-gray-700/70 focus:border-blue-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-white border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Kaveesha Sandanuwan Muthugala
              </div>
              <p className="mb-4 text-gray-400">Software Engineer Undergraduate</p>
              <p className="text-sm text-gray-500">
                © 2024 Kaveesha Sandanuwan Muthugala. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;