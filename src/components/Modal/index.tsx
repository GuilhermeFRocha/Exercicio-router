import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {ButtonModal} from '../../styles'

export const ModalForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false)

  return (
  <Modal show={show} onHide={handleClose} style={{ top: "25%" }}>
  <Modal.Header closeButton>
    <Modal.Title>Formulário preenchido!</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    O retorno acontecerá assim que visualizarmos o seu cadastro. Em
    caso de indisponibilidade enviaremos um e-mail e WhatsApp para o
    andamento da nossa conversa. Obrigado!
  </Modal.Body>
  <Modal.Footer>
    <ButtonModal onClick={handleClose}>Fechar</ButtonModal>
  </Modal.Footer>
</Modal>
  )
}