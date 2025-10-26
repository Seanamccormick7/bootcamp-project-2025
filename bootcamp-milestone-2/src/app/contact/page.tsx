export default function Contact() {
  return (
    <main className="px-5 pt-10 pb-10">
      <h1 className="flex justify-center text-5xl font-black">Contact</h1>

      <form id="contact-form" className="w-[500px] mx-auto mt-8">
        <label htmlFor="name" className="block mb-2 font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base"
        />

        <label
          htmlFor="email"
          className="block mb-2 font-bold"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base"
        />

        <label
          htmlFor="message"
          className="block mb-2 font-bold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full p-2.5 mb-4 border border-[#ccc] rounded text-base resize-none"
        ></textarea>

        <input
          type="submit"
          value="Send Message"
          className="bg-[rgb(30,32,32)] border-none text-white px-8 py-3 text-center font-mono text-base rounded cursor-pointer w-auto mt-2.5 hover:bg-[rgb(36,94,255)]"
        />
      </form>
    </main>
  );
}
