import React from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose}) {
  return (
    <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          closeText="Сохранить"
          isOpened={isOpen}
          onClose={onClose}
        >
          <fieldset className="popup__fieldset">
            <label className="popup__form-field">
              <input
                className="popup__input"
                name="link"
                type="url"
                placeholder="Ссылка на аватар"
                required
              />
              <span className="popup__input-error"></span>
            </label>
          </fieldset>
        </PopupWithForm>
        
  );
}

export default EditAvatarPopup;