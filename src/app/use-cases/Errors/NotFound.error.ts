export class NotFoundError extends Error {
  constructor(atribute?: string) {
    super(`${atribute} Not Found!`);
  }
}