"use client";

import React, { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setIsError(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitMessage(
        "Email service is not configured. Please try again later."
      );
      setIsError(true);
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Sean McCormick",
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon."
        );
        setIsError(false);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      setSubmitMessage("Failed to send message. Please try again.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="px-5 pt-10 pb-10">
      <h1 className="flex justify-center text-5xl font-black">Contact</h1>

      <form onSubmit={handleSubmit} className="w-[500px] mx-auto mt-8">
        <label htmlFor="name" className="block mb-2 font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base focus:outline-none focus:border-[rgb(36,94,255)]"
        />

        <label htmlFor="email" className="block mb-2 font-bold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base focus:outline-none focus:border-[rgb(36,94,255)]"
        />

        <label htmlFor="message" className="block mb-2 font-bold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base resize-none focus:outline-none focus:border-[rgb(36,94,255)]"
        ></textarea>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[rgb(30,32,32)] border-none text-white px-8 py-3 text-center font-mono text-base rounded cursor-pointer w-auto mt-2.5 hover:bg-[rgb(36,94,255)] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {submitMessage && (
          <p
            className={`mt-4 text-sm ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </main>
  );
}
