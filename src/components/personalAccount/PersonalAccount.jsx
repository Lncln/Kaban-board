import React from "react"
import css from '../header/Header.module.css'
import ArrowDown from '../../assets/ArrowDown.svg'
import ArrowUp from '../../assets/ArrowUp.svg'


function PersonalAccount() {


    return (<div className='PersonalAccount'>
        <div className='PersonalAccountPhoto'>
            
        </div>
        <span>
        <img className={css.ArrowDown} src={ArrowDown} alt='' />
        <img className={css.ArrowUp} src={ArrowUp} alt='' />
        </span>
    </div>
    )
}

export default PersonalAccount