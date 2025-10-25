import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import blogs from "@/app/blogData";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: "0 20px 40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontFamily: "Georgia",
            textAlign: "center",
          }}
        >
          Blog
        </h1>
        <div style={{ maxWidth: "900px", width: "100%", margin: "0 auto" }}>
          {blogs.map((blog) => (
            <BlogPreview key={blog.slug} {...blog} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
