import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setselectedCard] = React.useState(null);
  const [currentUser, setcurrentUser] = React.useState("");

  React.useEffect(() => {
    api
      .getProfile()
      .then((dataUser) => {
        setcurrentUser(dataUser);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }, []);

  function handleCardClick(selectedCard) {
    setselectedCard(selectedCard);
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
          />
          <Footer />
        </div>
        <PopupWithForm
          title={"Редактировать профиль"}
          name={"edit"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonTitle={"Сохранить"}
        >
          <input
            type="text"
            id="input-name"
            className="input popup__input popup__input-name"
            placeholder="Имя"
            name="user"
            minLength={2}
            maxLength={40}
            required
          />
          <span className="popup__input-error input-name-error popup__input-error_type_name" />
          <input
            type="text"
            id="input-job"
            className="input popup__input popup__input-job"
            placeholder="О себе"
            name="job"
            minLength={2}
            maxLength={200}
            required
          />
          <span className="popup__input-error input-job-error popup__input-error_type_job" />
        </PopupWithForm>
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
