import React, { useRef, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const avatarInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  useEffect(() => {
    avatarInput.current.value = currentUser.avatar;
  }, [currentUser]);

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      closeText="Сохранить"
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__form-field">
          <input
            className="popup__input"
            name="link"
            type="url"
            ref={avatarInput}
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
