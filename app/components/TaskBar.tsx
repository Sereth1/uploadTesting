// src/components/Taskbar.tsx
import React, { useState } from "react";
import "../css/taskbar.css";
import Image from "next/image";
const Taskbar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000); // Duration of the animation
  };

  return (
    <div className="taskbar">
      <div className="taskbar-left">
        <div
          className={`taskbar-item start-button ${
            isClicked ? "start-clicked" : ""
          }`}
          onClick={handleClick}
        >
          <Image
            className="pr-1"
            src="/startimg.png"
            width={20}
            height={30}
            alt="start icon"
          />
          <span>Start</span>
        </div>
        <div className="taskbar-item welcome">
          <span>Welcome</span>
        </div>
      </div>
      <div className="taskbar-right">
        <span>2:38 PM</span>
      </div>
    </div>
  );
};

export default Taskbar;
