export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-100">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          I'm currently a <span className="font-semibold text-indigo-700">student</span> and a <span className="font-semibold text-blue-600">dev intern</span> at Hatzs Dimensions. <br />
          I love crafting <span className="font-semibold text-purple-700">modern web applications</span> using <span className="font-semibold text-blue-700">React</span> and <span className="font-semibold text-pink-600">TailwindCSS</span>.
        </p>
      </div>
    </section>
  );
}
