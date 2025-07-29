
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alice Johnson',
    text: 'This platform made booking tickets so easy and fast. Highly recommend!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Mark Smith',
    text: 'Great user experience and amazing customer service.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 3,
    name: 'Sophia Lee',
    text: 'Love the smooth animations and clean design!',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-3">
        {testimonials.map(({ id, name, text, avatar }) => (
          <motion.div
            key={id}
            className="bg-gray-100 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: id * 0.3 }}
          >
            <img
              src={avatar}
              alt={name}
              className="mx-auto rounded-full w-20 h-20 mb-4 object-cover"
            />
            <p className="text-gray-700 italic mb-4">"{text}"</p>
            <h3 className="font-semibold text-lg">{name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
