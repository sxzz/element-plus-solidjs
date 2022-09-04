import { createContext, splitProps } from 'solid-js'
import { useNamespace } from '../composables'
import type { Component, ComponentProps } from 'solid-js'
import type { ComponentSize } from '../constants'
import type { ButtonType } from './button'

export interface ButtonGroupProps {
  size?: ComponentSize
  type?: ButtonType
}

export const ButtonGroupContext = createContext<ButtonGroupProps>()

export const ElButtonGroup: Component<
  ButtonGroupProps & ComponentProps<'div'>
> = (props) => {
  const [selfProps, restProps] = splitProps(props, ['size', 'type'])
  const ns = useNamespace('button')
  return (
    <ButtonGroupContext.Provider value={selfProps}>
      <div class={ns().b('group')} {...restProps} />
    </ButtonGroupContext.Provider>
  )
}
