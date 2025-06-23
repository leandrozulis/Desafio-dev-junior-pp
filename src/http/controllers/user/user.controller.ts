import { FastifyReply, FastifyRequest } from "fastify";
import { UseCaseUserCreate } from "../../../app/use-cases/user-create.use-case";
import { createUserDTO } from "./DTO/create-user.DTO";
import { RoleType } from "../../../utils/role-type";

export class UserController {
  constructor(
    private useCasecreateUser: UseCaseUserCreate,
  ) { }

  async createUser(request: FastifyRequest, reply: FastifyReply) {
    try {
      const {
        role,
        fullName,
        cpfCnpj,
        email,
        password,
        balance
      } = createUserDTO.parse(request.body)

      const { user } = await this.useCasecreateUser.execute({
        role: role as RoleType,
        fullName,
        cpfCnpj,
        email,
        password,
        balance
      });

      reply.status(201).send({
        message: "User created successfully",
        user
      });
    } catch (error) {
      if (error instanceof Error) {
        reply.status(400).send({
          message: error.message,
        });
      } else {
        reply.status(500).send({
          message: "Internal server error",
        });
      }
    }
  }
}