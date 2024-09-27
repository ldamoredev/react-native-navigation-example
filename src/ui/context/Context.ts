import { ReactNavigator } from '../../services/navigation/navigator/ReactNavigator'
import { ScreenDefinition } from '../../services/navigation/screensDefinitions/ScreenDefinition'
import { Authenticator } from '../../services/auth/Authenticator'

export interface Context {
    authenticator: Authenticator
    navigator: ReactNavigator
    screens: ScreenDefinition[]
}
