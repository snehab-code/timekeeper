import { useState, useEffect } from 'react'

const ThemeToggler = () => {
    // const icons = ['🌙', '☀️']

    const [isDark, setIsDark] = useState(false)
    const DARK_CLASS = 'dark'
    // const [mQuery, setMQuery] = useState('dark')

    useEffect(() => {
        console.log('hi')
        let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        // console.log(mediaQuery, mediaQuery.matches)
        mediaQuery.addEventListener('change', (e) => {
            // setMQuery(e.matches ? 'dark' : 'light')
            setIsDark(mediaQuery.matches ? true : false)
        })

        // setMQuery(mediaQuery.matches ? "dark" : "light")
        setIsDark(mediaQuery.matches ? true : false)
    }, [])

    useEffect(() => {
        console.log('hi')
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
        }
    }, [isDark])

    return (
        <button
            className="theme-toggle"
            style={{
                backgroundColor: 'transparent',
                width: '40px',
                position: 'absolute',
                right: '0px',
                textAlign: 'center',
                fontSize: '25px',
                color: isDark ? 'white' : 'black',
                height: '40px',
                border: 'none',
            }}
            onClick={() => setIsDark(!isDark)}
        >
            {isDark ? '☼' : '☽'}
        </button>
    )
}

export default ThemeToggler
