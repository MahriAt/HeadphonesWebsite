import dark from './assets/moon.webp'
import bright from './assets/sun.webp'
import Button from './Button'
import { useState, useEffect } from 'react';

function Themes(){
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return <>
        <div id='theme' data-theme={theme}>
            <Button onClick={() => setTheme('dark')}><img src={dark} alt="Dark Theme" /></Button>
            <Button onClick={() => setTheme('light')}><img src={bright} alt="Bright Theme" /></Button>
        </div>
    </>
}
export default Themes;