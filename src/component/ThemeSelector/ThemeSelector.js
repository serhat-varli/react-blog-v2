
import { useTheme } from '../../hooks/useTheme'
import './ThemeSelector.scss'
import modeIcon from '../../assets/img/mode.svg';

const themeColors = ['#778beb', '#cf6a87', '#f8a5c2', '#e77f67', '#000']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)
  return (
    <div className="theme-selector container d-flex align-items-center align-content-between justify-content-center mt-20 ">
      <div className='mode-toggle'>
        <img onClick={toggleMode} src={modeIcon} alt="" style={{ filter: mode === "dark" ? 'invert(100%)' : 'invert(20%)' }} />
      </div>
      <div className="theme-buttons align-content-end  d-flex">
        {themeColors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
