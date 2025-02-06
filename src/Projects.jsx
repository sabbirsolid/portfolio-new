import ProjectCard from "./components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      name: "Blog Spotter",
      image:
        "https://i.ibb.co.com/ccSth81L/Screenshot-2025-02-05-164716.png",
      description:
        "Blog Spotter is a user-friendly application for interacting with a blogging platform. It enables users to explore, post, edit, and manage blogs, comment on posts, and maintain a personalized wishlist. The app provides a seamless and intuitive interface for an enhanced blogging experience.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://blog-spotter.web.app/",
      githubLink: "https://github.com/sabbirsolid/blog-spotter-client",
      challenges:
        "Implementing real-time inventory updates and optimizing performance",
      future: "Making more polished and fast user experience",
    },
    {
      name: "Chill Gamers",
      image:
        "https://i.ibb.co.com/pBGDNMGD/Screenshot-2025-02-05-165008.png",
      description:
        "ChillGamers is a dynamic single-page website dedicated to providing comprehensive reviews of the latest video games. Whether you're an avid gamer or just a casual player, ChillGamers offers detailed reviews, user ratings, and the latest gaming news. Our platform allows users to log in, sign up, give reviews, see reviews, update reviews, and save games etc.",
      tech: ["React", "Firebase", "Node", "Express"],
      liveLink: "https://game-lens.web.app/",
      githubLink: "https://github.com/sabbirsolid/chill-gamers-client-a10",
      challenges: "Fetching data from servers and storing data according to users need",
      future: "Adding calendar integration and time tracking",
    },
    {
      name: "Discount Pro",
      image:
        "https://i.ibb.co.com/WW1kTptd/Screenshot-174.png",
      description:
        "Discounts Pro is a coupon and discount management platform that helps users discover and collect discount coupons from various Bangladeshi e-commerce sites. The platform ensures secure user authentication, including email/password login, registration, and Google-based sign-in, using Firebase Authentication.",
      tech: ["React", "TailwindCSS", "Firebase"],
      liveLink: "https://discounts-pro.web.app/",
      githubLink: "https://github.com/sabbirsolid/discount-pro-auth-a9",
      challenges: "Handling firebase api keys",
      future: "Adding more sites and database for saving user info",
    },
  ];
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
