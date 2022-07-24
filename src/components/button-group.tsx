import { Component, ComponentProps, createContext, splitProps } from 'solid-js'
import { useNamespace } from '../composables'
import { ComponentSize } from '../constants'
import { ButtonType } from './button'

export type ButtonGroupProps = {
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
      <div class={ns.b('group')} {...restProps} />
    </ButtonGroupContext.Provider>
  )
}
