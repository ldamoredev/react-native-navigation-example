import { ActivityIndicator, View } from 'react-native'
import * as React from 'react'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../navigation/screensDefinitions/ScreenVisibilities'
import { DetailsScreen } from './DetailsScreen'

export const InitializingAppScreen = () => {
    return (<View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator  />
    </View>)
}

export const InitializingAppScreenDefinition: ScreenDefinition = {
    name: 'Details',
    component: DetailsScreen,
    visibility: ScreenVisibilities.Public,
}
