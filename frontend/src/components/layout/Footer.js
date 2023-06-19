import React, { useState, useEffect } from 'react';

import style from "./Footer.module.css"

const Footer = _ => {
    const [currentYear, setCurrentYear] = useState('');

    useEffect(_ => {
        const year = new Date().getFullYear()
        setCurrentYear(year.toString())
    }, [])

    return (
        <footer className={style.footer}>
            <p className={style.copy_right}>
                <span>Search-CEP</span> &copy;{currentYear}
            </p>
        </footer>
    )
}

export default Footer