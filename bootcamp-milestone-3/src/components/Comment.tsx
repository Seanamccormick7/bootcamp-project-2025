import React from "react";
import { IComment } from "@/database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function formatCommentTime(time: Date): string {
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return date.toLocaleDateString("en-US", options);
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className="bg-[#f8f8f8] rounded-lg p-4 mb-4 border border-[#e0e0e0]">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-[rgb(30,32,32)] m-0">{comment.user}</h4>
        <span className="text-sm text-[#888]">
          {formatCommentTime(comment.time)}
        </span>
      </div>
      <p className="text-[#444] m-0 leading-relaxed">{comment.comment}</p>
    </div>
  );
}
