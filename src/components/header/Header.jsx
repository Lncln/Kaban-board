import Kaban from '../../assets/Kaban.png'
import css from './Header.module.css'
import PersonalAccount from '../personalAccount/PersonalAccount'

const Header = () => {
	return (
		<header className={css.header}>
			<img className={css.logo} src={Kaban} alt='' />
			<h1 className={css.title}>Wild Kaban-Boar</h1>
				{/* <p className={css.sprint}></p> */}
			<PersonalAccount />
		</header>
	)
}

export default Header
