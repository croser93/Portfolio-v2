import './App.css'
import Navbar from './feature/shared/navbar.js'
import HeroComponent from './feature/components/hero_component/hero_component.js'
import About_me_component from './feature/components/about_me_component/about_me_component.js'

function App() {
  return(
  <main>
    <Navbar />
    <HeroComponent />
    <About_me_component />

  </main>
  )
}

export default App
