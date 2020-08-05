import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div class="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <div class="popup popup_edit-form">
        <div class="popup__container">
          <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
          <form class="popup__form-container" name="edit-form" action="#" method="GET" novalidate>
            <fieldset class="popup__fieldset">
              <legend class="popup__title">Редактировать профиль</legend>
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
            <button type="submit" class="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_add-form">
        <div class="popup__container">
          <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
          <form class="popup__form-container" name="add-form" action="#" method="GET" novalidate>
            <fieldset class="popup__fieldset">
              <legend class="popup__title">Новое место</legend>
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
            <button type="submit" class="popup__submit-button">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_update-avatar">
        <div class="popup__container">
          <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
          <form
            class="popup__form-container"
            name="update-avatar-form"
            action="#"
            method="GET"
            novalidate
          >
            <fieldset class="popup__fieldset">
              <legend class="popup__title">Обновить аватар</legend>
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
            <button type="submit" class="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup_image-preview">
        <div class="popup__container">
          <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
          <div class="popup__content-container">
            <figure class="popup__image-preview">
              <img class="popup__image" src="#" alt="" />
              <figcaption class="popup__image-name"></figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="popup popup_confirm">
        <div class="popup__container">
          <button type="button" class="popup__close-button" aria-label="Закрыть"></button>
          <form
            class="popup__form-container"
            name="confirm-form"
            action="#"
            method="GET"
            novalidate
          >
            <legend class="popup__title">Вы уверены</legend>
            <button type="submit" class="popup__submit-button">
              Да
            </button>
          </form>
        </div>
      </div>
      <template id="card-template">
        <figure class="element">
          <div class="element__image-container">
            <img class="element__image" src="#" alt="" />
          </div>
          <div class="element__info-container">
            <h2 class="element__name"></h2>
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
