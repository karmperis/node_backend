import {Response, Request, NextFunction} from 'express';
import { ZodTypeAny } from 'zod';

export const validate = (schema: ZodTypeAny) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try{
      const toValidate = {
        body: req.body,
        query: req.query,
        params: req.params
      };
      schema.parse(toValidate);
      next();
    }catch(err:any){
      return res.status(400).json({message: err?.error || err?.message || "Validation error"});
    }
  }
}