import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenDefinition } from './screensDefinitions/ScreenDefinition'
import * as React from 'react'
import { FC, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Context } from '../context/Context'
import { MainLayout } from './layout/MainLayout'
import { ScreenTypes } from './screensDefinitions/ScreenTypes'
import { ScreenVisibilities } from './screensDefinitions/ScreenVisibilities'
import { useObservableProperty } from '../utils/useObservableProperty'
import { useObservable } from '../utils/useObservable'
import { AnonymousIdentity } from '../auth/identity/AnonymousIdentity'

const Stack = createNativeStackNavigator()

const INITIALIZATION_APP_SCREEN_NAME = "InitializationApp"

export const AppNavigation: FC<Props> = ({ context }) => {
    if (!context) return <>{context.screens.find(s => s.name === INITIALIZATION_APP_SCREEN_NAME).component}</>
    const navigator = context.navigator
    const isAuthenticated = useObservableProperty(context.authenticator.authenticated)
    const identity = useObservable(context.authenticator.identity, new AnonymousIdentity())
    console.log('identity', identity.name, identity.isAuthenticated)
    const screens = getScreens(context, identity.isAuthenticated)
    const routeNameRef = useRef<string>()

    return (
        <NavigationContainer
            ref={navigator.ref}
            onReady={() => {
                routeNameRef.current = navigator.currentRoute.path
            }}
            onStateChange={() => {
                const previousRouteName = routeNameRef.current
                const currentRouteName = navigator.currentRoute.path
                if (previousRouteName !== currentRouteName) {
                    routeNameRef.current = currentRouteName
                }
            }}
        >
            <Stack.Navigator>
                { identity.isAuthenticated && <Stack.Screen name="Main" component={MainLayout} options={{headerShown: false, gestureEnabled: false}}/> }
                {screens.map(toScreen)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function getScreens(context: Context, isAuthenticated: boolean) {
    console.log('getScreens', isAuthenticated)
    const initialScreen = getInitialScreen(context.screens, isAuthenticated)
    const screens = getScreensByVisibility(context.screens, visibilityFor(isAuthenticated))
        .filter(s =>
            s.type === ScreenTypes.Regular &&
            !isMainLayoutScreen(s.name) &&
            s.name !== initialScreen.name &&
            s.name !== INITIALIZATION_APP_SCREEN_NAME
        )
    return [initialScreen, ...screens].filter(it => it !== null)
}

function isMainLayoutScreen(name: string) {
    return name == "Main"
}

function getScreensByVisibility(screens: ScreenDefinition[], visibility: ScreenVisibilities) {
    return screens.filter(r => r.visibility === visibility)
}

function visibilityFor(isAuthenticated: boolean): ScreenVisibilities {
    return isAuthenticated ? ScreenVisibilities.Private : ScreenVisibilities.Public
}

function getInitialScreen(screens: ScreenDefinition[], isAuthenticated: boolean): ScreenDefinition {
    const screensWithoutLayout = screens.filter(s => !isMainLayoutScreen(s.name))
    const initialPublicScreen = screensWithoutLayout.filter(s => s.name === 'Login')[0]
    const initialPrivateScreen = screensWithoutLayout.filter(s => s.name === 'Home')[0]
    return isAuthenticated ? initialPrivateScreen : initialPublicScreen
}

const toScreen = (definition: ScreenDefinition) => {
    console.log(definition)
    return (
        <Stack.Screen
            key={definition.name}
            name={definition.name}
            component={definition.component}
            options={{title: definition.title ?? '', ...definition.options}}
        />
    )
}

interface Props {
    context: Context
}
