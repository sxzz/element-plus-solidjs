import classnames from 'classnames'
import { Show, mergeProps } from 'solid-js'
import { useNamespace } from '../composables'
import type { Component, ComponentProps, JSX } from 'solid-js'

export type CardProps = {
  children?: JSX.Element
  header?: string | JSX.Element
  bodyStyle?: ComponentProps<'div'>['style']
  shadow?: 'always' | 'hover' | 'never'
}

export const ElCard: Component<CardProps> = (rawProps) => {
  const props = mergeProps({ shadow: 'always' }, rawProps)
  const ns = useNamespace('card')

  return (
    <div class={classnames([ns().b(), ns().is(`${props.shadow}-shadow`)])}>
      <Show when={props.header}>
        <div class={ns().e('header')}>{props.header}</div>
      </Show>
      <div class={ns().e('body')} style={props.bodyStyle}>
        {props.children}
      </div>
    </div>
  )
}
