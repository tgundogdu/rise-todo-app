import React from 'react';
import { Modal, Button, Divider } from "../";

const Confirmation = ({
  title = "Confirmation",
  msg = "Confirmation message.",
  onClose,
  onConfirm,
}) => {
  return (
    <Modal shown={true} onClose={onClose}>
      <Modal.Header>
        <h3>{title}</h3>
        <Button size="small" onClick={onClose}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div>{msg}</div>
      </Modal.Body>
      <Modal.Footer>
        <div></div>
        <div>
          <Button onClick={onClose}>Cancel</Button>
          <Divider direction="horizontal" size={5} />
          <Button appearance="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
