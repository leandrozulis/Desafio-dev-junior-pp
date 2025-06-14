export class AlreadyExistsError extends Error {
  constructor(atribute?: string) {
    super(`${atribute} Already exists.`);
  }
}