import { useState } from "react"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {

  const[darkMode,setDarkMode] =useState(false)
  const[isSidebarOpen,setIsSidebarOpen]=useState(false)
  
  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  const toggleIsSidebar=()=>{
    setIsSidebarOpen(!isSidebarOpen)

  }

  return (
    <>
    <div className={`${darkMode && 'dark'} font-quickSand`}>
        <Header 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        toggleIsSidebar={toggleIsSidebar}/>
        <Sidebar />
    </div>
    </>
  )
}

export default App
