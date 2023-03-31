class Cookie {
  constructor(key) {
    this.key = key;
  }

  getCookie() {
    const name = this.key + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }

  setCookie(token, expiresIn) {
    document.cookie = `${this.key}=${token}; expires=${expiresIn}; `;
  }

  deleteCookie() {
    document.cookie = `${this.key}=; expires=Wed, 05 Aug 2020 23:00:00 UTC`;
  }
}

export default Cookie;
