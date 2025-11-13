import React from "react";
import Image from "next/image";
import { Project } from "@/database/projectSchema";

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  image_alt,
  links,
}: Project) {
  return (
    <div className="flex flex-row max-w-[900px] w-full my-8 mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <a
        href={links[0]?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[60%] relative group"
      >
        <Image
          src={image}
          alt={image_alt}
          width={400}
          height={225}
          className="object-cover w-full h-[500px] group-hover:opacity-90 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </a>

      <div className="flex bg-white w-[40%] h-[500px] px-6 py-6 leading-6 overflow-auto flex-col text-center justify-center">
        <h3 className="font-bold text-2xl mb-3 text-[rgb(30,32,32)]">
          {title}
        </h3>
        <p className="font-light text-[#444] mb-4 leading-relaxed">
          {description}
        </p>
        <p className="mb-4">
          <strong className="text-[rgb(30,32,32)]">Technologies:</strong>
          <span className="block mt-1 text-sm text-[#666]">{technologies}</span>
        </p>
        <div className="flex flex-col gap-2 mt-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(30,32,32)] no-underline font-bold tracking-wide hover:text-[rgb(36,94,255)] hover:underline transition-colors duration-300 py-1"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
