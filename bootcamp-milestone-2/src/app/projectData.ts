export interface Project {
  title: string;
  description: string;
  technologies: string;
  image: string;
  imageAlt: string;
  links: {
    label: string;
    url: string;
  }[];
}

const projects: Project[] = [
  {
    title: "InternTrackr",
    description:
      "Full-stack internship tracker with auth, search, WebSockets collaboration, serverless deadline alerts, and CI/CD with GitHub Actions.",
    technologies: "TypeScript, React, Node, MongoDB/Postgres, Redis, AWS",
    image: "/images/interntrakr.png",
    imageAlt: "InternTrackr project",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/Seanamccormick7/interntrakr",
      },
    ],
  },
  {
    title: "Headshot AI",
    description:
      "Generated professional AI headshots with payment integration. Implemented uploads/auth, payment processing, GPU training/inference pipeline, and Dockerized deployment on AWS.",
    technologies:
      "Next.js, FastAPI, Celery, Stable Diffusion, PostgreSQL, Stripe, EC2",
    image: "/images/HeadshotAI-image.png",
    imageAlt: "Headshot AI project",
    links: [
      {
        label: "View Live Site",
        url: "https://seralaboratories.com/",
      },
      {
        label: "View backend on GitHub",
        url: "https://github.com/Seanamccormick7/headshotAI-AWS",
      },
      {
        label: "View frontend on GitHub",
        url: "https://github.com/Seanamccormick7/headshot-ai",
      },
    ],
  },
  {
    title: "Homebase App",
    description:
      "A streamlined property management app designed for real estate professionals, property managers, and landlords. Features full CRUD functionality, user authentication, Stripe payment integration, and lifetime access for users.",
    technologies:
      "Next.js, TypeScript, Auth.js, JWT, Stripe, Vercel, PostgreSQL, Tailwind CSS, Zod",
    image: "/images/homebase-image.png",
    imageAlt: "Homebase App screenshot",
    links: [
      {
        label: "View Live Site",
        url: "https://homebaseprops.com",
      },
      {
        label: "View on GitHub",
        url: "https://github.com/Seanamccormick7/homebase",
      },
    ],
  },
];

export default projects;
