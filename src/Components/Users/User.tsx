import React from "react";
import { IUser } from "../../../types";

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div className="card col-12 mb-3 p-4">
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text">{user.email}</p>
      <p className="card-text">Role: {user.role}</p>
    </div>
  );
};

export default User;
