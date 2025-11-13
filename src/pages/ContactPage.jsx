import React from "react";

const ContactPage = () => {
  return (
    <div className="w-[70%] flex flex-col justify-center place-items-center">
      <h1 className="mb-10">Contact Page</h1>
      <form className="flex flex-col gap-4 w-full">
        <input
          placeholder="Your name"
          type="text"
          className="p-3 rounded-md border border-purple-400"
        />
        <input
          placeholder="Your email"
          type="email"
          className="p-3 rounded-md border border-purple-400"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-md border border-purple-400"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
