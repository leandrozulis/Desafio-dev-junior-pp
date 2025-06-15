import { RoleType } from "../../utils/role-type";
import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";
import { validateUniqueCpfCnpj } from "../validators/validate-unique-cpfCnpj";
import { validateUniqueEmail } from "../validators/validate-unique-email";
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

export class UseCaseUserCreate {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute({ role, fullName, cpfCnpj, email, password, balance }: UserSchemaRequest): Promise<UserSchemaResponse> {

    await validateUniqueEmail(email, this.repositoryUser);
    await validateUniqueCpfCnpj(cpfCnpj, this.repositoryUser);

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
