import React, { ChangeEvent, useState } from "react";

import { IUser, IUserMutation } from "../../../types";

interface Props {
  addUser: (newUser: IUser) => void;
}

const UsersForm: React.FC<Props> = ({ addUser }) => {
  const [newUser, setNewUser] = useState<IUserMutation>({
    name: "",
    email: "",
    isActive: false,
    role: "",
  });

  const changeUserInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const isToggleActive = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewUser((prevState) => {
      return {
        ...prevState,
        isActive: event.target.checked,
      };
    });
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (
      newUser.name.trim().length === 0 ||
      newUser.email.trim().length === 0 ||
      !newUser.role
    ) {
      alert("Fill in all fields");
    } else {
      addUser({
        id: String(new Date()),
        ...newUser,
      });

      setNewUser({
        name: "",
        email: "",
        isActive: false,
        role: "",
      });
    }
  };

  return (
    <form className="mt-5" onSubmit={onSubmit}>
      <h3>Add user</h3>

      <div className="form-group mb-3">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          onChange={changeUserInfo}
          value={newUser.name}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={changeUserInfo}
          value={newUser.email}
          required
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="role">Select user's role:</label>
        <select
          name="role"
          id="role"
          className="form-select"
          onChange={changeUserInfo}
          value={newUser.role}
          required
        >
          <option value="" disabled>
            ...
          </option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="form-check mb-4">
        <label className="form-check-label" htmlFor="isActive">
          Is user active?
        </label>
        <input
          type="checkbox"
          name="isActive"
          id="isActive"
          className="form-check-input"
          checked={newUser.isActive}
          onChange={isToggleActive}
        />
      </div>

      <button type="submit" className="btn btn-dark">
        Add user
      </button>
    </form>
  );
};

export default UsersForm;
