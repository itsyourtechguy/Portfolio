import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="text-lg mt-2 text-center">
      <Typewriter
        options={{
          strings: [
            "Front-end Developer",
            "JavaScript Developer",
            "React Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 80,
        }}
      />
    </div>
  );
};

export default Type;
