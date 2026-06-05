import './App.css'
import Navbar from './feature/shared/navbar.js'
import HeroComponent from './feature/components/hero_component/hero_component.js'
import AboutMeComponent from './feature/components/about_me_component/about_me_component.js'
import SkillsComponent from './feature/components/skills_component/skills_component.js'
import ProjectsComponent from './feature/components/projects_component/projects_component.js'
import ProjectsDialog from './feature/components/projects_component/projects_Dialog.js'

function App() {
  return(
  <main>
    <Navbar />
    <HeroComponent />
    <AboutMeComponent />
    <SkillsComponent />
    <ProjectsComponent />
    <ProjectsDialog />

  </main>
  )
}

export default App
