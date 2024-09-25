import { ReactNavigator } from '../navigation/navigator/ReactNavigator'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'

export interface Context {
    navigator: ReactNavigator
    screens: ScreenDefinition[]
}
