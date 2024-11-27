import { JwtPayload } from "jsonwebtoken";

declare namespace Express {
  export interface Request {
    user?: JwtPayload | string; // Extend to include `user` property
  }
}
