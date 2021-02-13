import { fetchData } from "./../../utils/fetchData";
import { UsersActionType, UsersActionsTypes } from "./../../types/users";
import { Dispatch } from "react";

export const usersLoad = () => {
  return async (dispatch: Dispatch<UsersActionType>) => {
    try {
      dispatch({
        type: UsersActionsTypes.USERS_LOADING,
      });

      const data = await fetchData(`${process.env.REACT_APP_URL}/users`);

      dispatch({
        type: UsersActionsTypes.USERS_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: UsersActionsTypes.USERS_ERROR,
        payload: e.message,
      });
    }
  };
};

export const usersCurrent = (id: number) => {
  return {
    type: UsersActionsTypes.USERS_CURRENT,
    payload: Number(id)
  };
};
