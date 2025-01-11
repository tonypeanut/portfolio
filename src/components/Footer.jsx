import RedesSociales from "./RedesSociales";
import { useTheme } from '../context/ThemeProvider';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`text-black text-center py-3 theme-${theme}:bg-${theme}-color-5`}>
        <h1 className="text-xs text-black">Antonio Valdez Aguayo</h1>
        <RedesSociales />
    </footer>
  )
}

export default Footer