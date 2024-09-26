import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenDefinition } from './screensDefinitions/ScreenDefinition'
import * as React from 'react'
import { FC, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Context } from '../context/Context'
import { ActivityIndicator, View } from 'react-native'
import { InitializingAppScreen } from '../initialiazer/InitializationAppScreen'
import { TabsLayout } from './layout/TabsLayout'
import { MainLayout } from './layout/MainLayout'

const Stack = createNativeStackNavigator()

export const AppNavigation: FC<Props> = ({ context }) => {
    if (!context) return <>{context.screens.find(s => s.name === "InitializationApp").component}</>
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
                <Stack.Screen name="Main" component={MainLayout} options={{ headerShown: false, gestureEnabled: false }} />
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
