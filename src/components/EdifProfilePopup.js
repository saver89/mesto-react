import React, { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);  

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-form"
      title="Редактировать профиль"
      closeText="Сохранить"
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__form-field">
          <input
            className="popup__input"
            id="input-edit-name"
            name="name"
            type="text"
            value={name}
            onChange={(evt) => {
              setName(evt.target.value);
            }}
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
            value={description}
            onChange={(evt) => {
              setDescription(evt.target.value);
            }}
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

export default EditProfilePopup;
