export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          Hi, my name is <span className="font-semibold text-indigo-700">Minahil</span>. <br />
          I’m a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> who loves building beautiful and responsive websites.
        </p>
      </div>
    </section>
  );
}
