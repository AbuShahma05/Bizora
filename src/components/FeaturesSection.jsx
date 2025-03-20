import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  // Features data array containing icon, title, and description
  const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present a proposal and refine the details"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ];

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      {/* Section Heading */}
      <motion.div variants={fadeIn('up', 0.3)} className="text-center mb-12">
        <motion.h2 variants={textVariant(0.2)} className="text-3xl font-bold mb-4">
          How can we help your business?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          When you resell Bizora, you build trust and increase conversions.
        </motion.p>
      </motion.div>

      {/* Features Cards Grid */}
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.3 * (index + 1))}
            className="flex flex-col items-center p-6 bg-blue-200 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            {/* Feature Icon inside colored circle */}
            <motion.div 
              variants={fadeIn('down', 0.4 * (index + 1))}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center" 
              style={{ 
                backgroundColor: index === 0 ? '#F1EFFD' : 
                               index === 1 ? '#FFE7E7' : 
                               '#FFF3E4'
              }}
            >
              <motion.div 
                variants={fadeIn('up', 0.5 * (index + 1))}
                className="text-3xl"
              >
                {feature.icon}
              </motion.div>
            </motion.div>

            {/* Feature Title */}
            <motion.h3 variants={textVariant(0.3)} className="text-2xl font-medium mb-3">
              {feature.title}
            </motion.h3>

            {/* Feature Description */}
            <motion.p 
              variants={fadeIn('up', 0.6 * (index + 1))}
              className="text-gray-600 text-lg text-center max-w-xs"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call-to-Action Button */}
      <motion.div variants={fadeIn('up', 0.7)} className="text-center mt-12">
        <motion.button 
          variants={fadeIn('up', 0.8)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all relative shadow-lg"
        >
          Become a Partner
          {/* Soft Glow Animation for Button */}
          <motion.div 
            className="absolute -z-10 w-full h-full rounded-full bg-blue-600/30 blur-xl top-0 left-0"
            animate={{ opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeaturesSection;
