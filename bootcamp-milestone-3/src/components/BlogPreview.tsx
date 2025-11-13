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
    <article className="block bg-white rounded-md p-4 my-4 shadow-sm">
      <Link href={`/blog/${slug}`} className="no-underline text-inherit">
        <Image
          src={image}
          alt={image_alt}
          width={900}
          height={260}
          className="w-full h-auto object-cover rounded mb-2.5"
        />
        <h2 className="my-2 font-bold text-xl">{title}</h2>
      </Link>
      <p className="text-[#666] text-sm my-2">
        {new Date(date).toLocaleDateString()}
      </p>
      <p className="leading-relaxed m-0">{description}</p>
    </article>
  );
}
