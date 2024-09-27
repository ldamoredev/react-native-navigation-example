import { Identity } from './identity/Identity'
import { Observable } from '../utils/Observable'
import { UserIdentity } from './identity/UserIdentity'
import { AnonymousIdentity } from './identity/AnonymousIdentity'

export class Authenticator {
    readonly identity: Observable<Identity> = new Observable()

    constructor() {
    }

    login(email: string, password: string) {
        this.identity.notify(new UserIdentity(email))
    }

    logout() {
        this.identity.notify(new AnonymousIdentity())
    }
}

