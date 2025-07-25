export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-indigo-600">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-indigo-600">About</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-indigo-600">Projects</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-indigo-600">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
