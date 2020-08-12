import React from 'react';

function Card(props) {
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
          <button className="element__like" type="button" aria-label="Нравится"/>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__remove" aria-label="Удалить"/>
    </figure>
  );
}

export default Card;
