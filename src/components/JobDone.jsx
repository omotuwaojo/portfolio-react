import React from 'react';



export default function JobDone() {

  // Arrays of projects
  const projects = [
    {
      title: "Project 1",
      description: "A detailed description of the project...",
      image: "/images/Rectangle 30.png",
      tech: ["React", "Tailwind CSS"],
      demo: "#",
      github: "#",
    },
    // Add more projects
    {
      title: "Project 2",
      description: "Description of another project.",
      image: "/images/Rectangle 32.png",
      tech: ["Javascript", "Bootstrap","Django"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project 2",
      description: "Description of another project.",
      image: "/images/Rectangle 34.png",
      tech: ["Tailwind", "Nodejs"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project 2",
      description: "Description of another project.",
      image: "/images/Rectangle 30.png",
      tech: ["React", "Django"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project 2",
      description: "Description of another project.",
      image: "/images/Rectangle 34.png",
      tech: ["React", "Nodejs"],
      demo: "#",
      github: "#",
    },
    {
      title: "Project 2",
      description: "Description of another project.",
      image: "/images/Rectangle 30.png",
      tech: ["Javascript", "Bootstrap"],
      demo: "#",
      github: "#",
    }
  ];

 

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
      <p className="text-center text-gray-600 mb-10">
        Swipe through to explore my featured projects.
      </p>

      {/* Carousel Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card */}
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => {


                   // Array of colors
                  const colors = [
                    "bg-blue-100 text-blue-500",
                    "bg-green-100 text-green-500",
                    "bg-yellow-100 text-yellow-500",
                    "bg-red-100 text-red-500",
                    "bg-purple-100 text-purple-500",
                  ];

                  // Get a color based on the index
                  const colorClass = colors[i % colors.length];

                  return(
                   <span key={i} className={`text-xs bg-blue-100 text-blue-500 px-2 py-1 rounded ${colorClass}`}>
                    {tech}
                </span>
                
                )
                })}

              </div>
              <div className="flex justify-between">
                <a
                  href={project.demo}
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Repeat similar cards for other projects */}

      </div>
    </div>

  )
}
