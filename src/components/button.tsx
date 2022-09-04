import { createMemo, splitProps, useContext } from 'solid-js'
import classnames from 'classnames'
import { useGlobalConfig, useNamespace, useSize } from '../composables'
import { ButtonGroupContext } from './button-group'
import type { ComponentSize } from '../constants'
import type { Component, ComponentProps } from 'solid-js'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const
export type ButtonType = typeof buttonTypes[number]

export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export type ButtonProps = {
  size?: ComponentSize
  type?: ButtonType
  disabled?: boolean
  plain?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
  text?: boolean
  link?: boolean
  bg?: boolean
  autoInsertSpace?: boolean
  nativeType?: ComponentProps<'button'>['type']
}

export const ElButton: Component<
  ButtonProps & Omit<ComponentProps<'button'>, 'type'>
> = (props) => {
  const [, restProps] = splitProps(props, [
    'size',
    'type',
    'disabled',
    'plain',
    'loading',
    'round',
    'circle',
    'text',
    'link',
    'bg',
    'autoInsertSpace',
    'nativeType',
  ])
  const ns = useNamespace('button')
  const globalConfig = useGlobalConfig()
  const buttonGroupContext = useContext(ButtonGroupContext)

  // eslint-disable-next-line unicorn/explicit-length-check
  const size = useSize(createMemo(() => props.size || buttonGroupContext?.size))
  const type = createMemo(() => props.type || buttonGroupContext?.type || '')
  const autoInsertSpace = createMemo(
    () =>
      props.autoInsertSpace ?? globalConfig?.().button?.autoInsertSpace ?? false
  )

  const classList = createMemo(() => {
    return classnames([
      ns().b(),
      ns().m(type()),
      ns().m(size()),
      ns().is('disabled', props.disabled),
      ns().is('loading', props.loading),
      ns().is('plain', props.plain),
      ns().is('round', props.round),
      ns().is('circle', props.circle),
      ns().is('text', props.text),
      ns().is('link', props.link),
      ns().is('has-bg', props.bg),
    ])
  })

  const shouldAddSpace = createMemo(() => {
    if (!autoInsertSpace()) return false
    if (typeof props.children !== 'string') return false
    return /^\p{Unified_Ideograph}{2}$/u.test(props.children.trim())
  })

  return (
    <button
      {...restProps}
      class={classList()}
      type={props.nativeType}
      aria-disabled={props.disabled || props.loading}
      disabled={props.disabled || props.loading}
    >
      <span classList={{ [ns().em('text', 'expand')]: shouldAddSpace() }}>
        {props.children}
      </span>
    </button>
  )
}
