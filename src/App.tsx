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
  const [disabled, setDisabled] = createSignal(false)
  const [text, setText] = createSignal(false)
  const [round, setRound] = createSignal(false)
  const [plain, setPlain] = createSignal(false)

  return (
    <div>
      <div>
        <ElButton
          size={size()}
          type={type()}
          disabled={disabled()}
          text={text()}
          round={round()}
          plain={plain()}
        >
          按钮
        </ElButton>
      </div>
      <div>
        Size:
        <Index each={[...buttonSizes].sort()}>
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
        <Index each={[...buttonTypes].sort()}>
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
      <div>
        <label>
          <input
            type="checkbox"
            checked={disabled()}
            onChange={(e) => setDisabled(e.currentTarget.checked)}
          />
          disabled
        </label>

        <label>
          <input
            type="checkbox"
            checked={text()}
            onChange={(e) => setText(e.currentTarget.checked)}
          />
          text
        </label>

        <label>
          <input
            type="checkbox"
            checked={round()}
            onChange={(e) => setRound(e.currentTarget.checked)}
          />
          round
        </label>

        <label>
          <input
            type="checkbox"
            checked={plain()}
            onChange={(e) => setPlain(e.currentTarget.checked)}
          />
          plain
        </label>
      </div>
      <hr />
      Powered by solid-js.
    </div>
  )
}

export default App
