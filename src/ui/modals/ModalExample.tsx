import React from 'react'
import { NavigationProps } from '../../services/navigation/navigator/NavigationProps'
import { Dialog } from './Dialog'
import { Text } from 'react-native'
import { ScreenDefinition } from '../../services/navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../../services/navigation/screensDefinitions/ScreenVisibilities'

export const ModalExample: React.FC<NavigationProps> = (props) => {
    const close = () => {
        props.navigation.goBack()
    }
    return <Dialog onClose={close}>
        <Text>Hola petes</Text>
    </Dialog>
}

export const ModalExampleDefinition: ScreenDefinition = {
    name: 'ModalExample',
    component: ModalExample,
    visibility: ScreenVisibilities.Always,
    options: { gestureEnabled: false },
}
