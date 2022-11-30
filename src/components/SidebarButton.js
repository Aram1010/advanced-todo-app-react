import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const SidebarButton = ({sidebarShow , setSidebarShow}) => {
  return (
    <div>
      <button
        className="text-[20px] hover:bg-[#F1F1F0] p-[5px] rounded-[3px]"
        onClick={() => setSidebarShow(!sidebarShow)}
      >
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default SidebarButton;
