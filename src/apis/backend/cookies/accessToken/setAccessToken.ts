import { setCookie } from "nookies";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";

// store token in cookie
const setAccessToken = (accessToken: string): void => {
  setCookie(null, ACCESS_TOKEN_COOKIE_NAME, accessToken, {
    maxAge: 60 * 60, // 1 hour
    path: "/",
  });
};

export default setAccessToken;
