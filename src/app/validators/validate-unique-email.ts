import { RepositoryUser } from "../repositories/user.repository";
import { AlreadyExistsError } from "../use-cases/Errors/AlreadyExists.error";
import { AtributesTypeError } from "../use-cases/Errors/utils/atributes-type.error";

export async function validateUniqueEmail(
  email: string | undefined,
  userRepository: RepositoryUser,
  currentEmail?: string,
): Promise<void> {
  if (!email || email === currentEmail) return;

  const user = await userRepository.findByEmail(email);
  if (user) throw new AlreadyExistsError(AtributesTypeError.EMAIL);
}