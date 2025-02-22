import ContactForm from "../utils/ContactForm";
import Title from "../utils/Title";

const Contact = () => {
  return (
    <>
      {/* Get in Touch Title */}
      <Title t="G" title="et In Touch" />

      {/* Google Map */}
      <div className="my-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.400321943345!2d19.034646!3d47.5088576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMwJzMxLjkiTiAxOcKwMDInMDQuNyJF!5e0!3m2!1sen!2shu!4v1698765432100!5m2!1sen!2shu"
          title="Budapest, Hungary"
          className="w-full h-64 rounded border-none"
          loading="lazy"
          aria-label="Budapest, Hungary - Central Location"
        ></iframe>
      </div>

      {/* Info List */}
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="text-gray-300">
            <p className="mb-4">
              <strong>Address:</strong> Budapest, Hungary
            </p>
            <p>
              <strong>Email:</strong> ankit260196sharma@gmail.com
            </p>
          </div>
          <div className="text-gray-300">
            <p className="mb-4">
              <strong>Phone:</strong> +36 704137849
            </p>
            <p>
              <strong>Freelance:</strong> Available
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Title t="C" title="ontact Form" />
      <ContactForm />
      
    </>
  );
};

export default Contact;