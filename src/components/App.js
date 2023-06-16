import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup.js";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setselectedCard] = React.useState(null);
  const [currentUser, setСurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfile()
      .then((dataUser) => {
        setСurrentUser(dataUser);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
    api
      .getInitialCards(cards)
      .then((cards) => {
        setCards(
          cards.map((card) => ({
            card: card,
            cardId: card._id,
          }))
        );
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleCardClick(selectedCard) {
    setselectedCard(selectedCard);
  }
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    });
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }
  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
    setselectedCard(null);
  }

  function handleUpdateUser(dataUser) {
    api
      .editProfile(dataUser)
      .then((newData) => {
        setСurrentUser(newData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="content">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards={cards}
          />
          <Footer />
        </div>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          title={"Новое место"}
          name={"add"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonTitle={"Создать"}
        >
          <input
            type="text"
            id="input-title"
            className="input popup__input popup-add__input popup__input-title"
            placeholder="Название"
            name="name"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="popup__input-error input-title-error popup__input-error_type_title " />
          <input
            type="url"
            id="input-link"
            className="input popup__input popup__input-link"
            placeholder="Ссылка на картинку"
            name="link"
            required
          />
          <span className="popup__input-error input-link-error popup__input-error_type_link" />
        </PopupWithForm>
        <PopupWithForm
          title={"Вы уверены?"}
          name={"confirm"}
          buttonTitle={"Да"}
        ></PopupWithForm>
        <PopupWithForm
          title={"Обновить аватар"}
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonTitle={"Сохранить"}
        >
          <input
            type="url"
            id="input-avatar"
            className="input popup__input popup__input-avatar"
            placeholder="https://somewebsite.com/someimage.jpg"
            name="avatar"
            required
          />
          <span className="popup__input-error input-avatar-error popup__input-error_type_avatar" />
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
