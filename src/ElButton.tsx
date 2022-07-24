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
  // plain?:boolean
} & Omit<ComponentProps<'button'>, 'type'>

export const ElButton: Component<ButtonProps> = (props) => {
  const classList = createMemo(() => {
    return classnames([
      'el-button',
      props.type ? `el-button--${props.type}` : '',
      props.size ? `el-button--${props.size}` : '',
    ])
    // ns.b(),
    // ns.m(_type),
    // ns.m(_size),
    // ns.is('disabled', _disabled),
    // ns.is('loading', loading),
    // ns.is('plain', plain),
    // ns.is('round', round),
    // ns.is('circle', circle),
    // ns.is('text', text),
    // ns.is('link', link),
    //   ns.is('has-bg', bg),
  })

  return <button class={classList()}>{props.children}</button>
}
