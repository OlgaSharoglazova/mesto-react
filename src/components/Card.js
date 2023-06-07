import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card({ card, cardId, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  function handleDeleteClick() {
    console.log('del');
  }
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  return (
    <>
      <article className="element" key={cardId}>
      {isOwn && <button className="button element__basket" type="button" onClick={handleDeleteClick} />} 
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
              className="button element__heart"
              type="button"
              aria-label="нравится"
            ></button>
            <span className="element__counter"></span>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
