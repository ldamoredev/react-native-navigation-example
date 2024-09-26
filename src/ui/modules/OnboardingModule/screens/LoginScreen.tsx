import { Button, Text, View } from 'react-native'
import * as React from 'react'
import { ScreenVisibilities } from '../../../navigation/screensDefinitions/ScreenVisibilities'
import { ScreenDefinition } from '../../../navigation/screensDefinitions/ScreenDefinition'
import { useAppContext } from '../../../context/AppContext'

export const LoginScreen: React.FC = () => {
    const { navigator, authenticator } = useAppContext()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 20 }}>Login screen</Text>
            <Button title="Logeate" onPress={() => authenticator.login("lauti.damore@gmail.com", "12345678")} />
            <Text style={{ marginBottom: 20 }}>Si no tenes cuenta logeaten</Text>
            <Button title="Registrarse" onPress={() => navigator.replace("Signup")} />
        </View>
    );
}

export const LoginScreenDefinition: ScreenDefinition = {
    name: 'Login',
    component: LoginScreen,
    visibility: ScreenVisibilities.Public,
    options: { headerShown: false }
}

