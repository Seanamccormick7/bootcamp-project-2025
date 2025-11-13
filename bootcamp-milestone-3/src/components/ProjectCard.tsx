import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  image: string;
  image_alt: string;
  links: {
    label: string;
    url: string;
  }[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  image_alt,
  links,
}: ProjectCardProps) {
  return (
    <div className="flex flex-row max-w-[900px] w-full my-8 mx-auto">
      <a
        href={links[0]?.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[70%]"
      >
        <Image
          src={image}
          alt={image_alt}
          width={400}
          height={225}
          className="object-cover w-full h-[500px]"
        />
      </a>

      <div className="flex bg-white w-[30%] h-[500px] px-5 py-0 leading-6 overflow-auto flex-col text-center justify-center">
        <p className="font-bold text-xl">{title}</p>
        <p className="font-light">{description}</p>
        <p>
          <strong>Technologies:</strong> {technologies}
        </p>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(30,32,32)] no-underline font-bold tracking-wide hover:text-[rgb(36,94,255)] hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
