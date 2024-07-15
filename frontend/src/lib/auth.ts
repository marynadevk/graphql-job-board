// import { jwtDecode } from 'jwt-decode';
// import { IUser } from '../interfaces/IUser';

// const API_URL = process.env.REACT_APP_API_URL as string;
// const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY as string;

// class Authentication {

//   constructor() {
//     this.getAccessToken = this.getAccessToken.bind(this);
//     this.login = this.login.bind(this);
//     this.getUser = this.getUser.bind(this);
//     this.logout = this.logout.bind(this);
//     this.getUserFromToken = this.getUserFromToken.bind(this);
//   }

//   getAccessToken() {
//     return localStorage.getItem(ACCESS_TOKEN_KEY);
//   }

//   async login(email: string, password: string): Promise<IUser | null> {
//     const response = await fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     if (!response.ok) {
//       return null;
//     }
//     const { token } = await response.json();
//     localStorage.setItem(ACCESS_TOKEN_KEY, token);
//     return this.getUserFromToken(token);
//   }

//   getUser(): IUser | null {
//     const token = this.getAccessToken();
//     if (!token) {
//       return null;
//     }
//     return this.getUserFromToken(token);
//   }

//   logout() {
//     localStorage.removeItem(ACCESS_TOKEN_KEY);
//   }

//   getUserFromToken(token: string): IUser {
//     const claims = jwtDecode<JwtClaims>(token);
//     return {
//       id: claims.sub,
//       email: claims.email,
//     };
//   }
// }

// export const auth = new Authentication();
// export interface JwtClaims {
//   sub: string;
//   email: string;
// }

import { jwtDecode } from 'jwt-decode';

const API_URL = process.env.REACT_APP_API_URL as string;
const ACCESS_TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN_KEY as string;

export interface User {
  id: string;
  email: string;
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export async function login(email: string, password: string): Promise<User | null> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    return null;
  }
  const { token } = await response.json();
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
  return getUserFromToken(token);
}

export function getUser(): User | null {
  const token = getAccessToken();
  if (!token) {
    return null;
  }
  return getUserFromToken(token);
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

interface JwtClaims {
  sub: string;
  email: string;
}

function getUserFromToken(token: string): User {
  const claims = jwtDecode<JwtClaims>(token);
  return {
    id: claims.sub,
    email: claims.email,
  };
}