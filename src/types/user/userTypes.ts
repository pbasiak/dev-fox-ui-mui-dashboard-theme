export interface UserCompany {
  department: string;
  name: string;
}

export interface UserAddress {
  city: string;
  postalCode: string;
  state: string;
}

export interface User {
  id: number | null;
  age: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  phone: string;
  username: string;
  birthDate: string;
  profileBackground: string;
  company: UserCompany;
  about: string;
  address: UserAddress;
  website: string;
}
