export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

// Array of blog posts
const blogs: Blog[] = [
  {
    title: "Understanding TypeScript",
    date: "2025-10-10",
    description:
      "What TypeScript adds to JavaScript and how it helps you ship fewer bugs.",
    image: "/images/typescript.jpg",
    imageAlt: "TypeScript logo",
    slug: "understanding-typescript",
  },
  {
    title: "From Static to Dynamic Sites",
    date: "2025-10-12",
    description:
      "A gentle intro to DOM manipulation to turn static pages into living apps.",
    image: "/images/dom.png",
    imageAlt: "DOM nodes schematic",
    slug: "from-static-to-dynamic",
  },
];

export default blogs;
