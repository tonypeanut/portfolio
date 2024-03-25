import { Link } from 'react-router-dom'

import Navigation from "./Navigation";
import MenuDesplegable from "./MenuDesplegable";
import RedesSociales from "./RedesSociales";

const Header = () => {
  return (

    <div className="bg-gray-500 text-white justify-between items-center tablet:flex">
        <div className=" text-center">
            <h1 className="  text-xl font-bold tablet:ml-5"><Link to="/">TonyPeanut</Link></h1>
            <RedesSociales/>
        </div>
        
        <div className="justify-center hidden tablet:flex">
            <Navigation/>
        </div>

        <div className=" tablet:hidden cellphone:flex">
            <MenuDesplegable/>
        </div>

    </div>
  )
}

export default Header

