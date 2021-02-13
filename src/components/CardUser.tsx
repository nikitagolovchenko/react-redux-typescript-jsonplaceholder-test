import React from "react";
import { useHistory } from "react-router-dom";

type CardUserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const CardUser: React.FC<CardUserProps> = ({ id, name, username, email }) => {
  const history = useHistory();
  const clickHandler = () => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <div className='card-user' onClick={clickHandler}>
      <h3>{name}</h3>
      <h4>{username}</h4>
      <span>{email}</span>
    </div>
  );
};

export default CardUser;
