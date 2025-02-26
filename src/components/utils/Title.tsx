import React from "react";
import { IconType } from "react-icons";

interface TitleProps {
  t: string;
  title: string;
  logo?: boolean;
  icon?: IconType;
}

const Title: React.FC<TitleProps> = ({ t, title, logo = false, icon: Icon }) => {
  return (
    <div className="border-b text-xl border-ryancv-border pb-6 relative">
      <div className="font-bold text-ryancv-heading">
        <span className="z-10 relative flex items-center">
          {logo && Icon && ( 
            <div className="rounded-full h-auto w-auto text-ryancv-yellow border-[1px] border-ryancv-yellow p-2 mr-2">
              <Icon />
            </div>
          )}

          <span className="text-ryancv-yellow">{t}</span>
          {title}
        </span>

        {!logo && (
          <div className="absolute rounded-full bg-[#50432a] w-9 h-9 top-0 left-0 transform -translate-x-1/2 z-0"></div>
        )}
      </div>
    </div>
  );
};

export default Title;