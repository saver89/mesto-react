import React from 'react';

function PopupWithForm(props) {
  return (
    <div class={`popup popup_${props.name}`}>
      <div class="popup__container">
        <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
        <form
          class="popup__form-container"
          name={props.name}
          action="#"
          method="GET"
          novalidate
        >
          <h2 class="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" class="popup__submit-button">
            {props.closeText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
