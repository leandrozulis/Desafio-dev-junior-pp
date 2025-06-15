import { RepositoryUser } from "../repositories/user.repository";
import { AlreadyExistsError } from "../use-cases/Errors/AlreadyExists.error";
import { AtributesTypeError } from "../use-cases/Errors/utils/atributes-type.error";

export async function validateUniqueCpfCnpj(
  cpfCnpj: string | undefined,
  userRepository: RepositoryUser,
  currentCpfCnpj?: string,
): Promise<void> {
  if (!cpfCnpj || cpfCnpj === currentCpfCnpj) return;

  const user = await userRepository.findByCpfCnpj(cpfCnpj);
  if (user) throw new AlreadyExistsError(AtributesTypeError.CPF_CNPJ);
}