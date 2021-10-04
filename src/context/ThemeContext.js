import React,{createContext,useState} from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider =(props)=>{
     const [color, setColor] = useState({bgColor:"orange",textColor:"#333"})
    return(
        <ThemeContext.Provider value={{color}}>
{props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider