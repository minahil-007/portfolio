import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Tickets', path: '/book' },  // Assuming Tickets page is /book
    { name: 'About', path: '/about' },   // You’ll need to create this route or remove
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className="flex justify-between items-center p-6 bg-gray-900 text-white fixed w-full top-0 z-50 shadow-md"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-2xl font-bold cursor-pointer">TicketMaster</div>
      <ul className="hidden md:flex space-x-8 text-lg">
        {links.map(({ name, path }) => (
          <li key={name} className="hover:text-blue-400 transition-colors duration-300">
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
