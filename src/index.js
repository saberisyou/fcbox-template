import React from 'react'
import ReactDOM from 'react-dom'
import { registerMicroApps, start } from 'qiankun'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

registerMicroApps([
  {
    name: 'react-child',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/react-child',
  },
  {
    name: 'vue-prev-child',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/vue-prev-child',
  },
  {
    name: 'vue-next-app',
    entry: '//localhost:4200',
    container: '#container',
    activeRule: '/vue-next-child',
  },
])

start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
