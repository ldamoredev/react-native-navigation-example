import { Button, Text, View } from 'react-native'
import * as React from 'react'
import { ScreenVisibilities } from '../../../../services/navigation/screensDefinitions/ScreenVisibilities'
import { ScreenDefinition } from '../../../../services/navigation/screensDefinitions/ScreenDefinition'
import { useAppContext } from '../../../context/AppContext'

export const SignupScreen: React.FC = () => {
    const { navigator } = useAppContext()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 20 }}>Signup screen</Text>
            <Button title="Logearse" onPress={() => navigator.replace("Login")} />
        </View>
    );
}

export const SignupScreenDefinition: ScreenDefinition = {
    name: 'Signup',
    component: SignupScreen,
    visibility: ScreenVisibilities.Public,
    options: { headerShown: false }
}

