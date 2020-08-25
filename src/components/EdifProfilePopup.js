import React from 'react';
import PopupWithForm from './PopupWithForm';

function isEditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="edit-form"
      title="Редактировать профиль"
      closeText="Сохранить"
      isOpened={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__form-field">
          <input
            className="popup__input"
            id="input-edit-name"
            name="name"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            pattern="[A-Za-zА-Яа-я\s\-]{1,}"
          />
          <span
            className="popup__input-error popup__input-error_active"
            id="input-edit-name-error"
          ></span>
        </label>
        <label className="popup__form-field">
          <input
            className="popup__input"
            id="input-edit-position"
            name="about"
            type="text"
            placeholder="Род занятий"
            minLength="2"
            maxLength="200"
            required
          />
          <span
            className="popup__input-error popup__input-error_active"
            id="input-edit-position-error"
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default isEditProfilePopup;
