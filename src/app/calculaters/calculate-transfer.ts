import { User } from "../entities/User";

export async function calculateTransfer(user: User, repeaterUser: User, value: number) {

    user.balance -= value
    repeaterUser.balance += value

    return {
        user,
        repeaterUser
    }

}