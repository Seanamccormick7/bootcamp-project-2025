import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/blogData";
import style from "./blogPreview.module.css";

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <article className={style.blogCard}>
      <Link href={`/blog/${slug}`} className={style.blogLink}>
        <Image
          src={image}
          alt={imageAlt}
          width={900}
          height={260}
          className={style.blogImage}
        />
        <h2 className={style.blogTitle}>{title}</h2>
      </Link>
      <p className={style.blogMeta}>{new Date(date).toLocaleDateString()}</p>
      <p className={style.blogDesc}>{description}</p>
    </article>
  );
}
