import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/database/blogSchema";

export default function BlogPreview({
  title,
  date,
  description,
  image,
  image_alt,
  slug,
}: Blog) {
  return (
    <article className="block bg-white rounded-lg p-5 my-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link href={`/blog/${slug}`} className="no-underline text-inherit">
        <Image
          src={image}
          alt={image_alt}
          width={900}
          height={260}
          className="w-full h-auto object-cover rounded-md mb-4 hover:opacity-90 transition-opacity duration-300"
        />
        <h2 className="my-3 font-bold text-2xl text-[rgb(30,32,32)] hover:text-[rgb(36,94,255)] transition-colors duration-300">
          {title}
        </h2>
      </Link>
      <p className="text-[#666] text-sm my-2 font-medium">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="leading-relaxed m-0 text-[#444]">{description}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-block mt-4 text-[rgb(36,94,255)] font-bold hover:underline"
      >
        Read more →
      </Link>
    </article>
  );
}
