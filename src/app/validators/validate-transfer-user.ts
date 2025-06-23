import { RoleType } from "../../utils/role-type";
import { User } from "../entities/User";
import { TransferError } from "../use-cases/Errors/TransferError.error";

export async function validateTransferUser(user: User): Promise<void> {

    if (user.role !== RoleType.COMUM) {
        throw new TransferError()
    }

}