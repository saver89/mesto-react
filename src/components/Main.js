import React from 'react';

function Main(props) {
  return (
    <main class="main">
      <section class="profile">
        <div class="profile__avatar-container">
          <img class="profile__avatar" src="#" alt="Аватар пользователя" />
          <div class="profile__avatar-layout">
            <button class="profile__avatar-edit" onClick={props.onEditAvatar}></button>
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
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p class="profile__position"></p>
          </div>
        </div>
        <button
          class="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section class="elements"></section>
    </main>
  );
}

export default Main;
