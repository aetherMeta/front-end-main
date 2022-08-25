export const useUser = (): UserState => {
  const user = useSelector((state: State) => state.user);
  return user;
};
