import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import '../components/Home.css'

export default function Home() {
    const theme= useContext (ThemeContext);
    console.log(theme);

    return (
        <div className= {`panel-${theme} text-center py-5`}>   
            <h2 className='title'>Hello world</h2>

        </div>
    )
}