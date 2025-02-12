import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ankit Sharma",
          from_email: form.email,
          to_email: "crronaldo749@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setMessage("Thank you! I will get back to you soon.");
        setForm({ name: "", email: "", message: "" });

        // Auto-hide message after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      })
      .catch(() => {
        setLoading(false);
        setMessage("Something went wrong. Please try again.");

        // Auto-hide error message after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-md text-center font-sans md:p-8 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 md:text-2xl sm:text-xl">
        Contact Me
      </h1>
      {message && (
        <p className={`text-sm ${message.includes("wrong") ? "text-red-500" : "text-green-600"} mb-4`}>
          {message}
        </p>
      )}
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
          disabled={loading}
          className={`w-full p-3 text-base font-semibold text-white rounded-md transition-colors ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
