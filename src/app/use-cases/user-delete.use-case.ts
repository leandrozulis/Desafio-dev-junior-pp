import { RepositoryUser } from "../repositories/user.repository";
import { validateUserExists } from "../validators/validate-user-exists";

interface UserSchemaRequest {
  userId: string;
}

export class UseCaseUserDelete {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute({ userId }: UserSchemaRequest): Promise<void> {

    let user = await validateUserExists(userId, this.repositoryUser);

    await this.repositoryUser.remove(user.id);

    return;
  }
}
