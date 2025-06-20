import { Transfer } from "../entities/Transfer";

export interface RepositoryTransfer {
    register(userId: string, repeaterUser: string, value: number): Promise<Transfer>
}