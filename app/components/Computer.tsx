// src/components/Computer.tsx
import React, { useState } from "react";
import DraggableButton from "./Dragging";
import DragWindows from "./DragWindows";

interface DraggableButtonProps {
  initial: string;
  setInitial: React.Dispatch<React.SetStateAction<string>>;
}

interface DragWindowsProps {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
}

const Computer: React.FC = () => {
  const [initial, setInitial] = useState<string>("start");

  return (
    <div className="bg-custom-teal w-screen h-screen fixed top-0 left-0">
      <DraggableButton initial={initial} setInitial={setInitial} />
      <DragWindows setInitial={setInitial} />
    </div>
  );
};

export default Computer;
