import Image from "next/image";

export default function Home() {
  return (
    <main className="px-5 pt-10 pb-6">
      <h1 className="text-center text-5xl font-black">
        Hi, I&apos;m Sean McCormick!
      </h1>
      <div className="flex items-center justify-between p-5 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 max-w-[900px] mx-auto mt-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/Sean-image.jpg"
            alt="Sean McCormick"
            width={280}
            height={380}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 ml-5">
          <h2 className="text-2xl mb-2.5">About Me</h2>
          <p className="text-base leading-6">
            I&apos;m a <strong>Computer Science student</strong> at California
            Polytechnic State University, San Luis Obispo, expected to graduate
            in <strong>June 2027</strong>. I just transferred in from the Bay
            Area, and I&apos;m passionate about building full-stack web
            applications and solving real-world problems.
          </p>
          <p className="text-base leading-6 mt-4">
            I also love working with technologies like <strong>React</strong>,
            <strong> Node.js</strong>, <strong>TypeScript</strong>, and
            <strong> AWS</strong>. Check out my portfolio to see some of the
            projects I&apos;ve built!
          </p>
        </div>
      </div>
    </main>
  );
}
