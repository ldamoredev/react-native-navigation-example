import { ScreenDefinition } from './ui/navigation/screensDefinitions/ScreenDefinition'
import { Context } from './ui/context/Context'
import { ReactNavigator } from './ui/navigation/navigator/ReactNavigator'
import { RootView } from './ui/RootView'
import { ScreenVisibilities } from './ui/navigation/screensDefinitions/ScreenVisibilities'
import { ScreenTypes } from './ui/navigation/screensDefinitions/ScreenTypes'
import { HomeScreenDefinition } from './ui/screens/HomeScreen'
import { SettingsScreenDefinition } from './ui/screens/SettingsScreen'
import { DetailsScreenDefinition } from './ui/screens/DetailsScreen'
import { registerRootComponent } from 'expo'

export class App {
    private screens: ScreenDefinition[] = []
    public readonly context: Context

    constructor() {
        this.context = this.createContext()
    }

    private createContext(): Context {
        return {
            navigator: new ReactNavigator(),
            screens: [HomeScreenDefinition, SettingsScreenDefinition, DetailsScreenDefinition],
        }
    }

    private rootComponent = () => {
        return <RootView context={this.context}  />
    }

    addScreen(definition: ScreenDefinition) {
        this.failIfScreenExists(definition.name)
        this.screens.push({ visibility: ScreenVisibilities.Always, type: ScreenTypes.Regular, title: '', ...definition })
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
