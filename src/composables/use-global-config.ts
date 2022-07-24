import { useContext } from 'solid-js'
import { ConfigContext } from '../components'

export const useGlobalConfig = () => useContext(ConfigContext)
