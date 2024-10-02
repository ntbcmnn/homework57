export interface IUser {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

export interface IUserMutation {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}