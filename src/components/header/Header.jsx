import Logo from '../../assets/logo.svg'
import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<img className={css.logo} src={Logo} alt='' />
			<h1 className={css.title}>Wild Kaban-Boar</h1>
			<p className={css.sprint}>Личный кабинет</p>
		</header>
	)
}

export default Header
