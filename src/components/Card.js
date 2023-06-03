function Card({ card, cardId, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <>
      <article className="element" key={cardId}>
        <button className="button element__basket" type="button" />
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
