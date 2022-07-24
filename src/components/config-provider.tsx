import {
  Accessor,
  createContext,
  createMemo,
  ParentComponent,
  splitProps,
} from 'solid-js'
import { useGlobalConfig } from '../composables'
import { ComponentSize } from '../constants'

export interface ConfigProviderProps {
  size?: ComponentSize
  button?: ButtonConfigContext
  namespace?: string
}

export interface ButtonConfigContext {
  autoInsertSpace?: boolean
}

export const ConfigContext = createContext<Accessor<ConfigProviderProps>>()

export const ConfigProvider: ParentComponent<ConfigProviderProps> = (props) => {
  const globalConfig = useGlobalConfig()
  const [, config] = splitProps(props, ['children'])
  const cfg = createMemo(() => ({ ...globalConfig?.(), ...config }))

  return (
    <ConfigContext.Provider value={cfg}>
      {props.children}
    </ConfigContext.Provider>
  )
}
