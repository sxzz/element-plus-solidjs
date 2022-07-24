import { Component, ComponentProps, createMemo } from 'solid-js'
import classnames from 'classnames'

export const buttonSizes = ['', 'default', 'small', 'large'] as const
export type ButtonSize = typeof buttonSizes[number]

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
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
  plain?: boolean
  loading?: boolean
  round?: boolean
  circle?: boolean
  text?: boolean
  link?: boolean
  bg?: boolean
  nativeType?: ComponentProps<'button'>['type']
} & Omit<ComponentProps<'button'>, 'type'>

export const ElButton: Component<ButtonProps> = (props) => {
  const classList = createMemo(() => {
    return classnames(
      [
        'el-button',
        props.type ? `el-button--${props.type}` : '',
        props.size ? `el-button--${props.size}` : '',
      ],
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-plain': props.plain,
        'is-round': props.round,
        'is-circle': props.circle,
        'is-text': props.text,
        'is-link': props.link,
        'is-has-bg': props.bg,
      }
    )
  })

  return (
    <button
      {...props}
      class={classList()}
      type={props.nativeType}
      aria-disabled={props.disabled || props.loading}
      disabled={props.disabled || props.loading}
    >
      {props.children}
    </button>
  )
}
