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