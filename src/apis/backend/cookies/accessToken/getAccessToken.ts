import * as jwt from "jsonwebtoken";
import { parseCookies } from "nookies";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";
import hasExpired from "./hasExpired";
import { AccessTokenPayload } from "./interface";

// get token from cookie
const getAccessToken = (): { accessToken: string; address: string } | null => {
  const cookies = parseCookies();

  if (!cookies[ACCESS_TOKEN_COOKIE_NAME]) return null;
  const [accessToken, address] = JSON.parse(cookies[ACCESS_TOKEN_COOKIE_NAME]);

  if (!accessToken) {
    return null;
  }

  try {
    const { exp } = jwt.decode(accessToken) as AccessTokenPayload;

    if (hasExpired(exp)) {
      return null;
    }

    return { accessToken, address };
  } catch (err) {
    return null;
  }
};

export default getAccessToken;
