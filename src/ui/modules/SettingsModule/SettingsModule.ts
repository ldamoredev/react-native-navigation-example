import { App } from '../../../App';
import { AppModule } from '../AppModule'
import { SettingsScreenDefinition } from './screens/SettingsScreen'

export class SettingsModule implements AppModule {
    initFor(app: App): void {
       this.registerScreens(app)
    }

    registerScreens(app: App) {
        app.addScreen(SettingsScreenDefinition)
    }
}
