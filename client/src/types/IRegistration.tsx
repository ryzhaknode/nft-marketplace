export interface IRegistration {
  name: string;
  email: string;
  interests: { name: string }[];
  password: string;
}

export interface Interest {
  name: string;
}
