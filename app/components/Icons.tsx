// src/components/Icons.tsx
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Position {
  x: number;
  y: number;
}

interface IconsProps {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
  command: string;
  img: string;
  name: string;
  sw: number;
  sh: number;
  posX: number;
  posY: number;
}

const Icons: React.FC<IconsProps> = ({
  setInitial,
  command,
  img,
  name,
  sw,
  sh,
  posX,
  posY,
}) => {
  const [position, setPosition] = useState<Position>({ x: posX, y: posY });
  const [dragging, setDragging] = useState<boolean>(false);
  const [rel, setRel] = useState<Position | null>(null); // Position relative to the cursor

  const styles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: "absolute" as "absolute",
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

  const onMouseUp = (e: MouseEvent) => {
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

  useEffect(() => {
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
          onClick={() => setInitial(command)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            width: "100%",
            padding: "10px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <Image src={img} alt="pc image" width={sw} height={sh} />
          <h1 style={{ margin: 0 }}>{name}</h1>
        </button>
      </div>
    </div>
  );
};

export default Icons;
