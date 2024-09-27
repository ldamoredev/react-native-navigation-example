import React, { FC } from 'react'
import { AppContext } from './context/AppContext'
import { AppNavigation } from '../services/navigation/AppNavigation'
import { Context } from './context/Context'

export const RootView: FC<Props> = ({ context }) => {
    return (
        <AppContext.Provider value={context}>
            <AppNavigation context={context} />
        </AppContext.Provider>
    )
}

export interface Props {
    context: Context
}
