import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">About TicketMaster</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At TicketMaster, our goal is simple — make ticket booking effortless, secure, and enjoyable for everyone.
            Whether it's concerts, sports, theater, or festivals, we bring the event to your fingertips.
          </p>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Booking',
                img: 'https://img.icons8.com/color/96/flash-on.png',
                desc: 'Secure your seat in seconds with our lightning-fast booking process.'
              },
              {
                title: 'Curated Events',
                img: 'https://img.icons8.com/color/96/conference.png',
                desc: 'Find top-rated events and exclusive experiences near you.'
              },
              {
                title: 'Secure Payments',
                img: 'https://img.icons8.com/color/96/lock.png',
                desc: 'Multiple payment options protected with modern encryption.'
              }
            ].map(({ title, img, desc }) => (
              <div key={title} className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-md transition">
                <img src={img} alt={title} className="mx-auto mb-4" />
                <h3 className="font-bold text-lg text-blue-800 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded by event enthusiasts and tech lovers, TicketMaster was created to bridge the gap between experiences and technology.
              We believe booking a ticket should be as exciting as the event itself.
              Our team is passionate about live entertainment and is committed to making your journey smooth from start to stage.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
