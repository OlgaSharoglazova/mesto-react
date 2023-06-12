import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, cardId, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const isOwn = card.owner._id === currentUser._id;

  function handleClick() {
    onCardClick(card);
  }
  function handleDeleteClick() {
    onCardDelete(cardId);
  }
  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <>
      <article className="element" key={cardId}>
        {isOwn && (
          <button
            className="button element__basket"
            type="button"
            onClick={handleDeleteClick}
          />
        )}
        <img
          className="element__image"
          src={card.link}
          alt={card.name}
          onClick={handleClick}
        />
        <div className="element__item">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like">
            <button
              className={`button element__heart ${
                isLiked && `element__heart_active`
              }`}
              type="button"
              aria-label="нравится"
              onClick={handleLikeClick}
            ></button>
            <span className="element__counter"></span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
