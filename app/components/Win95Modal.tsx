// src/components/Win95Modal.tsx
import React from "react";
import "../css/Win95Modal.css";
interface Win95ModalProps {
  setInitial: React.Dispatch<React.SetStateAction<string>>;
}
const Win95Modal: React.FC<Win95ModalProps> = ({ setInitial }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <span className="modal-title">Welcome</span>
          <button className="close-button" onClick={() => setInitial("")}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <h1 className="modal-welcome">
            Welcome to <span className="windows">Windows95</span>
          </h1>
          <div className="did-you-know">
            <strong>Did you know that you can fuck yourself...</strong>
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
            onClick={() => setInitial("")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Win95Modal;
