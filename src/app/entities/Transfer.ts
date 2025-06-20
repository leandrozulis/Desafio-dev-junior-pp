import { randomUUID } from "node:crypto"
import { User } from "./User"

interface TransferSchema {
    userId: User
    repeaterUserId: User
    value: number
    created: Date
}

export class Transfer {

    private _id: string
    private props: TransferSchema

    constructor(
        props: TransferSchema, id: string
    ) {
        this._id = id ?? randomUUID(),
        this.props = {
            ...props,
            created: new Date()
        }
    }

    get id(): string {
        return this._id
    }

    get userId(): User {
        return this.props.userId
    }

    get repeaterUserId(): User {
        return this.props.repeaterUserId
    }

    get value(): number {
        return this.props.value
    }

    get created(): Date {
        return this.props.created
    }

    set userId(userId: User) {
        this.props.userId = userId
    }

    set repeaterUserId(repeaterUserId: User) {
        this.props.repeaterUserId = repeaterUserId
    }

    set value(value: number) {
        this.props.value = value
    }

    set created(created: Date) {
        this.props.created = created
    }

}