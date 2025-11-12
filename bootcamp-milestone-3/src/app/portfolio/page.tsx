import ProjectCard from "@/components/ProjectCard";
import projects from "@/app/projectData";

export default function Portfolio() {
  return (
    <main className="px-5 pt-10 pb-10">
      <h1 className="flex justify-center text-5xl font-black">Portfolio</h1>

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
}
