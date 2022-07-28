import { useState } from 'react'
import  Header from './components/header/header'
import Form from './components/form/form'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p> oie </p>
      <Header />
      <Form />
      <Footer />
      
    </div>
  )
}

export default App
