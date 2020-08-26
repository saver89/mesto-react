import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="add-form"
      title="Новое место"
      closeText="Создать"
      isOpened={isOpen}
      onClose={onClose}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__form-field">
          <input
            className="popup__input"
            name="name"
            type="text"
            placeholder="Название"
            minLength="1"
            maxLength="30"
            required
          />
          <span className="popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input
            className="popup__input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;