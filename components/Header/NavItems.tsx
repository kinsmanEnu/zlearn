import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock components - replace with your actual imports
const Logo = () => <div className="font-bold text-xl text-white">Logo</div>;
const ModalSearch = () => <Icon icon="ion:search" className="text-white text-xl cursor-pointer" />;
const ActionButton = () => (
  <div className="flex gap-3">
    <button className="px-4 py-2 text-white border border-white rounded hover:bg-white hover:text-default transition">Sign In</button>
    <button className="px-4 py-2 bg-white text-default rounded hover:bg-gray-100 transition">Sign Up</button>
  </div>
);

// NavItems Component
function NavItems({ isMobile = false, onClose = () => {} }) {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const exploreByGoal = [
    'Learn AI',
    'Launch a new career',
    'Prepare for a certification',
    'Practice with Role Play',
  ];

  const aiCategories = [
    'AI Fundamentals',
    'AI For Professionals',
    'AI For Developers',
    'AI For Creatives',
  ];

  const categories = [
    'Development',
    'Business',
    'Finance & Accounting',
    'IT & Software',
    'Office Productivity',
    'Personal Development',
    'Design',
    'Marketing',
    'Lifestyle',
    'Photography & Video',
    'Health & Fitness',
    'Music',
    'Teaching & Academics',
  ];

  if (isMobile) {
    return (
      <motion.div 
        className="flex flex-col space-y-4 text-gray-800"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05
            }
          }
        }}
      >
        {/* Explore Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <motion.button 
            onClick={() => setIsExploreOpen(!isExploreOpen)}
            className="flex items-center justify-between w-full py-3 px-4 hover:bg-primary text-sm rounded transition"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-semibold">Explore</span>
            <motion.div
              animate={{ rotate: isExploreOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Icon 
                icon="ion:chevron-down"
                className="text-lg" 
              />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {isExploreOpen && (
              <motion.div 
                className="pl-4 mt-2 space-y-2 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div 
                  className="mb-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 px-4">Explore by Goal</h4>
                  {exploreByGoal.map((goal, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      className="block py-2 px-4 hover:bg-primary text-sm rounded" 
                      onClick={onClose}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {goal}
                    </motion.a>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 px-4">AI Categories</h4>
                  {aiCategories.map((category, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      className="block py-2 px-4 hover:bg-primary text-sm rounded" 
                      onClick={onClose}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {category}
                    </motion.a>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 px-4">All Categories</h4>
                  {categories.map((category, index) => (
                    <motion.a 
                      key={index} 
                      href="#" 
                      className="block py-2 px-4 hover:bg-primary text-sm rounded" 
                      onClick={onClose}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.03 }}
                      whileHover={{ x: 5 }}
                    >
                      {category}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Other Nav Items */}
        {['Book a Tutor', 'Become a Tutor', 'Our Programs', 'Download', 'Plan & Pricing', 'Contact Us'].map((item, index) => (
          <motion.a 
            key={item}
            href="#" 
            className="py-3 px-4 hover:bg-primary text-sm rounded transition" 
            onClick={onClose}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.98 }}
          >
            {item}
          </motion.a>
        ))}
        
        {/* Mobile Action Buttons */}
        <motion.div 
          className="pt-4 border-t border-gray-200 space-y-3"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <motion.button 
            className="w-full py-3 px-4 text-default border-2 border-default rounded-lg font-semibold hover:bg-primary text-sm transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign In
          </motion.button>
          <motion.button 
            className="w-full py-3 px-4 bg-default text-white rounded-lg font-semibold hover:bg-[#3A5F5F] transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign Up
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  // Desktop Nav with animations
  return (
    <div>
      <ul className='flex gap-8'>
        <li 
          className='relative cursor-pointer'
          onMouseEnter={() => setIsExploreOpen(true)}
          onMouseLeave={() => setIsExploreOpen(false)}
        >
          <motion.span 
            className='flex items-center gap-1 hover:text-default transition'
            whileHover={{ y: -2 }}
          >
            Explore
            <motion.div
              animate={{ rotate: isExploreOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Icon icon="ion:chevron-down" className="text-sm" />
            </motion.div>
          </motion.span>
          
          <AnimatePresence>
            {isExploreOpen && (
              <motion.div 
                className='absolute top-full left-0 mt-2 bg-white shadow-2xl rounded-lg border border-gray-200 w-[600px] z-50 flex overflow-hidden'
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <motion.div 
                  className='flex-1 p-6 border-r border-gray-200'
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className='mb-6'>
                    <h3 className='text-sm font-semibold text-gray-500 mb-3'>Explore by Goal</h3>
                    <ul className='space-y-2'>
                      {exploreByGoal.map((goal, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + index * 0.05 }}
                        >
                          <motion.a 
                            href="#" 
                            className='flex items-center justify-between py-2 px-3 hover:bg-primary text-sm rounded transition group'
                            whileHover={{ x: 5 }}
                          >
                            <span className='text-gray-700 group-hover:text-default'>{goal}</span>
                            <Icon icon="ion:chevron-forward" className="text-gray-400 group-hover:text-default" />
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className='border-t border-gray-200 pt-4'>
                    <ul className='space-y-2'>
                      {categories.map((category, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + index * 0.02 }}
                        >
                          <motion.a 
                            href="#" 
                            className='flex items-center justify-between py-2 px-3 hover:bg-primary text-sm rounded transition group'
                            whileHover={{ x: 5 }}
                          >
                            <span className='text-gray-700 group-hover:text-default'>{category}</span>
                            <Icon icon="ion:chevron-forward" className="text-gray-400 group-hover:text-default" />
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div 
                  className='w-64 p-6 bg-gray-50'
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  <ul className='space-y-2'>
                    {aiCategories.map((category, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <motion.a 
                          href="#" 
                          className='flex items-center justify-between py-2 px-3 hover:bg-white rounded transition group'
                          whileHover={{ x: 5 }}
                        >
                          <span className='text-gray-700 group-hover:text-default'>{category}</span>
                          <Icon icon="ion:chevron-forward" className="text-gray-400 group-hover:text-default" />
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
        {['Book a Tutor', 'Become a Tutor', 'Our Programs', 'Download', 'Plan & Pricing', 'Contact Us'].map((item) => (
          <motion.li 
            key={item}
            className='cursor-pointer hover:text-default transition'
            whileHover={{ y: -2 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default NavItems