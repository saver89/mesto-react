import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import PopupWithForm from './components/PopupWithForm';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <PopupWithForm name="edit-form" title="Редактировать профиль" closeText="Сохранить">
        <fieldset class="popup__fieldset">
          <label class="popup__form-field">
            <input
              class="popup__input"
              id="input-edit-name"
              name="name"
              type="text"
              placeholder="Имя"
              minlength="2"
              maxlength="40"
              required
              pattern="[A-Za-zА-Яа-я\s\-]{1,}"
            />
            <span
              class="popup__input-error popup__input-error_active"
              id="input-edit-name-error"
            ></span>
          </label>
          <label class="popup__form-field">
            <input
              class="popup__input"
              id="input-edit-position"
              name="about"
              type="text"
              placeholder="Род занятий"
              minlength="2"
              maxlength="200"
              required
            />
            <span
              class="popup__input-error popup__input-error_active"
              id="input-edit-position-error"
            ></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="add-form" title="Новое место" closeText="Создать">
        <fieldset class="popup__fieldset">
          <label class="popup__form-field">
            <input
              class="popup__input"
              name="name"
              type="text"
              placeholder="Название"
              minlength="1"
              maxlength="30"
              required
            />
            <span class="popup__input-error"></span>
          </label>
          <label class="popup__form-field">
            <input
              class="popup__input"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span class="popup__input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="update-avatar" title="Обновить аватар" closeText="Сохранить">
        <fieldset class="popup__fieldset">
          <label class="popup__form-field">
            <input
              class="popup__input"
              name="link"
              type="url"
              placeholder="Ссылка на аватар"
              required
            />
            <span class="popup__input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="confirm-form" title="Вы уверены" closeText="Да"></PopupWithForm>      
      <template id="card-template">
        <figure class="element">
          <div class="element__image-container">
            <img class="element__image" src="#" alt="" />
          </div>
          <div class="element__info-container">
            <h2 class="element__name">#</h2>
            <div class="element__like-container">
              <button class="element__like" type="button" aria-label="Нравится"></button>
              <p class="element__like-counter">0</p>
            </div>
          </div>
          <button class="element__remove" aria-label="Удалить"></button>
        </figure>
      </template>
    </div>
  );
}

export default App;
