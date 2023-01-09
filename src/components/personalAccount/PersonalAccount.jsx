import React, { useState } from "react"
import css from '../header/Header.module.css'
import ArrowDown from '../../assets/ArrowDown.svg'
import ArrowUp from '../../assets/ArrowUp.svg'
import UserPhoto from '../../assets/Photo.svg'


function PersonalAccount() {


    return (<>
    <button className={css.PersonalAccount}>
        <div className={css.PersonalAccountPhoto}>
            <img className={css.UserPhoto} src={UserPhoto} alt='' />
        </div>
        <div className={css.arrow}>
            <span>
                <img className={css.ArrowDown} src={ArrowDown} alt='' />
                {/* <img className={css.ArrowUp} src={ArrowUp} alt='' /> */}
            </span>
        </div>
    </button>
    </>
    )
}

export default PersonalAccount