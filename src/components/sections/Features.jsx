'use client';

import { motion } from 'framer-motion';

const featureItems = [
  {
    title: "Natural Conversations",
    description: "Our AI understands context, handles interruptions, and maintains conversation flow naturally.",
    icon: "💬"
  },
  {
    title: "Enterprise Integration",
    description: "Seamlessly connect with your existing systems and customize to your specific business needs.",
    icon: "🔄"
  },
  {
    title: "Multilingual Support",
    description: "Communicate with customers in over 30 languages with native-level understanding and responses.",
    icon: "🌎"
  },
  {
    title: "Voice Biometrics",
    description: "Securely identify customers through their unique voice patterns for enhanced security.",
    icon: "🔒"
  }
];

const Features = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform offers cutting-edge capabilities to transform your customer service experience.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featureItems.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;