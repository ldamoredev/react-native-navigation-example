import { ComponentType } from 'react'
import { ScreenVisibilities } from './ScreenVisibilities'
import { ScreenTypes } from './ScreenTypes'
import { StackScreenOptions } from './StackScreenOptions'

export interface ScreenDefinition {
    name: string
    component: ComponentType
    title?: string
    type?: ScreenTypes
    visibility?: ScreenVisibilities
    options?: StackScreenOptions
}

