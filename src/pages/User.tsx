import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { usersCurrent } from "../store/actions/usersActions";
import { RootState } from "../store/reducers/rootReducer";
type UserProps = {
  match: any;
};

const User: React.FC<UserProps> = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(usersCurrent(id));
  }, []);

  return (
    <Wrapper colorClass='primary'>
      <div className='back-link'>
        <Link to='/users'>
          <span className="icon">&#10094;</span> Back
        </Link>
      </div>
      {currentUser[0] ? (
        <div className='user-info'>
          <h3 className='name'>{currentUser[0].name}</h3>
          <h4 className='username'>{currentUser[0].username}</h4>
          <span className='email'>{currentUser[0].email}</span>
          <hr />
          <span>address:</span>
          <ul>
            <li>street: {currentUser[0].address.street}</li>
            <li>suite: {currentUser[0].address.suite}</li>
            <li>city: {currentUser[0].address.city}</li>
            <li>zipcode: {currentUser[0].address.zipcode} </li>
          </ul>
          <span>geo:</span>
          <ul>
            <li>lat: {currentUser[0].address.geo.lat}</li>
            <li>lng: {currentUser[0].address.geo.lng} </li>
          </ul>
          <hr />
          <dl>
            <dt>phone</dt>
            <dd>{currentUser[0].phone}</dd>
          </dl>
          <hr />
          <dl>
            <dt>website</dt>
            <dd>{currentUser[0].website}</dd>
          </dl>
          <hr />
          <span>company:</span>
          <ul>
            <li>name: {currentUser[0].company.name}</li>
            <li>catchPhrase: {currentUser[0].company.catchPhrase}</li>
            <li>bs: {currentUser[0].company.bs}</li>
          </ul>
        </div>
      ) : (
        <h1>Пользователей нету!</h1>
      )}
    </Wrapper>
  );
};

export default User;
