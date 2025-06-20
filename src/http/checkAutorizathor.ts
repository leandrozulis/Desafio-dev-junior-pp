import axios from "axios"

export async function checkExternalAuthorization(): Promise<Boolean> {
    const response = await axios.get('https://util.devi.tools/api/v2/authorize')

    if (response.data.status === "success" &&
        response.data.authorization === true
    ) {
        return true
    }

    return false
}