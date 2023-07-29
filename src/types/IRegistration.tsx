export interface IRegistration {
  name: string;
  username: string;
  interests: { name: string }[];
  password: string;
  repeatpassword: string;
  createdAt: string;
}

export interface Interest {
  name: string;
}
