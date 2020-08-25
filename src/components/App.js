import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import isEditProfilePopup from './EdifProfilePopup';

function App() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>
        <isEditProfilePopup isOpen={isEditProfileOpen} onClose={closeAllPopups}/>
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
        <PopupWithForm
          name="confirm-form"
          title="Вы уверены"
          closeText="Да"
          onClose={closeAllPopups}
        ></PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
