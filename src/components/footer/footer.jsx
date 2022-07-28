import React from 'react'
import style from './footer.module.css'

const Footer = () => {
  const { footerStyle, triangulo } = style

  return (
    <footer className={footerStyle}>
      <div className={triangulo}>
      </div>

      <p style={{ color: 'white', textAlign: 'center' }}>Testando suas habilidades em HTML, CSS e JS.<br />
        Linx Impulse<br />
        2019
      </p>
    </footer>
  )
}

export default Footer