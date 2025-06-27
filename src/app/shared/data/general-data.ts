import { ErrorBody } from "../models/error.interface";

export const ExpiredTokenError: ErrorBody = {
  code: '0000',
  description: 'Token expirado',
  detail: ['Por favor inicia sesión nuevamente']
}