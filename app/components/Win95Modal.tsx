// src/components/Win95Modal.tsx
import React from "react";
import "../css/Win95Modal.css";
interface Props {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
  wS: number;
  hS: number;
  bgC: string;
}
const Win95Modal: React.FC<Props> = ({ setInitial, wS, hS, bgC }) => {
  const styles = { width: wS, height: hS, backgroundColor: bgC };
  return (
    <div className="modal" style={styles}>
      <div className="modal-header">
        <span className="modal-title">Welcome</span>
        <button className="close-button" onClick={() => setInitial("closed")}>
          ×
        </button>
      </div>
      <div className="modal-body">
        <h1 className="modal-welcome">
          Welcome to <span className="windows">Windows95</span>
        </h1>
        <div className="did-you-know">
          <strong>Did you know that you ...</strong>
          <p>
            To open a program, you just click the Start button, and then click
            the programs icon.
          </p>
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-button">Whats New</button>
        <button className="modal-button">Online Registration</button>
        <button
          className="modal-button close-modal-button"
          onClick={() => setInitial("closed")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Win95Modal;
