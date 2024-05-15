import { useEffect, useState } from "react";
import Win95Modal from "./Win95Modal";

interface Position {
  x: number;
  y: number;
}

const DragWindows: React.FC = ({ setInitial }) => {
  const [position, setPosition] = useState<Position>({ x: 780, y: 300 });
  const [dragging, setDragging] = useState<boolean>(false);
  const [rel, setRel] = useState<Position | null>(null); // Position relative to the cursor

  const styles = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    position: "absolute" as "absolute",
    cursor: "grab",
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div onMouseDown={onMouseDown} style={styles}>
      <div>
        <Win95Modal setInitial={setInitial} />
      </div>
    </div>
  );
};

export default DragWindows;
