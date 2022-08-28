import { destroyCookie } from "nookies";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";

// remove cookie of access token
const destroyAccessToken = (): void => {
  destroyCookie(null, ACCESS_TOKEN_COOKIE_NAME);
};

export default destroyAccessToken;
