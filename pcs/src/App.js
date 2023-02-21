import React from 'react'
import Login from './Login'
import Main from './Main'
import AppHeader from './Components/AppHeader/'
import PageContent from './Components/PageContent/'
import SideMenu from './Components/SideMenu/'
import AppFooter from './Components/AppFooter/'
import './App.css'
const App = () => {
  return (
    <>
    <div className='App'>
    <AppHeader />
    <div className='SideMenuAndPageContent'>
      <SideMenu />
      <PageContent />
    </div>
   <AppFooter />
   </div>
    </>
    
  )
}
export default App;