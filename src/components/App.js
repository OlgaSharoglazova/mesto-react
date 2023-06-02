
import '../index.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() { 
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setselectedCard] = React.useState(null);

  function handleCardClick(selectedCard) {
    setselectedCard(selectedCard)
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true)
  }
  function closeAllPopups() {
    setisEditProfilePopupOpen(false)
    setisAddPlacePopupOpen(false)
    setisEditAvatarPopupOpen(false)
    setselectedCard(null)
  }
  return (
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
          <button 
            className="button popup__button popup-edit__button" 
            type="submit">
            Сохранить
          </button>
        </PopupWithForm>
        <PopupWithForm 
          title={"Новое место"} 
          name={"add"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          <button 
            className="button popup__button popup-add__button" 
            type="submit">
            Создать
          </button>
        </PopupWithForm>
        <PopupWithForm 
          title={"Вы уверены?"} 
          name={"confirm"}
          //isOpen={}
          >
          <button 
            className="button popup__button popup-confirm__button" 
            type="submit">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm 
          title={"Обновить аватар"} 
          name={"avatar"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
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
          <button 
            className="button popup__button popup-avatar__button" 
            type="submit">
            Сохранить
          </button>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        >
        </ImagePopup>
      </div>
  );
}

export default App;
