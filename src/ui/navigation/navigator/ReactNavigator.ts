import { createNavigationContainerRef, StackActions } from '@react-navigation/native'
import { Navigator } from './Navigator'
import { Route } from './Route'

export class ReactNavigator implements Navigator {
    private _ref = createNavigationContainerRef()

    get ref() {
        return this._ref
    }

    get currentRoute(): Route|null {
        if (!this.ref.isReady()) return null
        const nativeRoute = this.ref.getCurrentRoute()
        if (!nativeRoute) return null
        return new Route(nativeRoute.name, nativeRoute.params)
    }

    navigate(path: string, params: Record<string, any> = {}): void {
        if (!this.ref.isReady()) return null
        // @ts-ignore
        this.ref.navigate(path, params)
    }

    replace(path: string, params: Record<string, any> = {}): void {
        if (!this.ref.isReady()) return
        // @ts-ignore
        this.ref.dispatch(StackActions.replace(path, params))
    }

    goBack(): void {
        if (!this.ref.isReady()) return
        if (!this.ref.canGoBack()) return
        // @ts-ignore
        this.ref.goBack()
    }

    popToTop(): void {
        if (!this.ref.isReady()) return
        if (!this.ref.canGoBack()) return
        // @ts-ignore
        this.ref.dispatch(StackActions.popToTop())
    }
}
