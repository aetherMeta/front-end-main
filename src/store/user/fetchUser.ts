import { User, Role } from "store/types";

export const fetchUserData = async (): Promise<User> => {
  // TODO: Axios get endpoint for user
  return {
    pendingEmail: "test@gmail.com",
    email: "test@gmail.com",
    username: "test",
    address: "123 test",
    firstName: "first",
    lastName: "last",
    role: Role.ADMIN,
    twitterHandle: "tweet",
  };
};
