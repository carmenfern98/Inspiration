import { useState } from 'react'
import { WeatherWidget } from './components/WeatherWidget'
import ToDoInput from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'
import { FinishedList } from './components/FinshedList'
import { QuoteWidget } from './components/QuoteWidget'
import { ImageWidget } from './components/ImageWidget'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ImageWidget>
      <div>
      <header>
      <WeatherWidget className='WeatherWidget'/>
      </header>
      </div>
      <ToDoInput className='TodoInput'/>
      <ToDoList className='TodoCards'/>
      <FinishedList className='Finishedcards'/>
      <QuoteWidget className='Quote'/>
    </ImageWidget>
  )
}

export default App
