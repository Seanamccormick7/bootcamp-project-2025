import ProjectCard from "@/components/ProjectCard";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

async function getProjects() {
  await connectDB();

  try {
    const projects = await Project.find().lean().orFail();

    return projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      description: project.description,
      technologies: project.technologies,
      image: project.image,
      image_alt: project.image_alt,
      links: project.links,
    }));
  } catch (err) {
    console.error("Error fetching projects:", err);
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  if (!projects || projects.length === 0) {
    return (
      <main className="px-5 pt-10 pb-10">
        <h1 className="flex justify-center text-5xl font-black mb-4">
          Portfolio
        </h1>
        <p className="text-center mt-8 text-lg text-[#666]">
          No projects found.
        </p>
      </main>
    );
  }

  return (
    <main className="px-5 pt-10 pb-10">
      <h1 className="flex justify-center text-5xl font-black mb-2">
        Portfolio
      </h1>
      <p className="text-center text-[#666] mb-10 max-w-[700px] mx-auto">
        A showcase of my full-stack projects featuring modern web technologies,
        cloud infrastructure, and real-world applications.
      </p>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
}
