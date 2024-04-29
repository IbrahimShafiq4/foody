export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    userName: string;
    email: string;
    country: string;
    phoneNumber: string;
    profileImage: string;
    password: string;
    confirmPassword: string;
}

export interface IVerify {
    email: string;
    code: string;
}

export interface IReset {
    email: string;
    seed: string;
    password: string;
    confirmPassword: string;
}

export interface ILoggedInResponse {
    roles: string[];
    userName: string;
    userEmail: string;
    userGroup: string;
    iat: number;
    exp: number;
}