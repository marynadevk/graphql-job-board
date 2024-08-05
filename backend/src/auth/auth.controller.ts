import { Request, Response } from 'express';
import { login } from './auth.service.js';

export const handleLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await login(email, password);
  if (token) {
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
};
