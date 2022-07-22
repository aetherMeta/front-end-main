import * as jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";
import { AccessTokenPayload } from "./interface";

// get decoded token from cookie
const getAccessTokenPayload = (): AccessTokenPayload | null => {
  const cookies = parseCookies();
  const accessToken = cookies[ACCESS_TOKEN_COOKIE_NAME];

  if (!accessToken) {
    return null;
  }

  try {
    return jwt.decode(accessToken) as AccessTokenPayload;
  } catch (err) {
    return null;
  }
};

export default getAccessTokenPayload;
