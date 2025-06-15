import { RoleType } from "../../utils/role-type";
import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";
import { validatePassword } from "../validators/validate-password";
import { validateUniqueCpfCnpj } from "../validators/validate-unique-cpfCnpj";
import { validateUniqueEmail } from "../validators/validate-unique-email";
import { validateUserExists } from "../validators/validate-user-exists";

interface UserSchemaRequest {
  role?: RoleType;
  fullName?: string;
  cpfCnpj?: string;
  email?: string;
  password?: string;
  id: string;
}

interface UserSchemaResponse {
  user: User;
}

export class UseCaseUserUpdate {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute({ role, fullName, cpfCnpj, email, password, id }: UserSchemaRequest): Promise<UserSchemaResponse> {

    const findUser = await validateUserExists(id, this.repositoryUser);
    await validateUniqueEmail(email, this.repositoryUser, findUser.email);
    await validateUniqueCpfCnpj(cpfCnpj, this.repositoryUser, findUser.cpfCnpj);
    let newHash = await validatePassword(password, findUser.password);

    const user = new User({
      role: role ?? findUser.role,
      fullName: fullName ?? findUser.fullName,
      cpfCnpj: cpfCnpj ?? findUser.cpfCnpj,
      email: email ?? findUser.email,
      password: newHash ?? findUser.password,
      balance: findUser.balance,
      dtcreated: findUser.dtcreated,
      dtupdated: new Date(),
    }, findUser.id);

    await this.repositoryUser.update(findUser.id, user);

    return { user };
  }
}
