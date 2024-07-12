import { Request, Response } from 'express';
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import { userEntity } from './db/users.js';

const secret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

export const authMiddleware = expressjwt({
  algorithms: ['HS256'],
  credentialsRequired: false,
  secret,
});

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await userEntity.getUserByEmail(email);

  if (!user || user.password !== password) {
    res.sendStatus(401);
  } else {
    const claims = { sub: user.id, email: user.email };
    const token = jwt.sign(claims, secret);
    res.json({ token });  
  }
}
