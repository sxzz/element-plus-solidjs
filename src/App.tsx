import { Component, createSignal, For, Index } from 'solid-js'
import {
  ButtonSize,
  buttonSizes,
  ButtonType,
  buttonTypes,
  ElButton,
} from './ElButton'

const App: Component = () => {
  const [size, setSize] = createSignal<ButtonSize>('')
  const [type, setType] = createSignal<ButtonType>('')

  return (
    <div>
      <div>
        <ElButton size={size()} type={type()}>
          按钮
        </ElButton>
      </div>
      <div>
        Size:
        <Index each={buttonSizes}>
          {(item) => (
            <label>
              <input
                type="radio"
                checked={size() === item()}
                onChange={() => setSize(item())}
              />
              {item()}
            </label>
          )}
        </Index>
      </div>
      <div>
        Type:
        <Index each={buttonTypes}>
          {(item) => (
            <label>
              <input
                type="radio"
                checked={type() === item()}
                onChange={() => setType(item())}
              />
              {item()}
            </label>
          )}
        </Index>
      </div>
      <hr />
      Powered by solid-js.
    </div>
  )
}

export default App
