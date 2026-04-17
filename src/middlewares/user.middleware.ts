import { Request, Response, NextFunction } from 'express';
import {IRole} from '../models/role.model';

export const hasReaderRole = (req: Request, res: Response, next: NextFunction) => {
  try{
    const roles = Array.isArray(req.user?.roles) ? req.user.roles : [];
    const checkReaderRole = roles.some((r: IRole | string) => {
      if (typeof r === 'string') return r.toUpperCase() === 'READER';
      return String(r?.role || '').toUpperCase() === 'READER';
    });
    if (!checkReaderRole) {
      return res.status(403).json({message: 'Forbidden no reader role'});
    }
    next();

  } catch (error) {
    res.status(401).json({message: 'Invalid or expired token'});
  }
}