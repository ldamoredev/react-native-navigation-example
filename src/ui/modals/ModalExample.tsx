import React from 'react'
import { NavigationProps } from '../navigation/navigator/NavigationProps'
import { Dialog } from './Dialog'
import { Text } from 'react-native'
import { ScreenDefinition } from '../navigation/screensDefinitions/ScreenDefinition'
import { ScreenVisibilities } from '../navigation/screensDefinitions/ScreenVisibilities'

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
