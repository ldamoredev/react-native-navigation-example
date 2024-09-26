import { Identity } from './identity/Identity'
import { Observable } from '../utils/Observable'
import { UserIdentity } from './identity/UserIdentity'
import { ObservableProperty } from '../utils/ObservableProperty'
import { AnonymousIdentity } from './identity/AnonymousIdentity'

export class Authenticator {
    readonly authenticated: ObservableProperty<boolean> = new ObservableProperty<boolean>(false)
    readonly identity: Observable<Identity> = new Observable()

    constructor() {
    }

    login(email: string, password: string) {
        this.authenticated.value = true
        this.identity.notify(new UserIdentity(email))
    }

    logout() {
        this.authenticated.value = false
        this.identity.notify(new AnonymousIdentity())
    }
}

