import BlogPreview from "@/components/BlogPreview";
import blogs from "@/app/blogData";

export default function Blog() {
  return (
    <main className="px-5 pt-10 pb-10 flex flex-col items-center">
      <h1 className="text-5xl text-center font-black">Blog</h1>
      <div className="max-w-[900px] w-full mx-auto">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
