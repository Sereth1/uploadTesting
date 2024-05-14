import React, { useState } from "react";
import DraggableButton from "./Dragging";

export default function Computer() {
  const [initial, setInitial] = useState("start");
  return (
    <div className="bg-custom-teal w-screen h-screen fixed top-0 left-0">
      <DraggableButton initial={initial} setInitial={setInitial} />
    </div>
  );
}
