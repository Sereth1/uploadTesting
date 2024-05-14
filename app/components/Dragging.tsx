// src/components/DraggableButton.tsx
import React from "react";
import Icons from "./Icons";
import Win95Modal from "./Win95Modal";

interface DraggableButtonProps {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
  initial: string;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({
  setInitial,
  initial,
}) => {
  return (
    <>
      <Icons
        posX={0}
        posY={0}
        sh={50}
        sw={50}
        command={"computer"}
        setInitial={setInitial}
        img={"/pcimg.png"}
        name={"My Computer"}
      />
      <Icons
        posX={0}
        posY={100}
        sh={100}
        sw={110}
        command={"email"}
        setInitial={setInitial}
        img={"/emailimg.png"}
        name={"Inbox"}
      />
      <Icons
        posX={28}
        posY={300}
        sh={50}
        sw={60}
        command={"email"}
        setInitial={setInitial}
        img={"/trashimg.png"}
        name={"Trash"}
      />
      {initial === "start" && <Win95Modal setInitial={setInitial} />}
    </>
  );
};

export default DraggableButton;
