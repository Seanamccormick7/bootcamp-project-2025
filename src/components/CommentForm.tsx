"use client";

import React, { useState } from "react";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsError(false);

    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit comment");
      }

      setUser("");
      setComment("");
      setMessage("Comment submitted successfully!");
      setIsError(false);

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setMessage("Failed to submit comment. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-white rounded-lg p-6 shadow-sm"
    >
      <h3 className="text-lg font-bold text-[rgb(30,32,32)] mb-4">
        Leave a Comment
      </h3>

      <div className="mb-4">
        <label htmlFor="user" className="block mb-2 font-medium text-[#333]">
          Name
        </label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
          className="w-full p-3 border border-[#ccc] rounded text-base focus:outline-none focus:border-[rgb(36,94,255)]"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2 font-medium text-[#333]">
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
          className="w-full p-3 border border-[#ccc] rounded text-base resize-none focus:outline-none focus:border-[rgb(36,94,255)]"
          placeholder="Write your comment here..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[rgb(30,32,32)] text-white px-6 py-3 rounded font-medium hover:bg-[rgb(36,94,255)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Comment"}
      </button>

      {message && (
        <p
          className={`mt-4 text-sm ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
