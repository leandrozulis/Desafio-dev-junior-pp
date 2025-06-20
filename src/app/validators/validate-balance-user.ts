import { InsufficientBalanceError } from "../use-cases/Errors/InsufficientBalance.error";

export async function validateBalanceUser(balance: number) {
    if (balance <= 0) throw new InsufficientBalanceError(balance)
}