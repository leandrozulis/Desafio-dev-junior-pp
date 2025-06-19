import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";
import { validateUserExists } from "../validators/validate-user-exists";

interface UserSchemaRequest {
  userId: string;
}

interface UserSchemaResponse {
  user: User;
}

export class UseCaseUserGetUser {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute({ userId }: UserSchemaRequest): Promise<UserSchemaResponse> {

    let user = await validateUserExists(userId, this.repositoryUser);

    return {
      user
    }
  }
}
