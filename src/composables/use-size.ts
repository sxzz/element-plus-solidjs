import { Accessor, createMemo } from 'solid-js'
import { ComponentSize } from '../constants'
import { useGlobalConfig } from './use-global-config'

export const useSize = (size?: Accessor<ComponentSize | undefined>) => {
  const globalConfig = useGlobalConfig()
  return createMemo(() => size?.() || globalConfig.size)
}
