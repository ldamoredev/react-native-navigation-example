import { TabsLayout } from './TabsLayout'
import { ScreenDefinition } from '../screensDefinitions/ScreenDefinition'

export const MainLayout = (screens: ScreenDefinition[]) => {
    const tabsLayout = new TabsLayout([{ name: 'Home' }, { name: 'Settings' }])
    return tabsLayout.render(screens, 'Home')
}
