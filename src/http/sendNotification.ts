import axios from "axios"
import { User } from "../app/entities/User"

export async function sendNotification(repeaterUser: User): Promise<string> {
    await axios.post('https://util.devi.tools/api/v1/notify',{
        userId: repeaterUser.id,
        email: repeaterUser.email
    })

    return `Operação realizada com sucesso!!`
}