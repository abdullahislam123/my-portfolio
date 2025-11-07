export default function ProjectCard({ title, desc, img, link, github }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-100">
      {img && (
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{desc}</p>

        <div className="mt-4 flex justify-between items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              Live Demo →
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
