import React from 'react'
import S from './header.module.css'

const Header = () => {
	return (
		<header className={S.header}>

			<div className={S.container}>

				<article>
					<p className={S.textoUm}>uma seleção especial de produtos</p>
					<h3 className={S.textoTres}>especial para você</h3>
				</article>

				<p className={S.textoDois}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>

				<div className={S.botoes}>
					<button className={S.btn}>Conheça a Linx</button>
					<button className={S.btn}>Ajude o algorítmo</button>
					<button className={S.btn}>Seus produtos</button>
					<button className={S.btn}>Compartilhe</button>
				</div>
			</div>
			<div className={S.triangulo}></div>
		</header>
	)
}

export default Header