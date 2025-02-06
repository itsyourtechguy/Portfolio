const About = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md text-center font-sans md:p-10 sm:p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 md:text-3xl sm:text-2xl">
        About Me
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4 md:text-base sm:text-sm">
        Hello! I’m{" "}
        <span className="text-yellow-500 font-semibold">Ankit Sharma</span>, a
        passionate Web Developer and Designer. I have experience in creating
        visually appealing and user-friendly websites. With skills in React,
        JavaScript, and CSS, I aim to deliver high-quality and functional web
        applications.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed md:text-base sm:text-sm">
        My journey in web development began with a strong curiosity for coding,
        and I’ve since developed projects that reflect my commitment to learning
        and growth. Let’s connect and create something amazing together!
      </p>
    </div>
  );
};

export default About;
