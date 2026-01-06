"use client"
import React, { useState, useEffect } from "react"; // 1. Added useEffect
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Code2, Brain, BarChart2, Book, ArrowRight, Github, Twitter, Linkedin, Menu, X, ChevronRight } from 'lucide-react';
import Link from "next/link";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(''); // 2. State for active section
  const [activeFeature, setActiveFeature] = useState(0);

  // 3. SCROLLSPY LOGIC (The Magic ✨)
  useEffect(() => {
    // Select all sections that have an ID
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Section is "active" when 40% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // 4. Updated Navigation Link Component
  const NavigationLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    // Remove the '#' to compare with ID (e.g., "#features" becomes "features")
    const sectionId = href.replace('#', '');
    const isActive = activeSection === sectionId;

    return (
      <a 
        href={href} 
        className={`transition-colors duration-200 ${
          isActive 
            ? "text-blue-400 font-bold" // Active Style (Blue)
            : "text-gray-300 hover:text-white" // Inactive Style
        }`}
      >
        {children}
      </a>
    );
  };

  const features = [
    {
      title: "Personalized Dashboards",
      description: "Track your progress and get customized recommendations based on your learning style and goals.",
      icon: <BarChart2 className="w-6 h-6" />,
      stats: "87% improvement in learning speed"
    },
    {
      title: "Algorithm Visualizations",
      description: "Interactive visualizations that help you understand complex algorithms step by step.",
      icon: <Brain className="w-6 h-6" />,
      stats: "500+ algorithm animations"
    },
    {
      title: "Code Analysis",
      description: "Get instant feedback on your code's efficiency and suggestions for optimization.",
      icon: <Code2 className="w-6 h-6" />,
      stats: "Real-time optimization tips"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and progress reports.",
      icon: <Book className="w-6 h-6" />,
      stats: "Detailed performance metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AlgoEase
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-xl">
              {/* 5. Updated Links to match your actual Sections */}
              <NavigationLink href="#features">Features</NavigationLink>
              <NavigationLink href="#how-it-works">How It Works</NavigationLink>
              <NavigationLink href="#faq">FAQ</NavigationLink>
              
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 text-white text-base">
                Try it Free
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <NavigationLink href="#features">Features</NavigationLink>
                <NavigationLink href="#how-it-works">How It Works</NavigationLink>
                <NavigationLink href="#faq">FAQ</NavigationLink>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full transition-colors duration-200">
                  Try it Free
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 relative z-10">
              <div className="animate-fade-in-up">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Master DSA with Ease!
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Your AI-powered learning companion for mastering Data Structures and Algorithms. Get structured guidance, visual learning, and real-time feedback.
                </p>
                <div className="flex space-x-4">
                <Link href='/signup'><button className="bg-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button></Link>
                  <button className="border border-gray-600 px-8 py-3 rounded-lg font-medium hover:border-blue-400 transition-all duration-200 text-gray-300 hover:text-white">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-8 h-64 flex items-center justify-center backdrop-blur-xl transform hover:scale-105 transition-transform duration-200">
                <Code2 className="w-32 h-32 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-200 transform hover:scale-105 cursor-pointer border border-gray-700 hover:border-blue-500"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-sm text-blue-400">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800" id="how-it-works">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Step 1: Sign Up</h3>
              <p className="text-gray-400">Create an account and get access to a personalised roadmap tailored according to your needs and interests.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Step 2: Learn and Practice</h3>
              <p className="text-gray-400">Follow structured lessons, visualize concepts, and complete exercises to enhance your skills.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Step 3: Analyse your code</h3>
              <p className="text-gray-400">Use our code analyser for easy explanation, time and space complexity analysis, optimisation techniques and some edge test-cases!</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Step 4: Get Feedback</h3>
              <p className="text-gray-400">Receive real-time feedback and track your progress to ensure continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">What is AlgoEase?</h3>
              <p className="text-gray-400">AlgoEase is an AI-powered learning platform designed to help you master Data Structures and Algorithms through structured guidance, visual learning, and real-time feedback.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="font-semibold text-white mb-2">How does the free trial work?</h3>
              <p className="text-gray-400">The free trial gives you access to select lessons and features. You can explore the platform before committing to a full subscription.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Master DSA?</h2>
          <p className="text-xl mb-8 text-gray-100">Join thousands of developers whove improved their coding skills with AlgoEase</p>
          <Link href='/signup'><button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
            Start Learning Now
          </button></Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AlgoEase
              </h3>
              <p className="text-gray-400">Making DSA learning accessible and effective for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
