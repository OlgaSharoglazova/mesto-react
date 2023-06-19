class Api {
  constructor(options) {
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  editProfile(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${dataUser.name}`,
        about: `${dataUser.about}`,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  addCard(dataCard) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(dataCard),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }

  //deleteLike(id) {
  // return fetch(`${this._baseUrl}/cards/${id}/likes`, {
  //   method: 'DELETE',
  //   headers: this._headers,
  // })
  // .then(res => res.ok ? res.json() : Promise.reject(res.status))
  // .catch(console.log)
  //}

  // addLike(id) {
  //   return fetch(`${this._baseUrl}/cards/${id}/likes`, {
  //     method: 'PUT',
  //    headers: this._headers,
  ////   })
  //   .then(res => res.ok ? res.json() : Promise.reject(res.status))
  //    .catch(console.log)
  // }

  changeLikeCardStatus(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "PUT",
        headers: this._headers,
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
        .catch(console.log);
    } else {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
        method: "DELETE",
        headers: this._headers,
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
        .catch(console.log);
    }
  }

  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .catch(console.log);
  }
  // другие методы работы с API
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "ae0200de-db36-4a97-9eb4-cce8d45d513f",
    "Content-Type": "application/json",
  },
});
