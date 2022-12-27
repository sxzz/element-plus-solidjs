import { createContext, splitProps } from 'solid-js'
import { useNamespace } from '../composables'
import type { Component, ComponentProps } from 'solid-js'
import type { RadioProps } from './radio'

type RadioGroupProps = Omit<RadioProps, 'label'>

export const RadioGroupContext = createContext<RadioGroupProps>()

export const ElRadioGroup: Component<
  RadioGroupProps & ComponentProps<'div'>
> = (props) => {
  const [selfProps, restProps] = splitProps(props, ['size', 'setValue', 'value', 'onChange'])
  const ns = useNamespace('radio')
  return (
    <RadioGroupContext.Provider value={selfProps}>
      <div class={ns().b('group')} {...restProps} />
    </RadioGroupContext.Provider>
  )
}
