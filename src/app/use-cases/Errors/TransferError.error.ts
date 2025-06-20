import { RoleType } from "../../../utils/role-type";

export class TransferError extends Error {
    constructor() {
        super(`${RoleType.LOJISTA} is not allowed to generate transfer!`)
    }
}