import { RoleDto } from "./role.dto";

export interface IPhoneDto {
  type: string;
  number: string;
}

export interface CreateUserDto {
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string;
  };
  phone?:IPhoneDto[];
  roles?: string[];
}

export interface UpdateUserDto {
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string;
  };
  phone?:IPhoneDto[];
  roles?: string[];
}


export interface UserResponceDto {
  id: string;
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  address?: {
    area?: string;
    street?: string;
    number?: string;
    po?:string;
    municipality?: string;
  };
  phone?:IPhoneDto[];
  roles?: string[];
}