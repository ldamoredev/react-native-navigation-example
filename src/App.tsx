import { ScreenDefinition } from './ui/navigation/screensDefinitions/ScreenDefinition'
import { Context } from './ui/context/Context'
import { ReactNavigator } from './ui/navigation/navigator/ReactNavigator'
import { RootView } from './ui/RootView'
import { ScreenVisibilities } from './ui/navigation/screensDefinitions/ScreenVisibilities'
import { ScreenTypes } from './ui/navigation/screensDefinitions/ScreenTypes'
import { registerRootComponent } from 'expo'
import { InitializingAppScreenDefinition } from './ui/initialiazer/InitializationAppScreen'
import { AppModule } from './ui/modules/AppModule'
import { Authenticator } from './ui/auth/Authenticator'

export class App {
    private screens: ScreenDefinition[] = []
    public readonly context: Context

    constructor() {
        this.context = this.createContext()
        this.addScreen(InitializingAppScreenDefinition)
    }

    private createContext(): Context {
        return {
            authenticator: new Authenticator(),
            navigator: new ReactNavigator(),
            screens: this.screens,
        }
    }

    private rootComponent = () => {
        return <RootView context={this.context} />
    }

    addScreen(definition: ScreenDefinition) {
        this.failIfScreenExists(definition.name)
        this.screens.push({ visibility: ScreenVisibilities.Always, type: ScreenTypes.Regular, title: '', ...definition })
    }

    addModule(appModule: AppModule) {
        appModule.initFor(this)
    }

    private getScreen(name: string): ScreenDefinition | undefined {
        return this.screens.find(s => s.name === name)
    }

    private failIfScreenExists(path: string) {
        if (this.getScreen(path)) throw new Error(`Path '${path}' is already registered`)
    }

    start() {
        const RootComponent = () => <>{this.rootComponent()}</>
        registerRootComponent(RootComponent)
    }
}
