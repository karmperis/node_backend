import {Request, Response, NextFunction} from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {user?: any;}
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers['authorization'];
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({message: 'Unauthorized'});
}
  const token = header.split(' ')[1];
  
  if(!token){
    res.status(401).json({message: 'Invalid authorization format'});
    return;
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({message: 'Invalid or expired token'});
  }
}