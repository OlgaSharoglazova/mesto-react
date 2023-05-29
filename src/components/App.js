
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

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
        <div className="popup popup-edit">
          <div className="popup__container container">
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="form popup__form form-edit" name="form" noValidate>
              <input type="text" id="input-name" className="input popup__input popup__input-name" placeholder="Имя" name="user" minLength={2} maxLength={40} required />
              <span className="popup__input-error input-name-error popup__input-error_type_name" />
              <input type="text" id="input-job" className="input popup__input popup__input-job" placeholder="О себе" name="job" minLength={2} maxLength={200} required />
              <span className="popup__input-error input-job-error popup__input-error_type_job" />
              <button className="button popup__button popup-edit__button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close popup-edit__close" type="button" aria-label="закрыть" />
          </div>
        </div>
        <div className="popup popup-add">
          <div className="popup__container container">
            <h2 className="popup__title">Новое место</h2>
            <form className="form popup__form form-add" name="form" noValidate>
              <input type="text" id="input-title" className="input popup__input popup-add__input popup__input-title" placeholder="Название" name="name" minLength={2} maxLength={30} required />
              <span className="popup__input-error input-title-error popup__input-error_type_title " />
              <input type="url" id="input-link" className="input popup__input popup__input-link" placeholder="Ссылка на картинку" name="link" required />
              <span className="popup__input-error input-link-error popup__input-error_type_link" />
              <button className="button popup__button popup-add__button" type="submit">Создать</button>
            </form>
            <button className="popup__close popup-add__close" type="button" aria-label="закрыть" />
          </div>
        </div>
        <div className="popup popup-img">
          <div className="popup__image container">
            <img className="popup__photo" src="#" />
            <h2 className="popup__caption" />
            <button className="popup__close popup-img__close" type="button" aria-label="закрыть" />
          </div>
        </div>
        <div className="popup popup-confirm">
          <div className="popup__container container">
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="form popup__form" name="form">
              <button className="button popup__button popup-confirm__button" type="submit">Да</button>
            </form>
            <button className="popup__close popup-confirm__close" type="button" aria-label="закрыть" />
          </div>
        </div>
        <div className="popup popup-avatar">
          <div className="popup__container container">
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="form popup__form form-avatar" name="form" noValidate>
              <input type="url" id="input-avatar" className="input popup__input popup__input-avatar" placeholder="https://somewebsite.com/someimage.jpg" name="avatar" required />
              <span className="popup__input-error input-avatar-error popup__input-error_type_avatar" />
              <button className="button popup__button popup-avatar__button" type="submit">Сохранить</button>
            </form>
            <button className="popup__close popup-avatar__close" type="button" aria-label="закрыть" />
          </div>
        </div>
      </div>
  );
}

export default App;
