import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ShareBar } from './components/ShareBar/ShareBar';
import { motion } from 'framer-motion';

function App() {
  const shareConfig = {
    url: 'https://example.com/awesome-article',
    title: 'Check out this awesome article!',
    description: 'An interesting article about web development and social sharing.',
    image: 'https://example.com/article-image.jpg',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 via-fuchsia-300 to-orange-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/20"
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-orange-500"
        >
          Auto Social Sharing Demo
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-r from-violet-50 to-orange-50 p-6 rounded-2xl mb-6 shadow-inner border border-white/60"
        >
          <h2 className="font-semibold text-gray-800 mb-3 text-xl">Sample Content</h2>
          <p className="text-gray-700 leading-relaxed">
            {shareConfig.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="border-t border-gray-200/60 pt-6"
        >
          <p className="text-sm font-medium text-gray-700 mb-4">Share this content:</p>
          <ShareBar config={shareConfig} />
        </motion.div>
      </motion.div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            color: '#1F2937',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '12px 24px',
          },
          success: {
            iconTheme: {
              primary: '#8B5CF6',
              secondary: '#ffffff',
            },
          },
          duration: 2000,
        }}
      />
    </div>
  );
}

export default App;