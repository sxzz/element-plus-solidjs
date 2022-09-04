import { createMemo } from 'solid-js'
import { createNamespace } from '../utils'
import { useGlobalConfig } from './use-global-config'

export const defaultNamespace = 'el'

export const useNamespace = (block: string) => {
  const globalConfig = useGlobalConfig()
  const namespace = createMemo(
    () => globalConfig?.().namespace || defaultNamespace
  )
  return createMemo(() => createNamespace(namespace(), block))
}
