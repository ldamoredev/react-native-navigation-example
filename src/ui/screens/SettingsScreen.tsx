import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../navigation/screensDefinitions/ScreenVisibilities'

export const SettingsScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {}}
            />
        </View>
    );
}

export const SettingsScreenDefinition: ScreenDefinition = {
    name: 'Settings',
    component: SettingsScreen,
    visibility: ScreenVisibilities.Public,
}
