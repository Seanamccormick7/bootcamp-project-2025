/**
 * Blog list rendering.
 */
// Minimal seed data
const blogs = [
  {
    title: "Understanding TypeScript",
    date: "2025-10-10",
    description:
      "What TypeScript adds to JavaScript and how it helps you ship fewer bugs.",
    image: "images/typescript.jpg",
    imageAlt: "TypeScript logo",
    slug: "understanding-typescript",
  },
  {
    title: "From Static to Dynamic Sites",
    date: "2025-10-12",
    description:
      "A gentle intro to DOM manipulation to turn static pages into living apps.",
    image: "images/dom.png",
    imageAlt: "DOM nodes schematic",
    slug: "from-static-to-dynamic",
  },
];
/**
 * Render blogs into #blog-container.
 * Uses forEach with an arrow function per the style guide hint.
 */
const renderBlogs = (list) => {
  const container = document.getElementById("blog-container");
  if (!container) {
    console.warn("[blog] Missing container #blog-container");
    return;
  }
  // Iterate using an arrow function inside forEach (concise + inline access to blog props)
  list.forEach((blog) => {
    const card = document.createElement("article");
    card.className = "blog-card";
    const link = document.createElement("a");
    link.href = `blogs/${blog.slug}.html`;
    link.className = "blog-link";
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image";
    const title = document.createElement("h2");
    title.className = "blog-title";
    title.textContent = blog.title;
    const meta = document.createElement("p");
    meta.className = "blog-meta";
    meta.textContent = new Date(blog.date).toLocaleDateString();
    const desc = document.createElement("p");
    desc.className = "blog-desc";
    desc.textContent = blog.description;
    link.appendChild(image);
    link.appendChild(title);
    card.appendChild(link);
    card.appendChild(meta);
    card.appendChild(desc);
    container.appendChild(card);
  });
};
// Run after DOM is ready so #blog-container is present
document.addEventListener("DOMContentLoaded", () => {
  renderBlogs(blogs);
});
export {};
//# sourceMappingURL=blog.js.map
