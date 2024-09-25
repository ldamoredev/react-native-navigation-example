import React from 'react'
import { TabItem } from './TabItem'
import { TabsView } from './TabsView'
import { ScreenDefinition } from '../screensDefinitions/ScreenDefinition'

export class TabsLayout {
    constructor(private tabItems: TabItem[]) {}

    getScreenNames(): string[] {
        return this.tabItems.map(it => it.name)
    }

    private getScreenDefinition(item: TabItem, screens: ScreenDefinition[]): ScreenDefinition {
        return screens.find(it => it.name === item.name)
    }

    render(screens: ScreenDefinition[], initialPath: string): React.ReactElement {
        const overriddenScreens = this.tabItems
            .map(item => ({ ...this.getScreenDefinition(item, screens), ...item }))
        return <TabsView screens={overriddenScreens} initialRouteName={initialPath} />
    }
}
