import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_image-preview ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" aria-label="Закрыть" onClick={props.onClose}></button>
        <div className="popup__content-container">
          <figure className="popup__image-preview">
            <img className="popup__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
            <figcaption className="popup__image-name">{props.card && props.card.name}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
