import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div>
    <div className="content">
      <header className="header">
        <div className="header__logo" />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img className="profile__avatar-img" />
            </div>
            <div className="profile__title">
              <div className="profile__name-edit">
                <h1 className="profile__name" />
                <button className="button profile__edit-button" type="button" aria-label="редактировать профиль" />
              </div>
              <p className="profile__profession" />
            </div>
          </div>
          <button className="button profile__add-button" type="button" aria-label="добавить фото" />
        </section>
        <section className="elements">
          <template id="cardTemplate" />
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>
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
