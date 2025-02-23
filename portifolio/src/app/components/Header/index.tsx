'use client'
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {

    const [theme, setTheme] = useState("light");

    const toggleThemer = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <header className={" flex justify-center dark:bg-black bg-cyberTech-hard_blue"}>
            <h1 className='text-center'>Olá Mundo</h1>
            <button className='bg-cyberTech-soft_blue text-cyberTech-hard_blue' onClick={toggleThemer}>
                {theme === 'light' ? "Mudar para Dark" : "Mudar para Light"}
            </button>
        </header>
    )
}