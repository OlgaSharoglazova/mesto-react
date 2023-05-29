import editAvatar from "../images/pencil.svg"
function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
          <img className="profile__avatar-img" alt="аватар"/>
            <button
              className="profile__avatar-button"
              type="button"
              onClick={handleEditAvatarClick}>
                <img className="profile__avatar-pen" alt="карандаш" src={editAvatar} />
            </button>
          </div>
          <div className="profile__title">
            <div className="profile__name-edit">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button 
                className="button profile__edit-button" 
                type="button" 
                aria-label="редактировать профиль"
                onClick={handleEditProfileClick}
              />
            </div>
            <p className="profile__profession">Исследователь океана</p>
          </div>
          </div>
          <button 
            className="button profile__add-button" 
            type="button" 
            aria-label="добавить фото" 
            onClick={handleAddPlaceClick}
          />
      </section>
      <section className="elements">
        <template id="cardTemplate" />
      </section>
    </main>
  );
}
  
export default Main;