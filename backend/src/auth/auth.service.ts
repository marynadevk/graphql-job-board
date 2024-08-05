import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { userEntity } from '../db/users.js';
import { envConfig } from '../config.js';

const secret = Buffer.from(envConfig.jwtSecret, 'base64');

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret,
});

export const login = async (email: string, password: string) => {
  const user = await userEntity.getUserByEmail(email);
  const claims = { sub: user.id, email: user.email };
  if (user.password !== password) {
    return null;
  } else {
    return jwt.sign(claims, secret);
  }
};
