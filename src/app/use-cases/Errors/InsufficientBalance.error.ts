export class InsufficientBalanceError extends Error {
    constructor(balance: number) {
        super(`The amount of R$${balance} is insufficient for transfer`)
    }
}