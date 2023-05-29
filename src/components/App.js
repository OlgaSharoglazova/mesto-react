
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() { 
  return (
    <div className="page">
        <div className="content">
          <Header />
          <Main 
            handleEditAvatarClick={() => {
              const popupAvatar = document.querySelector('.popup-avatar')
              popupAvatar.classList.add('popup_opened')}}
            handleEditProfileClick={() => {
              const popupEdit = document.querySelector('.popup-edit')
              popupEdit.classList.add('popup_opened')
            }}
            handleAddPlaceClick={() => {
              const popupAdd = document.querySelector('.popup-add')
              popupAdd.classList.add('popup_opened')
            }}
          />
          <Footer />
        </div>
        <PopupWithForm title={"Редактировать профиль"} name={"edit"}>
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
        <PopupWithForm title={"Новое место"} name={"add"}>
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
        <PopupWithForm title={"Вы уверены?"} name={"confirm"}>
          <button 
            className="button popup__button popup-confirm__button" 
            type="submit">
            Да
          </button>
        </PopupWithForm>
        <PopupWithForm title={"Обновить аватар"} name={"avatar"}>
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
        <ImagePopup></ImagePopup>
      </div>
  );
}

export default App;
