import React from "react";

const LeftNavMenuItem = () => {
    return (
        <div
          className={
            "flex items-center h-10 px-3 text-white md:text-balck dark:text-white text-sm cursor-pointer mb-[1px] rounded-lg hover:bg-white/[0.15] md:hover:bg-black/[0.15] dark:hover:bg-white/[0.15]" + className
          }
          onClick={action}
        >
            <span className="text-xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;