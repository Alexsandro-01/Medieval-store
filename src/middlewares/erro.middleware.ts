import { Request, Response, NextFunction } from 'express';

const codeStatus: { [statusName: string]: number } = {
  NotFoundError: 404,
  BadRequestError: 400,
  UnauthorizedError: 401,
  UnprocessableError: 422,
};

async function erroMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  const { name, message } = err;

  const status = codeStatus[name];
  if (!status) {
    return res.status(500).json({ message });
  }

  res.status(status).json({ message });

  next();
}

export default erroMiddleware;