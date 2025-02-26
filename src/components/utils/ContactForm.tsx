import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
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
    <>
      {message && (
        <p className={`text-md ${message.includes("wrong") ? "text-red-500" : "text-ryancv-yellow"} mb-4`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-6" id="contactform">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-ryancv-border bg-ryancv-sidebar text-ryancv-text focus:border-ryancv-yellow focus:cursor-text-ryancv-yellow focus:outline-none transition-all"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-ryancv-border bg-ryancv-sidebar text-ryancv-text focus:border-ryancv-yellow focus:outline-none transition-all"
            required
          />
        </div>
        <div className="col-span-2">
          <textarea
          name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-2 border-b-2 border-ryancv-border bg-ryancv-sidebar text-ryancv-text h-32 focus:border-ryancv-yellow focus:outline-none transition-all"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`px-6 py-2 font-bold uppercase bg-ryancv-sidebar text-ryancv-text rounded transition-all flex items-center gap-2 ${
            loading ? "cursor-not-allowed" : "hover:text-ryancv-yellow hover:scale-110"
          }`}
        >
          <span>{loading ? "Sending" : "Send Message"}</span>
          <FaArrowRight />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
