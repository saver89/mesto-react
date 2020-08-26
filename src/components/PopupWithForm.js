import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <form
          className="popup__form-container"
          name={props.name}
          onSubmit={props.onSubmit}
          action="#"
          method="GET"
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__submit-button">
            {props.closeText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
