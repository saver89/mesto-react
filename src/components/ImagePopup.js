import React from 'react';

function ImagePopup(props) {
  return (
    <div class="popup popup_image-preview">
      <div class="popup__container">
        <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
        <div class="popup__content-container">
          <figure class="popup__image-preview">
            <img class="popup__image" src="#" alt="" />
            <figcaption class="popup__image-name"></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
