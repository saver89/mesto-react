import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick(evt) {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick(evt) {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick(evt) {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups(evt) {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="edit-form"
        title="Редактировать профиль"
        closeText="Сохранить"
        isOpened={isEditProfileOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        name="add-form"
        title="Новое место"
        closeText="Создать"
        isOpened={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
      <PopupWithForm
        name="update-avatar"
        title="Обновить аватар"
        closeText="Сохранить"
        isOpened={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__fieldset">
          <label className="popup__form-field">
            <input
              className="popup__input"
              name="link"
              type="url"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="confirm-form" title="Вы уверены" closeText="Да"></PopupWithForm>      
    </div>
  );
}

export default App;
