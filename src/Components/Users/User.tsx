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
      <p className="card-text">Role: <b>{user.role}</b></p>
      <p className="card-text">Status: {user.isActive ? <b>active</b> : <b>inactive</b>}</p>
    </div>
  );
};

export default User;