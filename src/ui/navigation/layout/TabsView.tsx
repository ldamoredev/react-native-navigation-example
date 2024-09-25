import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScreenDefinition } from '../screensDefinitions/ScreenDefinition'

const Tabs = createBottomTabNavigator()

export const TabsView: FC<Props> = ({ screens, initialRouteName }) => {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName} >
            {screens.map(toScreen)}
        </Tabs.Navigator>
    )
}

interface Props {
    screens: ScreenDefinition[]
    initialRouteName: string
}

const toScreen = (definition: ScreenDefinition) => (
    <Tabs.Screen
        key={definition.name}
        name={definition.name}
        component={definition.component}
        options={{ title: definition.title ?? '', ...(definition.options as any) }}
    />
)
