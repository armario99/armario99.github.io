// Modal.js

import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSelect }) => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    '/logo512.png',
    '/test.png',
  ];

  return (
    isOpen && (
      <div className="Inform_modal-background" onClick={onClose}>
        <div className="Inform_modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Select an Image</h2>
          <div className="image-grid">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                className="modal-image"
                onClick={() => onSelect(imageUrl)}
              />
            ))}
          </div>
          <button onClick={onClose}>Close Modal</button>
        </div>
      </div>
    )
  );
};

export default Modal;
