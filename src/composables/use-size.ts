import { createMemo } from 'solid-js'
import { useGlobalConfig } from './use-global-config'
import type { Accessor } from 'solid-js'
import type { ComponentSize } from '../constants'

export const useSize = (size?: Accessor<ComponentSize | undefined>) => {
  const globalConfig = useGlobalConfig()
  return createMemo(() => size?.() || globalConfig?.().size)
}
