import { useObservable } from './useObservable'
import { ObservableProperty } from './ObservableProperty'

export function useObservableProperty<T>(property: ObservableProperty<T>): T {
    return useObservable(property.changed, property.value)
}
