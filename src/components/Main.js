import editAvatar from "../images/pencil.svg"
import { api } from '../utils/api';
import React from "react";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setuserName] = React.useState(" ");
  const [userDescription, setuserDescription] = React.useState(" ");
  const [userAvatar, setuserAvatar] = React.useState(" ");
  const [userCards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile()
      .then((dataUser) => {
        setuserName(dataUser.name);
        setuserDescription(dataUser.about);
        setuserAvatar(dataUser.avatar);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    api.getInitialCards(userCards)
      .then((userCards) => {
        setCards(
          userCards.map((card) => ({
           card: card
          }))
        )
      })
      .catch((err) => console.log(`Ошибка: ${err}`));  
  }, [])

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
          <img className="profile__avatar-img" alt="аватар" style={{ backgroundImage: `url(${userAvatar})` }}/>
            <button
              className="profile__avatar-button"
              type="button"
              onClick={onEditAvatar}>
                <img className="profile__avatar-pen" alt="карандаш" src={editAvatar} />
            </button>
          </div>
          <div className="profile__title">
            <div className="profile__name-edit">
              <h1 className="profile__name">{userName}</h1>
              <button 
                className="button profile__edit-button" 
                type="button" 
                aria-label="редактировать профиль"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
          </div>
          <button 
            className="button profile__add-button" 
            type="button" 
            aria-label="добавить фото" 
            onClick={onAddPlace}
          />
      </section>
      <section className="elements">
        {userCards.map(({card}) => (
          <Card
           card={card}
           onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}
  
export default Main;

// {cards.map((card) => (
//   <Card 
//    name={card.name}
//    link={card.link}
//    key={card.cardId}
//    onCardClick={onCardClick}
//   />
// ))}