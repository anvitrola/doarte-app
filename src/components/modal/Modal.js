import React, { useState } from "react";
import Modal from "react-modal";
import TextBox from "../textBox/TextBox";
import DefaultButton from "../buttons/DefaultButton";
import customStyles from "./Modal.styles";

function ModalTemplate() {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <DefaultButton
        clickEvent={openModal}
        text={"Open Modal"}
        primary={true}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <TextBox
          subtitle={"Você tem certeza que deseja apagar a vaquinha 💰?"}
        />
        <br />
        <DefaultButton text={"Confirmar"} primary={true} />
        <DefaultButton
          clickEvent={closeModal}
          text={"Cancelar"}
          primary={true}
        />
      </Modal>
    </>
  );
}

export default ModalTemplate;
