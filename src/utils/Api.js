class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetchApi(url, method, additionalHeaders, body) {
    const fetchOptions = {
      method: method,
      headers: { ...this._headers, ...additionalHeaders },
    };
    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${url}`, fetchOptions).then(res => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`);
      });
  }

  //Операции с карточками
  getInitialsCards() {
    return this._fetchApi("/cards", "GET");
  }

  postCard(card) {
    return this._fetchApi("/cards", "POST", {"Content-Type": "application/json"}, card);
  }

  removeCard(cardId) {
    return this._fetchApi(`/cards/${cardId}`, "DELETE");
  }

  changeLikeCardStatus(cardId, likeStatus) {
    if (likeStatus) {
      return this._fetchApi(`/cards/likes/${cardId}`, "PUT");
    } else {
      return this._fetchApi(`/cards/likes/${cardId}`, "DELETE");  
    }
  }
  
  //Операции с данными пользователя
  getUserInfo() {
    return this._fetchApi("/users/me", "GET");
  }

  editUserInfo(info) {
    return this._fetchApi("/users/me", "PATCH", {"Content-Type": "application/json"}, info);
  }

  editAvatar(link) {
    return this._fetchApi("/users/me/avatar", "PATCH", {"Content-Type": "application/json"}, {avatar: link});
  }
}

const api = new Api("https://mesto.nomoreparties.co/v1/cohort-13", {
  authorization: "d0402095-4250-4903-b400-52c8ec468fa5",
});

export default api;
