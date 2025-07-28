import 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any; // JWT içeriği, isterseniz User olarak daraltabilirsiniz
    }
  }
}
