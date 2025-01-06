import { Link } from 'react-router-dom'

import Navigation from "./Navigation";
import MenuDesplegable from "./MenuDesplegable";
import RedesSociales from "./RedesSociales";
import LanguageSelector from '../hook/LanguageSelector';

import logoSVG from "../assets/icons/logo.svg";

const Header = () => {
  return (
    <div>
        <div className="bg-gray-500 text-white justify-between flex">
            <div className=" text-center">
                <Link to="/" className='flex cellphone:flex'>
                    <img src={logoSVG} alt="logo" width="25px" />
                    <h1 className="  text-xl font-bold">TonyPeanut</h1>
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
    </div>
    
  )
}

export default Header