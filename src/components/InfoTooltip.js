import React from 'react';
import { useHistory } from 'react-router-dom';

function InfoTooltip(props) {
  const history = useHistory();
  const image = props.isSuccess ? 'check.svg' : 'cross.svg';
  const imageAlt = props.isSuccess ? 'Регистрация прошла успешно' : 'Что-то пошло не так';
  const popupText = props.isSuccess
    ? 'Вы успешно зарегистрировались!'
    : 'Что-то пошло не так! Попробуйте ещё раз.';

  function closeHandler() {
    props.onClose();

    if (props.isSuccess) {
      history.push('/sign-in');
    }
  }

  return (
    <div className={`popup popup_after-sign ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          aria-label="Закрыть"
          onClick={closeHandler}
        ></button>
        <form
          className="popup__form-container"
          name="after-sign"
          onSubmit={closeHandler}
          action="#"
          method="GET"
          noValidate
        >
          <img
            className="popup__sign-image"
            src={`${process.env.PUBLIC_URL}/${image}`}
            alt={imageAlt}
          />
          <h2 className="popup__text">{popupText}</h2>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
