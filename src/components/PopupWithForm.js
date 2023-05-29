function PopupWithForm() {
  return (
    <div className="popup">
      <div className="popup__container container">
        <h2 className="popup__title"></h2>
        <form className="form popup__form" name="form" noValidate>
          <button className="button popup__button popup-edit__button" type="submit">Сохранить</button>
        </form>
        <button className="popup__close popup-edit__close" type="button" aria-label="закрыть" />
      </div>
    </div>
  );
}
  
export default PopupWithForm;