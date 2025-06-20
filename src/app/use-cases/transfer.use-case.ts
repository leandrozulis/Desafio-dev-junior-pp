import { calculateTransfer } from "../calculaters/calculate-transfer";
import { Transfer } from "../entities/Transfer";
import { RepositoryTransfer } from "../repositories/transfer.repository";
import { RepositoryUser } from "../repositories/user.repository";
import { validateBalanceUser } from "../validators/validate-balance-user";
import { validateTransferUser } from "../validators/validate-transfer-user";
import { validateUserExists } from "../validators/validate-user-exists";

interface useCaseTransferRequest {
    userId: string;
    repeaterUserId: string;
    value: number;
}

interface useCaseTransferResponse {
    transfer: Transfer
}

export class UseCaseTransfer {
    constructor(
        private repositoryTransfer: RepositoryTransfer,
        private repositoryUser: RepositoryUser
    ) {}

    async execute({ userId, repeaterUserId, value }: useCaseTransferRequest): Promise<useCaseTransferResponse> {

        const user = await validateUserExists(userId, this.repositoryUser)

        await validateTransferUser(user)
        await validateBalanceUser(user.balance)

        const userRepeater = await validateUserExists(repeaterUserId, this.repositoryUser)

        const result = await calculateTransfer(user, userRepeater, value)

        await this.repositoryUser.update(user.id, result.user)
        await this.repositoryUser.update(userRepeater.id, result.repeaterUser)

        const transfer = await this.repositoryTransfer.register(userId, repeaterUserId, value)

        return { transfer }
    }
}