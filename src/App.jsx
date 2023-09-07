import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoodEveningComponent from './components/goodeveninggreetcomponent/GoodEveningComponent'
import GoodMorningComponent from './components/goodmorninggreetcomponent/GoodMorningComponent'
import CounterComponent from './components/CounterComponent/CounterComponent'
import CounterFunctionComponent from './components/CounterFunctionComponent/CounterFunctionComponent'

function App() {
  return (
    <React.Fragment>
      <CounterFunctionComponent/>
    </React.Fragment>
  )
}

export default App
