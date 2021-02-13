import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import CardUser from "../components/CardUser";
import Loader from "../components/Loader";
import Wrapper from "../components/Wrapper";
import { usersLoad } from "../store/actions/usersActions";
import { RootState } from "../store/reducers/rootReducer";

const Users = () => {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(usersLoad());
  }, []);

  return (
    <Wrapper colorClass='orange'>
      <h1 className='text-center'>Users List</h1>
      <div className='users-list'>
        {users.map((el) => {
          return (
            <CardUser
              key={el.id}
              id={el.id}
              name={el.name}
              username={el.username}
              email={el.email}
            />
          );
        })}
      </div>
      {loading && <Loader />}
      {error && <Alert text={error} />}
    </Wrapper>
  );
};

export default Users;
