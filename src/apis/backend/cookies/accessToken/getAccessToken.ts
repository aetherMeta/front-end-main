import * as jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";
import hasExpired from "./hasExpired";
import { AccessTokenPayload } from "./interface";

// get token from cookie
const getAccessToken = (): string | null => {
  const cookies = parseCookies();
  const accessToken = cookies[ACCESS_TOKEN_COOKIE_NAME];

  if (!accessToken) {
    return null;
  }

  try {
    const { exp } = jwt.decode(accessToken) as AccessTokenPayload;

    if (hasExpired(exp)) {
      return null;
    }

    return accessToken;
  } catch (err) {
    return null;
  }
};

export default getAccessToken;
