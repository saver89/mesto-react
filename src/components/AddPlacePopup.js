import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      name="add-form"
      title="Новое место"
      closeText="Создать"
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__form-field">
          <input
            className="popup__input"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
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
