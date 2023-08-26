export const StatusCode = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
};
export class HttpError extends Error {
  constructor(messsage, code) {
    super(messsage);
    this.statusCode = code;
  }
}
