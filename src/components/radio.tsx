import classNames from 'classnames'
import { createMemo, splitProps, useContext } from 'solid-js'
import { useNamespace, useSize } from '../composables'
import { RadioGroupContext } from './radio-group'
import type { ComponentSize } from '../constants'
import type { Component, ComponentProps, Setter } from 'solid-js'

export interface RadioProps {
  label: string | number | boolean
  setValue?: Setter<string | number | boolean>
  value?: string | number | boolean
  name?: string
  size?: ComponentSize
  disabled?: boolean
  bordered?: boolean
  onChange?: (e: Event) => void
}

export const ElRadio: Component<
  RadioProps & Omit<ComponentProps<'input'>, 'radio'>
> = (props) => {
  const [, restProps] = splitProps(props, [
    'value',
    'label',
    'size',
    'disabled',
    'name',
    'bordered',
    'onChange',
  ])

  const ns = useNamespace('radio')
  const radioGroupContext = useContext(RadioGroupContext)

  const size = useSize(createMemo(() => props?.size || radioGroupContext?.size))

  const labelClassList = createMemo(() => {
    return classNames([
      ns().b(),
      ns().m(size()),
      ns().is('disabled', props.disabled),
      ns().is('bordered', props.bordered),
      ns().is(
        'checked',
        (props?.value || radioGroupContext?.value) === props.label
      ),
    ])
  })
  const inputClassList = createMemo(() => {
    return classNames([
      ns().e('input'),
      ns().is('disabled', props.disabled),
      ns().is(
        'checked',
        (props?.value || radioGroupContext?.value) === props.label
      ),
    ])
  })

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    if (target.checked) {
      props.setValue?.(props.label) ||
        radioGroupContext?.setValue?.(props.label)
      props.onChange?.(e)
    }
  }
  return (
    <label class={labelClassList()} onChange={handleChange}>
      <span class={inputClassList()}>
        <input
          {...restProps}
          type="radio"
          checked={props.label === (props.value || radioGroupContext?.value)}
          class={ns().e('original')}
          name={props?.name || radioGroupContext?.name}
        />
        <span class={ns().e('inner')}></span>
      </span>
      <span class={ns().e('label')}>{props.children ?? props.label}</span>
    </label>
  )
}
