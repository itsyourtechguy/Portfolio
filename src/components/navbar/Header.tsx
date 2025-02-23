import Type from "../utils/Type";
import { Personal } from "../../constant/data";

const Header = () => {
  return (
    <>
      <div className="flex items-start gap-2 ">
        <a href={Personal.link}>
        <img
          className="w-10 h-10 rounded-full object-cover border-2 border-ryancv-dark hoverable"
          src={Personal.avatar}
          alt={`${Personal.name}'s Avatar`}
        />
        </a>
        <div className="mt-1 flex flex-col gap-0 text-sm">
          <span className=" text-white">
            {Personal.name}
          </span>
          <Type inHeader={true} />
        </div>
      </div>
    </>
  );
};

export default Header;
