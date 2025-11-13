import mongoose, { Schema } from "mongoose";

export type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string;
  image: string;
  image_alt: string;
  links: {
    label: string;
    url: string;
  }[];
};

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  links: [
    {
      label: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
});

const ProjectModel =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default ProjectModel;
