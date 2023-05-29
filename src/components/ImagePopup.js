function ImagePopup() {
  return (
    <div className="popup popup-img">
      <div className="popup__image container">
        <img className="popup__photo" src="#" />
        <h2 className="popup__caption" />
        <button className="popup__close popup-img__close" type="button" aria-label="закрыть" />
      </div>
    </div>
  );
}
  
export default ImagePopup;