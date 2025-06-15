import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";
import { NotFoundError } from "../use-cases/Errors/NotFound.error";
import { AtributesTypeError } from "../use-cases/Errors/utils/atributes-type.error";

export async function validateUserExists(
  userId: string,
  repositoryUser: RepositoryUser
): Promise<User> {
  const user = await repositoryUser.findById(userId);
  if (!user) throw new NotFoundError(AtributesTypeError.ROLE);
  return user;
}