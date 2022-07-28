import { useState } from 'react'
import  Header from './components/header/header'
import Footer from './components/footer/footer'
import Products from './components/products/products'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p> oie </p>
      <Header />
      <Footer />
     <Products />
      
    </div>
  )
}

export default App
