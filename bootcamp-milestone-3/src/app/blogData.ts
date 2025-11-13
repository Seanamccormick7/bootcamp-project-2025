export interface Blog {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
}

const blogs: Blog[] = [
  {
    title: "Understanding TypeScript",
    slug: "understanding-typescript",
    date: new Date("2025-10-10"),
    description:
      "What TypeScript adds to JavaScript and how it helps you ship fewer bugs.",
    content:
      "TypeScript is a superset of JavaScript that adds static typing to the language. This helps catch errors during development rather than at runtime. With TypeScript, you can define types for your variables, function parameters, and return values, making your code more predictable and easier to maintain. The TypeScript compiler checks your code for type errors before it runs, helping you catch bugs early in the development process. This is especially valuable in large codebases where it's easy to lose track of what types of data different parts of your application expect.",
    image: "/images/typescript.jpg",
    image_alt: "TypeScript logo",
  },
  {
    title: "From Static to Dynamic Sites",
    slug: "from-static-to-dynamic",
    date: new Date("2025-10-12"),
    description:
      "A gentle intro to DOM manipulation to turn static pages into living apps.",
    content:
      "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. Learn how to manipulate it to create dynamic, interactive websites. When you write JavaScript that interacts with elements on your page—like changing text, hiding elements, or responding to clicks—you're using the DOM API. Understanding the DOM is crucial for building modern web applications that respond to user interactions in real-time.",
    image: "/images/dom.png",
    image_alt: "DOM nodes schematic",
  },
];

export default blogs;
