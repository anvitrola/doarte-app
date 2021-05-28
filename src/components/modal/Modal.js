import React, { useState } from "react";
import Modal from "react-modal";

//components
import DefaultButton from "../buttons/DefaultButton";
import HighlightButton from "../buttons/HighlightButton";

//styled components
import customStyles from "./Modal.styles";

function ModalTemplate({ text, isDelete, children }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {isDelete ? (
        <DefaultButton clickEvent={openModal} text={text} />
      ) : (
        <HighlightButton clickEvent={openModal} text={text} />
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {children}

        <DefaultButton clickEvent={closeModal} text={"Cancelar"} />
      </Modal>
    </>
  );
}

export default ModalTemplate;
