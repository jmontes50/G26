import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Cambiar Tema { isDark ? "claro": "oscuro" }
      </button>
    </div>
  )
}

export default Navbar