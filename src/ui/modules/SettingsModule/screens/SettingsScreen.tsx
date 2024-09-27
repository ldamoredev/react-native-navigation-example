import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenDefinition } from '../../../../services/navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../../../../services/navigation/screensDefinitions/ScreenVisibilities'
import { useAppContext } from '../../../context/AppContext'

export const SettingsScreen: React.FC = () => {
    const { navigator } = useAppContext()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigator.navigate('Details')}
            />
        </View>
    );
}

export const SettingsScreenDefinition: ScreenDefinition = {
    name: 'Settings',
    component: SettingsScreen,
    visibility: ScreenVisibilities.Private,
}
