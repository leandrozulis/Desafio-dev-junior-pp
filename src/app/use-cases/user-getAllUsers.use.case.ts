import { User } from "../entities/User";
import { RepositoryUser } from "../repositories/user.repository";

interface UserSchemaResponse {
  users: User[];
}

export class UseCaseUserGetUser {
  constructor(private repositoryUser: RepositoryUser) { }

  async execute(): Promise<UserSchemaResponse> {

    let users = await this.repositoryUser.findManyUsers()

    return {
      users
    }
  }
}
