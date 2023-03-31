import { createContext, useState } from "react";
import axios from "axios";
import Cookie from "../utils/Cookie";
import { firebaseConfig } from "../firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const tokenCookie = new Cookie("token");
  const userCookie = new Cookie("user");
  const refreshTokenCookie = new Cookie("refreshToken");
  const expirationCookie = new Cookie("tokenExpiresIn");

  const refreshExpiredToken = async (refreshToken) => {
    const { data } = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${firebaseConfig.apiKey}`,
      { grant_type: "refresh_token", refresh_token: refreshToken }
    );
    tokenCookie.setCookie(data.id_token, new Date(Date.now() + 1 * 1000));
    refreshTokenCookie.setCookie(data.refresh_token);
    expirationCookie.setCookie(Date.now() + 1 * 1000);

    return {
      idToken: data.id_token,
      expiresIn: data.refresh_token,
      refreshToken: Date.now() + 1 * 1000,
      uid: userCookie.getCookie(),
    };
  };

  const initialState = () => {
    if (
      !userCookie.getCookie() ||
      !refreshTokenCookie.getCookie() ||
      !expirationCookie.getCookie()
    )
      return null;

    if (expirationCookie.getCookie() > Date.now())
      return {
        idToken: tokenCookie.getCookie(),
        expiresIn: expirationCookie.getCookie(),
        refreshToken: refreshTokenCookie.getCookie(),
        uid: userCookie.getCookie(),
      };

    if (expirationCookie.getCookie() < Date.now())
      return refreshExpiredToken(refreshTokenCookie.getCookie());
  };

  const [auth, setAuth] = useState(initialState());

  const logInUser = ({ idToken, expiresIn, refreshToken }, { uid }) => {
    tokenCookie.setCookie(idToken, new Date(1 + 1 * 1000));
    refreshTokenCookie.setCookie(refreshToken);
    userCookie.setCookie(uid);
    expirationCookie.setCookie(1 + 1 * 1000);
    setAuth({ idToken, expiresIn, refreshToken, uid });
  };

  const logOutUser = () => {
    tokenCookie.deleteCookie();
    refreshTokenCookie.deleteCookie();
    userCookie.deleteCookie();
    expirationCookie.deleteCookie();
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;
export { AuthProvider, AuthConsumer };
