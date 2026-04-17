import { Request, Response, NextFunction } from 'express';
import {IRole} from '../models/role.model';

export const hasReaderRole = (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log("req.user:", req.user);
    const checkReaderRole = req.user.roles.some((r: IRole) => r.role === 'reader');
    if (!checkReaderRole) {
      return res.status(403).json({message: 'Forbidden no reader role'});
    }
    next();

  } catch (error) {
    res.status(401).json({message: 'Invalid or expired token'});
  }
}