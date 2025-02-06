import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSent(true);
    console.log("Message sent:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md text-center font-sans md:p-8 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 md:text-2xl sm:text-xl">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 text-base border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 text-base border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 text-base border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none min-h-[100px]"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 text-base font-semibold text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition-colors"
        >
          Send Message
        </button>
      </form>
      {isSent && (
        <p className="mt-4 text-green-600">Your message has been sent.</p>
      )}
    </div>
  );
};

export default Contact;
