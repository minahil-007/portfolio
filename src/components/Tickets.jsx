import { motion } from 'framer-motion';

const tickets = [
  { id: 1, name: 'Standard', price: '$50', description: 'Access to general seating.' },
  { id: 2, name: 'VIP', price: '$150', description: 'VIP lounge and front-row seats.' },
  { id: 3, name: 'Backstage', price: '$300', description: 'Meet the artists and backstage access.' },
];

export default function Tickets() {
  return (
    <section className="py-16 bg-gray-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Choose Your Ticket</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
        {tickets.map(({ id, name, price, description }) => (
          <motion.div
            key={id}
            className="bg-white p-8 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="text-3xl font-bold mb-6">{price}</p>
            <p className="text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
