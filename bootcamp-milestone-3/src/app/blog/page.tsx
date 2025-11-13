import BlogPreview from "@/components/BlogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await Blog.find().sort({ date: -1 }).lean().orFail();

    return blogs.map((blog) => ({
      title: blog.title,
      slug: blog.slug,
      date: blog.date.toISOString(),
      description: blog.description,
      content: blog.content,
      image: blog.image,
      image_alt: blog.image_alt,
    }));
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs || blogs.length === 0) {
    return (
      <main className="px-5 pt-10 pb-10 flex flex-col items-center">
        <h1 className="text-5xl text-center font-black mb-4">Blog</h1>
        <p className="mt-8 text-lg text-[#666]">No blogs found.</p>
      </main>
    );
  }

  return (
    <main className="px-5 pt-10 pb-10 flex flex-col items-center">
      <h1 className="text-5xl text-center font-black mb-2">Blog</h1>
      <p className="text-center text-[#666] mb-8 max-w-[600px]">
        Thoughts, tutorials, and insights about web development and technology.
      </p>
      <div className="max-w-[900px] w-full mx-auto">
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
