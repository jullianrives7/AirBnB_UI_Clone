import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function PhotoModal(props) {
  const values = true;
  const [fullscreen, setFullscreen] = useState(true);
  
  return (
      <Modal show={props.showPhotoModal} fullscreen={fullscreen} onHide={() => props.setShowPhotoModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
  );
}

export default PhotoModal