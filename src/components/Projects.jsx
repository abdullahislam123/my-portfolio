import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Calculator",
      desc: "A simple and responsive calculator built using HTML, CSS, and JavaScript.",
      img: "/public/calculator.png", // 👉 Add image link here
      link: "https://abdullahislam123.github.io/calculator/",
      github: "https://github.com/abdullahislam123/calculator",
    },
    {
      title: "Unit Converter",
      desc: "A temperature and distance converter app with a clean and intuitive interface.",
      img: "/public/unit-converter.png",
      link: "https://abdullahislam123.github.io/temperature-and-distance-converter/",
      github: "https://github.com/abdullahislam123/temperature-and-distance-converter",
    },
    {
      title: "Rock Paper Scissor",
      desc: "A fun interactive Rock Paper Scissors game made with HTML, CSS, and JS.",
      img: "/public/rock-paper-scissor.png",
      link: "https://abdullahislam123.github.io/rock-papaer-scissor/",
      github: "https://github.com/abdullahislam123/rock-papaer-scissor",
    },
    {
      title: "Stop Watch",
      desc: "A digital stopwatch with start, stop, and reset functionality.",
      img: "/public/stop-watch.png",
      link: "https://abdullahislam123.github.io/Stopwatch/",
      github: "https://github.com/abdullahislam123/Stopwatch",
    },
    {
      title: "Daily Expense Tracker",
      desc: "Track your daily expenses and manage your budget efficiently.",
      img: "/public/daily-expense-tracker.png",
      link: "https://abdullahislam123.github.io/expense-tracker/",
      github: "https://github.com/abdullahislam123/smart-expense-manager",
    },
    {
      title: "Twitter Clone",
      desc: "A responsive Twitter clone featuring posts, likes, and UI interactions.",
      img: "/public/twitter.png",
      link: "https://abdullahislam123.github.io/twitter-clone/",
      github: "https://github.com/abdullahislam123/twitter-clone",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
