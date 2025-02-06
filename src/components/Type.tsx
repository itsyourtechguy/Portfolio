import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="text-lg text-gray-600 mt-2">
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
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
