export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UsersState = {
  loading: boolean;
  users: User[];
  error: string;
  currentUser: User[];
};

export enum UsersActionsTypes {
  USERS_LOADING = "USERS_LOADING",
  USERS_SUCCESS = "USERS_SUCCESS",
  USERS_ERROR = "USERS_ERROR",
  USERS_CURRENT = "USERS_CURRENT",
}

type UsersLoading = {
  type: UsersActionsTypes.USERS_LOADING;
};

type UsersSuccess = {
  type: UsersActionsTypes.USERS_SUCCESS;
  payload: User[];
};

type UsersError = {
  type: UsersActionsTypes.USERS_ERROR;
  payload: string;
};

type UsersCurrent = {
  type: UsersActionsTypes.USERS_CURRENT;
  payload: number;
};

export type UsersActionType = UsersLoading | UsersSuccess | UsersError | UsersCurrent;
