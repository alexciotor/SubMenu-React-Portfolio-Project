import React,{useState, useContext} from 'react'
import sublinks from '../modules/data'
import { SideBar } from './sidebar'
const AppContext = React.createContext()
export const Context = ({children})=>{
  const [Sidebar, setSidebar] = useState (true)
 
 const openSideBar = ()=>{
   setSidebar(true)
 
}
const closeSidebar = ()=>{
  setSidebar(false)
}

  return <AppContext.Provider value = {{openSideBar,closeSidebar,setSidebar,SideBar}}>
{children}

  </AppContext.Provider>

}

export const useGlobalContext = ()=>{
  return useContext(AppContext)
}