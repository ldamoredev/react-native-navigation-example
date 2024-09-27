import { Text, View } from 'react-native'
import * as React from 'react'
import { ScreenDefinition } from '../../../../services/navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../../../../services/navigation/screensDefinitions/ScreenVisibilities'

export const DetailsScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Details!</Text>
        </View>
    );
}

export const DetailsScreenDefinition: ScreenDefinition = {
    name: 'Details',
    component: DetailsScreen,
    visibility: ScreenVisibilities.Private,
}

