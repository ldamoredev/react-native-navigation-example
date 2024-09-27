import { TabsLayout } from './TabsLayout'
import { useAppContext } from '../../../ui/context/AppContext'

export const MainLayout = () => {
    const { screens } = useAppContext()
    const tabsLayout = new TabsLayout([{ name: 'Home' }, { name: 'Settings' }])
    return tabsLayout.render(screens, 'Home')
}
