import { UserRole } from "../../shared/types/user";

type JWT = {
  sub: string;
  auth: UserRole;
  auto: boolean;
  exp: number;
};

export const getUserId = (token: string): string => {
  const jwt = parseJwt(token);
  return jwt.sub;
};

export const parseJwt = (token: string): JWT => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
};
