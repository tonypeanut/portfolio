import { Link } from 'react-router-dom'

import Navigation from "./Navigation";
import MenuDesplegable from "./MenuDesplegable";
import RedesSociales from "./RedesSociales";
import LanguageSelector from '../hook/LanguageSelector';
import ThemeToggle from './ThemeToggle';

import logoSVG from "../assets/icons/logo.svg";

import { useTheme } from '../context/ThemeProvider';

const Header = () => {
    const { theme } = useTheme();

    return (
        <div>
            <div className={`justify-between flex fixed w-full theme-${theme}:bg-${theme}-color-5 theme-${theme}:text-${theme}-text-2`}>
                <div className=" text-center">
                    <Link to="/" className='flex cellphone:flex'>
                        <img src={logoSVG} alt="logo" width="25px" />
                        <h1 className="text-xl font-bold">TonyPeanut</h1>
                    </Link>
                    <RedesSociales/>
                </div>

                
                <div className="justify-center hidden tablet:flex">
                    <Navigation/>
                </div>

                <div className=" tablet:hidden cellphone:flex h-16 w-24 text-center">
                    <MenuDesplegable/>
                </div>

            </div>

            <div>
                <LanguageSelector/>
            </div>

            <div>
                <ThemeToggle />
            </div>
        </div>
        
    )
}

export default Header