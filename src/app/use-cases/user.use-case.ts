import { RoleType } from "../../utils/role-type";
import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";
import { AlreadyExistsError } from "./Errors/AlreadyExists.error";
import { AtributesTypeError } from "./Errors/utils/atributes-type.error";

interface UserSchemaRequest {
  role: RoleType;
  fullName: string;
  cpfCnpj: string;
  email: string;
  password: string;
  balance: number;
}

interface UserSchemaResponse {
  user: User;
}

export class UseCaseUser {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute({ role, fullName, cpfCnpj, email, password, balance }: UserSchemaRequest): Promise<UserSchemaResponse> {

    const findByEmail = await this.repositoryUser.findByEmail(email);

    if (findByEmail) {
      throw new AlreadyExistsError(AtributesTypeError.EMAIL);
    }

    const findByCpfCnpj = await this.repositoryUser.findByCpfCnpj(cpfCnpj);

    if (findByCpfCnpj) {
      throw new AlreadyExistsError(AtributesTypeError.CPF_CNPJ);
    }

    const user = new User({
      role,
      fullName,
      cpfCnpj,
      email,
      password,
      balance
    });

    await this.repositoryUser.register(user);

    return { user };
  }
}
