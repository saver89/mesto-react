import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <header class="header">
          <a class="header__logo"></a>
        </header>
        <main class="main">
          <section class="profile">
            <div class="profile__avatar-container">
              <img class="profile__avatar" src="#" alt="Аватар пользователя" />
              <div class="profile__avatar-layout">
                <button class="profile__avatar-edit"></button>
              </div>
            </div>
            <div class="profile__info-container">
              <div class="profile__info">
                <div class="profile__name-container">
                  <h1 class="profile__name"></h1>
                  <button
                    class="profile__edit-button"
                    type="button"
                    aria-label="Редактировать профиль"
                  ></button>
                </div>
                <p class="profile__position"></p>
              </div>
            </div>
            <button class="profile__add-button" type="button" aria-label="Добавить"></button>
          </section>
          <section class="elements"></section>
        </main>
        <footer class="footer">
          <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
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
