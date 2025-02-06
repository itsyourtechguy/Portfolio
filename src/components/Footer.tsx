const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 text-center font-sans">
      <p className="text-base mb-2">
        &copy; {date} Ankit Sharma. All rights reserved.
      </p>
      <p className="text-base">
        Follow me on:
        <a
          href="https://www.linkedin.com/in/ankit-sharma-17ba89148/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400 mx-2"
        >
          LinkedIn
        </a>
        |
        <a
          href="https://github.com/itsyourtechguy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400 mx-2"
        >
          GitHub
        </a>
        |
        <a
          href="https://www.instagram.com/ankit_sharma.07/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-400 mx-2"
        >
          Instagram
        </a>
      </p>
    </footer>
  );
};

export default Footer;
