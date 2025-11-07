export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-8 md:px-20 gap-10">
      
      {/* Left side (text) */}
      <div className="flex-1 text-center md:text-left space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
            Abdullah
          </span>{" "}
          👋
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          I’m a passionate <span className="text-blue-400 font-semibold">Frontend Developer </span> 
          skilled in <span className="text-cyan-300">React</span> and <span className="text-cyan-300">Tailwind CSS</span>.  
          I love building modern, responsive, and beautiful web apps.
        </p>

        <a
          href="#projects"
          className="inline-block bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          View My Work 🚀
        </a>
      </div>

      {/* Right side (image) */}
      <div className="flex-1 flex justify-center">
        <img
          src="/src/assets/my_pic.jpg" // 🖼️ Replace this with your image link
          alt="Abdullah Developer"
          className="w-80 md:w-80 rounded-full shadow-2xl border-4 border-blue-500/30 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
