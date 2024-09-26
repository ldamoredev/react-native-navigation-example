import { App } from '../../../App';
import { AppModule } from '../AppModule'
import { HomeScreenDefinition } from './screens/HomeScreen'
import { DetailsScreenDefinition } from './screens/DetailsScreen'

export class HomeModule implements AppModule {
    initFor(app: App): void {
        this.registerScreens(app)
    }

    registerScreens(app: App) {
        app.addScreen(HomeScreenDefinition)
        app.addScreen(DetailsScreenDefinition)
    }
}
