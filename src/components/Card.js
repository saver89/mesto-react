import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__remove ${isOwn ? 'element__remove_visible' : ''}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_liked' : ''}`;

  return (
    <figure className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={() => {
            onCardClick(card);
          }}
        />
      </div>
      <div className="element__info-container">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Нравится"
            onClick={() => {
              onCardLike(card);
            }}
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        onClick={() => {
          onCardDelete(card);
        }}
        aria-label="Удалить"
      />
    </figure>
  );
}

export default Card;
