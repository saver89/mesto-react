import React from 'react';

function Main(props) {
  function handleEditAvatarClick(evt) {
    document.querySelector('.popup_update-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick(evt) {
    document.querySelector('.popup_edit-form').classList.add('popup_opened');
  }

  function handleAddPlaceClick(evt) {
    document.querySelector('.popup_add-form').classList.add('popup_opened');
  }

  return (
    <main class="main">
      <section class="profile">
        <div class="profile__avatar-container">
          <img class="profile__avatar" src="#" alt="Аватар пользователя" />
          <div class="profile__avatar-layout">
            <button class="profile__avatar-edit" onClick={handleEditAvatarClick}></button>
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
                onClick={handleEditProfileClick}
              ></button>
            </div>
            <p class="profile__position"></p>
          </div>
        </div>
        <button
          class="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <section class="elements"></section>
    </main>
  );
}

export default Main;
