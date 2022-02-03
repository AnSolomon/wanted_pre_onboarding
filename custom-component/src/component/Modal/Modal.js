import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal((openModal) => !openModal);
  };

  return (
    <div className="modal-div">
      <button className="modal-btn" onClick={handleModal}>
        Open Modal
      </button>
      {openModal && (
        <div className="modal">
          <div className="modal-body">
            <div>
              <button className="modal-close" onClick={handleModal}>
                x
              </button>
            </div>
            <div className="modal-text">HELLO CODESTATES!</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
