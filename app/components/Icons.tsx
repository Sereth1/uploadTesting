import React, { useState } from "react";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}
interface DraggableButtonProps {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
}

export default function Icons({
  setInitial,
  command,
  img,
  name,
  sw,
  sh,
  posX,
  posY,
}) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [rel, setRel] = useState<Position | null>(null); // Position relative to the cursor

  const styles = {
    left: `${position.x + posX}px`,
    top: `${position.y + posY}px`,
    position: "absolute",
    cursor: "grab",
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only left mouse button
    if (e.button !== 0) return;
    setDragging(true);
    setRel({
      x: e.pageX - position.x,
      y: e.pageY - position.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!dragging || !rel) return;
    setPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  React.useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    } else {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging, rel]);
  return (
    <div>
      <div onMouseDown={onMouseDown} style={styles}>
        <button
          onClick={() => setInitial(`${command}`)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
          }}
        >
          <Image src={img} alt="pc image" width={sw} height={sh} />
          <h1>{name}</h1>
        </button>
      </div>
    </div>
  );
}
