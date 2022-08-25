import { useSelector } from "react-redux";
import { State, UserState } from "store/types";


export const useUser = (): UserState => {
  const user = useSelector((state: State) => state.user);
  return user;
};
