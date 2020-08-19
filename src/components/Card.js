import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__remove ${isOwn && 'element__remove_visible'}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${isLiked && 'element__like_liked'}`;

  return (
    <figure className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={() => {
            props.onCardClick(props.card);
          }}
        />
      </div>
      <div className="element__info-container">
        <h2 className="element__name">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Нравится"
            onClick={() => {
              props.onCardLike(props.card);
            }}
          />
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} aria-label="Удалить" />
    </figure>
  );
}

export default Card;
