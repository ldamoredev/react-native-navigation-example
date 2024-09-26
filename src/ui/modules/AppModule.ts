import { App } from '../../App'

export interface AppModule {
    initFor(app: App): void
}
