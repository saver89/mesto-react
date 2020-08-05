import React, { useState, useEffect } from 'react';
import api from '../utils/Api';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);

        return api.getInitialsCards();
      })
      .then((res) => {
        setCards(res);
      });
  }, []);

  console.log(cards);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
          <div className="profile__avatar-layout">
            <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info-container">
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать профиль"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__position">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <figure className="element" key={card._id}>
            <div className="element__image-container">
              <img className="element__image" src={card.link} alt="" />
            </div>
            <div className="element__info-container">
              <h2 className="element__name">{card.name}</h2>
              <div className="element__like-container">
                <button className="element__like" type="button" aria-label="Нравится"></button>
                <p className="element__like-counter">{card.likes.length}</p>
              </div>
            </div>
            <button className="element__remove" aria-label="Удалить"></button>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default Main;
