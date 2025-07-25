export default function ProjectsPage() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-sm">A personal portfolio showcasing my skills and projects, built with React and TailwindCSS.</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-2">Netflix Clone</h2>
            <p className="text-sm">A responsive Netflix UI clone using react and simple html, css and styled components.</p>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-2">Todo App</h2>
            <p className="text-sm">A simple todo app with using react for add, deleting and checking tasks.</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-3xl shadow-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-2">Food App</h2>
            <p className="text-sm">An app to order food that you like! and meal planner.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
