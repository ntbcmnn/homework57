import { useState } from "react";
import { IUser } from "../../../types";

import ToolBar from "../../Components/ToolBar/ToolBar";
import UsersForm from "../../Components/UsersForm/UsersForm";
import Users from "../../Components/Users/Users";

const UsersApp = () => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: "1",
      name: "Jane",
      email: "example-jane@gmail.com",
      isActive: true,
      role: "admin",
    },
    {
      id: "2",
      name: "John",
      email: "example-john@gmail.com",
      isActive: true,
      role: "editor",
    },
    {
      id: "3",
      name: "Maria",
      email: "example-maria@gmail.com",
      isActive: true,
      role: "user",
    },
    {
      id: "4",
      name: "Olivia",
      email: "example-olivia@gmail.com",
      isActive: true,
      role: "editor",
    },
  ]);

  const addUser = (newUser: IUser): void => {
    setUsers((prevState) => [newUser, ...prevState]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-6">
            <UsersForm addUser={addUser} />
          </div>
          <div className="col-6">
            <Users users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersApp;
