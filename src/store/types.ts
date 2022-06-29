export enum Role {
  ADMIN,
  USER,
}

export interface User {
  pendingEmail: string;
  email: string;
  username: string;
  address: string;
  firstName?: string;
  lastName?: string;
  role: Role;
  twitterHandle: string;
}

export interface UserState {
  data: User;
  userDataLoaded: boolean;
}

// Store state
export interface State {
  user: UserState;
}
