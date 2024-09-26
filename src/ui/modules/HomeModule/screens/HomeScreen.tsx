import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenDefinition } from '../../../navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../../../navigation/screensDefinitions/ScreenVisibilities'
import { useAppContext } from '../../../context/AppContext'

export const HomeScreen: React.FC = () => {
    const { navigator } = useAppContext()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigator.navigate('Details')}
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
