/* @refresh reload */
import { render } from 'solid-js/web'
import '@element-plus/theme-chalk/dist/index.css'

import App from './App'

render(() => <App />, document.querySelector<HTMLElement>('#root')!)
