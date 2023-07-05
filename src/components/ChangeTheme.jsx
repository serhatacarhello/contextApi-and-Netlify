import {useTheme} from '../context/ThemeContext'

export const ChangeTheme = () => {
    // const data = useContext(ThemeContext) // get the value data from ThemeContext
    const {theme,toggleTheme} = useTheme() // get the value data from ThemeContext

  return (
    <div>ChangeTheme component
        <p>Active Theme:{theme} </p>
        <button onClick={()=>toggleTheme()} >Change Theme</button>
    </div>
  )
}
