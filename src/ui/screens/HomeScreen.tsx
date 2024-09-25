import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../navigation/screensDefinitions/ScreenVisibilities'

export const HomeScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {}}
            />
        </View>
    );
}

export const HomeScreenDefinition: ScreenDefinition = {
    name: 'Home',
    title: '',
    component: HomeScreen,
    visibility: ScreenVisibilities.Public,
}
