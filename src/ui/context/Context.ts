import { ReactNavigator } from '../navigation/navigator/ReactNavigator'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { ComponentType } from 'react'

export interface Context {
    layout: ComponentType
    navigator: ReactNavigator
    screens: ScreenDefinition[]
}
