import { Index, createSignal } from 'solid-js'
import { ConfigProvider, ElButton, ElButtonGroup, ElCard } from './components'
import { componentSizes } from './constants'
import type { ButtonType } from './components/button'
import type { ComponentSize } from './constants'
import type { Component } from 'solid-js'

const App: Component = () => {
  const [namespace, setNamespace] = createSignal('el')

  const [size, setSize] = createSignal<ComponentSize>('default')
  const [type, setType] = createSignal<ButtonType>('default')
  const [disabled, setDisabled] = createSignal(false)
  const [text, setText] = createSignal(false)
  const [round, setRound] = createSignal(false)
  const [plain, setPlain] = createSignal(false)
  const [insertSpace, setInsertSpace] = createSignal<true | undefined>(
    undefined
  )
  const [title, setTitle] = createSignal('按钮')

  const handleClick = () => {
    setTitle('点击了按钮')
    setTimeout(() => setTitle('按钮'), 2000)
  }

  return (
    <>
      <ConfigProvider
        namespace={namespace()}
        button={{ autoInsertSpace: true }}
      >
        <div>
          <input
            value={namespace()}
            onInput={(e) => setNamespace(e.currentTarget.value)}
          />
        </div>

        <ConfigProvider size="small">
          <ElButtonGroup size={size()} type={type()}>
            <ElButton
              ref={(el) => console.log(el)}
              disabled={disabled()}
              text={text()}
              round={round()}
              plain={plain()}
              nativeType="button"
              autoInsertSpace={insertSpace()}
              onClick={handleClick}
            >
              {title()}
            </ElButton>
            <ElButton
              disabled={disabled()}
              text={text()}
              round={round()}
              plain={plain()}
              nativeType="button"
              autoInsertSpace={insertSpace()}
              onClick={handleClick}
            >
              {title()}
            </ElButton>
          </ElButtonGroup>
          <div>
            Size:
            <Index each={componentSizes}>
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
            <Index
              each={
                [
                  '',
                  'text',
                  'default',
                  'primary',
                  'success',
                  'warning',
                  'info',
                  'danger',
                ] as const
              }
            >
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

            <label>
              <input
                type="checkbox"
                checked={insertSpace()}
                onChange={(e) =>
                  setInsertSpace(e.currentTarget.checked ? true : undefined)
                }
              />
              autoInsertSpace
            </label>
          </div>
        </ConfigProvider>
      </ConfigProvider>
      <hr />
      <ElCard header="This is title.">Hello Card.</ElCard>
      <ElCard header={<b>Title</b>}>Hello Card.</ElCard>
      <hr />
      Powered by <a href="https://www.solidjs.com/">SolidJS</a>.
    </>
  )
}

export default App
