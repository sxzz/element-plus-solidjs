import { createContext, ParentComponent } from 'solid-js'
import { ComponentSize } from '../constants'

export interface ConfigProviderProps {
  size?: ComponentSize
}

export const ConfigContext = createContext<ConfigProviderProps>({})

export const ConfigProvider: ParentComponent<ConfigProviderProps> = (props) => (
  <ConfigContext.Provider value={props} children={props.children} />
)
