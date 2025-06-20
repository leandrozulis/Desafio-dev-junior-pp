export class InsufficientBalanceError extends Error {
    constructor(balance: number) {
        super(`Insufficient balance of R$${balance} to make the transfer`)
    }
}