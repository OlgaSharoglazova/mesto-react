function PopupWithForm({ title, name, children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container container">
        <h2 className="popup__title">{title}</h2>
        <form 
          className={`form popup__form form-${name}`} 
          name={`form-${name}`} 
          noValidate>
          {children}
        </form>
        <button 
          className={`popup__close popup-${name}__close`} 
          type="button" 
          aria-label="закрыть" 
        />
      </div>
    </div>
  );
}
  
export default PopupWithForm;