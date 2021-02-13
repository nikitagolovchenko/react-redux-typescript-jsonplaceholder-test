import {
  UsersActionsTypes,
  UsersActionType,
  UsersState,
} from "./../../types/users";

const initialState: UsersState = {
  loading: false,
  users: [],
  error: "",
  currentUser: [],
};

const usersReducer = (
  state: UsersState = initialState,
  action: UsersActionType
): UsersState => {
  switch (action.type) {
    case UsersActionsTypes.USERS_LOADING:
      return { ...state, loading: true, error: "" };
    case UsersActionsTypes.USERS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UsersActionsTypes.USERS_SUCCESS:
      return { ...state, loading: false, error: "", users: action.payload };
    case UsersActionsTypes.USERS_CURRENT:
      return { ...state, currentUser: state.users.filter(el => el.id === action.payload)}
    default:
      return state;
  }
};

export default usersReducer;
