"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Palette } from 'lucide-react';

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black text-white">
      {/* Hero Section with Parallax */}
      <motion.header 
        ref={targetRef}
        style={{ opacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80')] bg-cover bg-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
        <motion.div 
          {...fadeIn}
          className="container mx-auto px-6 text-center z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-4xl font-bold text-red-600"
          >
            CODANA
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            AI Solutions for Tomorrow
            <span className="text-red-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforming Businesses Through Advanced AI Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = '/backend'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Start Your Project
            </motion.button>
            <motion.button
              onClick={() => window.location.href = '/backend'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Our Work
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Featured Clients */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-black/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-center text-gray-400 mb-8">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all bg-white/10 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-neutral-900/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Services
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            We deliver cutting-edge solutions tailored to your needs, ensuring your business stays ahead in the digital landscape.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-2xl hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-300"
              >
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-red-600 hover:text-red-400 inline-flex items-center gap-2"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section with Gradient Cards */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-neutral-900/50 backdrop-blur-lg"
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-red-600/10 to-neutral-800 border border-red-600/20"
              >
                <motion.h3 
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  className="text-5xl font-bold text-red-600 mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Lets create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-lg font-medium transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const clients = [
  { name: "AITech" },
  { name: "DataCorp" },
  { name: "MLSystems" },
  { name: "NeuralLabs" },
];

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "AI Model Development",
    description: "Custom AI solutions from machine learning to deep neural networks, tailored to your specific needs."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI solutions to transform your business processes."
  }
];

const process = [
  {
    title: "Analysis",
    description: "We evaluate your data and AI requirements to define the optimal approach."
  },
  {
    title: "Model Design",
    description: "Architecting custom AI models tailored to your specific use case."
  },
  {
    title: "Training & Testing",
    description: "Rigorous model training and validation using your data."
  },
  {
    title: "Deployment & Scaling",
    description: "Implementing and scaling your AI solution with ongoing optimization."
  }
];

const stats = [
  { value: "50+", label: "AI Models Deployed" },
  { value: "95%", label: "Model Accuracy" },
  { value: "8+", label: "Years in AI" }
];
