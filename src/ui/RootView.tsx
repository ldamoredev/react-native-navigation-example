import React, { FC } from 'react'
import { AppContext } from './context/AppContext'
import { AppNavigation } from './navigation/AppNavigation'
import { ReactNavigator } from './navigation/navigator/ReactNavigator'
import { ScreenDefinition } from './navigation/screensDefinitions/ScreenDefinition'
import { HomeScreenDefinition } from './screens/HomeScreen'
import { SettingsScreenDefinition } from './screens/SettingsScreen'
import { DetailsScreenDefinition } from './screens/DetailsScreen'
import { TabsLayout } from './navigation/layout/TabsLayout'

export const RootView: FC = () => {
    const navigator = new ReactNavigator()

    const screens: ScreenDefinition[] = [HomeScreenDefinition, SettingsScreenDefinition, DetailsScreenDefinition]

    const Layout = () => {
        const tabsLayout = new TabsLayout([{ name: 'Home' }, { name: 'Settings' }])
        return tabsLayout.render(screens, 'Home')
    }

    const context = { navigator, screens, layout: Layout }
    return (
        <AppContext.Provider value={context}>
            <AppNavigation context={context} />
        </AppContext.Provider>
    )
}

