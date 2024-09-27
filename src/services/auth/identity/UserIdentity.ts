import { Identity } from './Identity'

export class UserIdentity implements Identity {
    readonly name: string
    readonly type = this.constructor.name
    readonly isAuthenticated = true

    constructor(readonly email: string) {
        this.name = email
    }
}
