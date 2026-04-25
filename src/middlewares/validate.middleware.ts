import { Response, Request,NextFunction } from "express";
import { ZodTypeAny } from "zod";

export const validate = (schema: ZodTypeAny) => 
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const toValidate = {
        body: req.body,
        query: req.query,
        params: req.params
      };
      schema.parse(toValidate.body);
      next();
    } catch (err:any) {
      return res.status(400).json({message: err?.errors || err?.message || 'validation error'})
    }
  }