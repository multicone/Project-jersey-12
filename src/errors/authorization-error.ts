import { CustomError } from './custom-error';

export class AuthorizationError extends CustomError {
  statusCode = 401;
  reason = 'You are unauthorized';

  constructor() {
    super('You are unauthorized');
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
