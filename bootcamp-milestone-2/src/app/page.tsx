import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "0 20px 40px 20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontFamily: "Georgia",
          }}
        >
          Hi, I&apos;m Sean McCormick!
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            backgroundColor: "#f8f8f8",
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div style={{ flexShrink: 0 }}>
            <Image
              src="/images/Sean-image.jpg"
              alt="Sean McCormick"
              width={280}
              height={380}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              }}
            />
          </div>
          <div style={{ flex: 1, marginLeft: "20px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>About Me</h2>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
              I&apos;m a <strong>Computer Science student</strong> at California
              Polytechnic State University, San Luis Obispo, expected to
              graduate in <strong>June 2027</strong>. I just transferred in from
              the Bay Area, and I&apos;m passionate about building full-stack
              web applications and solving real-world problems.
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
              I also love working with technologies like <strong>React</strong>,
              <strong> Node.js</strong>, <strong>TypeScript</strong>, and
              <strong> AWS</strong>. Check out my portfolio to see some of the
              projects I&apos;ve built!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
