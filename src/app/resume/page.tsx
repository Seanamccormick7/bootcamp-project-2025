export default function Resume() {
  return (
    <main className="px-5 pt-10 pb-10">
      <h1 className="flex justify-center text-5xl font-black">Resume</h1>

      <div className="text-center my-8">
        <a
          href="/documents/SeanMcCormickResume.pdf"
          download
          className="inline-block bg-[rgb(30,32,32)] text-white px-6 py-3 rounded no-underline text-base hover:bg-[rgb(36,94,255)]"
        >
          Download Resume as PDF
        </a>
      </div>

      <div className="max-w-[800px] mx-auto bg-white p-10 rounded shadow-sm">
        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-[rgb(30,32,32)] border-b-2 border-[rgb(36,94,255)] pb-2 mb-5 font-bold">
            Education
          </h2>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              California Polytechnic State University, San Luis Obispo – B.S.
              Computer Science
            </h3>
            <p className="italic text-[#666] mb-2 text-sm">
              San Luis Obispo, CA – Expected Jun. 2027
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Relevant Coursework:</strong> Design and Analysis of
              Algorithms, Database Systems
            </p>
          </div>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              De Anza / Foothill College – A.S. Computer Science for Transfer
              (AS-T)
            </h3>
            <p className="italic text-[#666] mb-2 text-sm">
              Cupertino, CA – GPA: 3.97 – Sep. 2023 – Jun. 2025
            </p>
            <p className="leading-relaxed mt-2">
              <strong>Relevant Coursework:</strong> Data Structures &
              Algorithms, Advanced Java Programming
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-[rgb(30,32,32)] border-b-2 border-[rgb(36,94,255)] pb-2 mb-5 font-bold">
            Projects
          </h2>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              InternTrackr
            </h3>
            <p className="italic text-[#666] mb-2 text-sm">
              TypeScript, React, Node, MongoDB/Postgres, Redis, Spring Boot, AWS
              Lambda, Terraform – 2025
            </p>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>
                Built a full-stack internship tracker with JWT auth, search, and
                real-time collaboration via WebSockets
              </li>
              <li>
                Designed a Java Spring Boot scoring microservice; integrated
                with the Node API via REST; covered by JUnit tests
              </li>
              <li>
                Shipped serverless deadline alerts using AWS Lambda +
                EventBridge (+ SES), provisioned with Terraform
              </li>
              <li>
                Set up CI/CD with GitHub Actions; one-command local dev via
                Docker Compose; supports MongoDB and Postgres (Prisma)
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              Seralaboratories.com (HeadshotAI)
            </h3>
            <p className="italic text-[#666] mb-2 text-sm">
              Next.js (TS), FastAPI, DreamBooth/SD, PostgreSQL, Stripe, EC2 –
              2024
            </p>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>
                Launched a production web app that generates professional AI
                headshots from user photos + preferences
              </li>
              <li>
                Built a multi-step upload + preferences flow with real-time
                client validation (Zod) and Auth.js session handling
              </li>
              <li>
                Integrated Stripe payments for credit-based generations; gated
                access until server-verified checkout succeeds
              </li>
              <li>
                Implemented a Python FastAPI microservice with a Celery task
                queue to offload long-running jobs
              </li>
              <li>
                Implemented DreamBooth fine-tuning + Stable Diffusion inference
                with dynamic prompts
              </li>
              <li>
                Containerized and deployed backend on AWS EC2 with Docker
                including task orchestration, webhook callbacks, and cleanup
                routines
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              Selected Additional Projects
            </h3>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>
                <strong>Looter Trading Journal</strong> — Trade tracking app
                with AI-powered coaching |{" "}
                <a href="#" className="text-[rgb(36,94,255)] hover:underline">
                  Live
                </a>{" "}
                |{" "}
                <a href="#" className="text-[rgb(36,94,255)] hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <strong>HomebaseProps.com</strong> — SaaS for property owners to
                track/manage properties |{" "}
                <a
                  href="https://github.com/Seanamccormick7/homebase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(36,94,255)] hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <strong>Job Finder App</strong> — Remote job board with filters,
                bookmarks, and persistent storage |{" "}
                <a href="#" className="text-[rgb(36,94,255)] hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <strong>Card Management App</strong> — JavaFX desktop app for
                managing cards and transactions |{" "}
                <a href="#" className="text-[rgb(36,94,255)] hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-[rgb(30,32,32)] border-b-2 border-[rgb(36,94,255)] pb-2 mb-5 font-bold">
            Experience
          </h2>
          <div className="mb-5">
            <h3 className="text-lg font-bold mb-1 text-[rgb(30,32,32)]">
              College Mentor – Silicon Valley Education Foundation
            </h3>
            <p className="italic text-[#666] mb-2 text-sm">
              Mountain View, CA – Jun. 2024 – Jul. 2025
            </p>
            <ul className="list-disc ml-5 leading-relaxed">
              <li>
                Delivered 20+ lessons across three classes (75+ students) on
                math/CS enrichment; mentored on college pathways
              </li>
              <li>
                Awarded 2024 College Mentor of the Year (selected among 140
                mentors across 70 districts)
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership & Service Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-[rgb(30,32,32)] border-b-2 border-[rgb(36,94,255)] pb-2 mb-5 font-bold">
            Leadership & Service
          </h2>
          <ul className="list-disc ml-5 leading-relaxed">
            <li>
              <strong>Working Partnerships USA</strong> — Campaign/program
              support for equitable jobs and communities (Ongoing)
            </li>
            <li>
              <strong>St. Justin Community Ministry</strong> — Food pantry
              operations; list management and client support (Ongoing)
            </li>
            <li>
              <strong>YMCA Camp Campbell</strong> — Cabin leader for 12
              students; behavior & emotional management training (Completed)
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl text-[rgb(30,32,32)] border-b-2 border-[rgb(36,94,255)] pb-2 mb-5 font-bold">
            Technical Skills
          </h2>
          <ul className="leading-relaxed space-y-2">
            <li>
              <strong>Languages:</strong> Java, Python, C++, JavaScript,
              TypeScript, SQL, HTML/CSS, Assembly, Bash
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js, Spring Boot,
              AuthJS, REST APIs
            </li>
            <li>
              <strong>Frontend:</strong> React, Next.js, React Native, Zustand,
              Zod, JavaFX
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MongoDB, Redis, Prisma
            </li>
            <li>
              <strong>Cloud/DevOps:</strong> AWS (EC2, S3, Lambda), Docker,
              Docker Compose, Terraform, GitHub Actions, CI/CD
            </li>
            <li>
              <strong>Testing:</strong> JUnit, Jest, Playwright
            </li>
            <li>
              <strong>Tools:</strong> Git, Linux, IntelliJ, VS Code, Visual
              Studio
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
