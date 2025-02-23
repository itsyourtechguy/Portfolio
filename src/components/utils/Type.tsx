import Typewriter from "typewriter-effect";

interface TypeProps {
  inHeader?: boolean,
}

const Type: React.FC<TypeProps> = ({ inHeader }) => {
  return (
    <div className={`text-sm ${inHeader ? 'text-xs text-ryancv-yellow' : 'text-center mt-2 '}`}>
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
