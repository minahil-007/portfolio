import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get Your Tickets Instantly
      </motion.h1>
      <motion.p
        className="text-white max-w-xl mb-8 text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Experience the easiest way to book tickets for your favorite events.
      </motion.p>
      <motion.button
        onClick={() => navigate('/book')}  // <-- Add this to navigate on click
        className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Book Now
      </motion.button>
    </section>
  );
}
