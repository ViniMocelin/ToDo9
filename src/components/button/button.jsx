import React from 'react'
import Style from './button.module.css'

function Button(props) {
  return (
    <button style={{backgroundColor: `${props.cor}`}}>{props.texto}</button>

    
  )
}

export default Button