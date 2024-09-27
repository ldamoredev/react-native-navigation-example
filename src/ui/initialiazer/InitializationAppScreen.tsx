import { ActivityIndicator, View } from 'react-native'
import * as React from 'react'
import { ScreenDefinition } from '../../services/navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../../services/navigation/screensDefinitions/ScreenVisibilities'
import { DetailsScreen } from '../modules/HomeModule/screens/DetailsScreen'

export const InitializingAppScreen = () => {
    return (<View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator  />
    </View>)
}

export const InitializingAppScreenDefinition: ScreenDefinition = {
    name: 'InitializationApp',
    component: InitializingAppScreen,
    visibility: ScreenVisibilities.Always,
}
