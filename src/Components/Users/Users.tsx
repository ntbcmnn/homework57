import React from "react";
import { IUser } from "../../../types";
import User from "./User.tsx";

interface Props {
  users: IUser[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    users && (
      <>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </>
    )
  );
};

export default Users;
