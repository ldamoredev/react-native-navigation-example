import { App } from '../../../App';
import { AppModule } from '../AppModule'
import { LoginScreenDefinition } from './screens/LoginScreen'
import { SignupScreenDefinition } from './screens/SignupScreen'

export class OnboardingModule implements AppModule {
    initFor(app: App): void {
        this.registerScreens(app)
    }

    registerScreens(app: App) {
        app.addScreen(LoginScreenDefinition)
        app.addScreen(SignupScreenDefinition)
    }
}
