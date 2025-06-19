import { User } from "../entities/User";

export interface RepositoryUser {
  findById(id: string): Promise<User | null>;
  findManyUsers(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  findByCpfCnpj(cpfCnpj: string): Promise<User | null>;
  register(user: User): Promise<void>;
  update(id: string, user: User): Promise<void>;
  remove(id: string): Promise<void>;
  getAll(): Promise<User[]>;
}