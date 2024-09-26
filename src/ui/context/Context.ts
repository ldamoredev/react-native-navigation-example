import { ReactNavigator } from '../navigation/navigator/ReactNavigator'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { Authenticator } from '../auth/Authenticator'

export interface Context {
    authenticator: Authenticator
    navigator: ReactNavigator
    screens: ScreenDefinition[]
}
