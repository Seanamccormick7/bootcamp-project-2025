import Image from "next/image";
import Link from "next/link";
import connectDB from "@/database/db";
import BlogModel, { Blog } from "@/database/blogSchema";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlog(slug: string): Promise<Blog | null> {
  await connectDB();

  try {
    const blog = await BlogModel.findOne({ slug }).lean().orFail();
    return blog as unknown as Blog;
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <main className="px-5 pt-10 pb-10 flex flex-col items-center">
        <h1 className="text-5xl text-center font-black mb-4">Blog Not Found</h1>
        <p className="text-lg text-[#666] mt-4">
          Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/blog"
          className="mt-6 text-[rgb(36,94,255)] font-bold hover:underline"
        >
          ← Back to all blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="px-5 pt-10 pb-10">
      <article className="max-w-[800px] mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-6 text-[rgb(36,94,255)] font-bold hover:underline"
        >
          ← Back to all blogs
        </Link>

        <h1 className="text-4xl font-black text-[rgb(30,32,32)] mb-4">
          {blog.title}
        </h1>

        <p className="text-[#666] text-sm mb-6 font-medium">
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <Image
          src={blog.image}
          alt={blog.image_alt}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg mb-8"
        />

        <div className="prose max-w-none text-[#333] leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </div>

        <section className="mt-12 pt-8 border-t border-[#e0e0e0]">
          <h2 className="text-2xl font-bold text-[rgb(30,32,32)] mb-6">
            Comments ({blog.comments?.length || 0})
          </h2>

          {blog.comments && blog.comments.length > 0 ? (
            blog.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))
          ) : (
            <p className="text-[#666] italic">
              No comments yet. Be the first to comment!
            </p>
          )}

          <CommentForm slug={slug} />
        </section>
      </article>
    </main>
  );
}
