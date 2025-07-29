import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Booktickets from './components/pages/Booktickets';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Booktickets />} />
<Route path="/about" element={<About />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}
