import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenDefinition } from './screensDefinitions/ScreenDefinition'
import * as React from 'react'
import { FC, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Context } from '../context/Context'
import { ActivityIndicator, View } from 'react-native'

const Stack = createNativeStackNavigator()

export const AppNavigation: FC<Props> = ({ context }) => {
    if (!context) return <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator  />
    </View>
    const navigator = context.navigator
    const screens = context.screens
    const routeNameRef = useRef<string>()

    return (
        <NavigationContainer
            ref={navigator.ref}
            onReady={() => { routeNameRef.current = navigator.currentRoute.path }}
            onStateChange={() => {
                const previousRouteName = routeNameRef.current
                const currentRouteName = navigator.currentRoute.path
                if (previousRouteName !== currentRouteName) {
                    routeNameRef.current = currentRouteName
                }
            }}
        >
            <Stack.Navigator>
                <Stack.Screen name="Main" component={context.layout} options={{ headerShown: false, gestureEnabled: false }} />
                {screens.map(toScreen)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const toScreen = (definition: ScreenDefinition) => (
    <Stack.Screen
        key={definition.name}
        name={definition.name}
        component={definition.component}
        options={{ title: definition.title ?? '', ...definition.options }}
    />
)

interface Props {
    context: Context
}
