import './App.css'
import Navbar from './feature/shared/navbar.js'
import HeroComponent from './feature/components/hero_component/hero_component.js'
import AboutMeComponent from './feature/components/about_me_component/about_me_component.js'
import SkillsComponent from './feature/components/skills_component/skills_component.js'
import ProjectsComponent from './feature/components/projects_component/projects_component.js'
import CommentsComponent from './feature/components/comments_component/comments_component.js'
import ContactComponent from './feature/components/contact_component/contact_component.js'

import { Routes, Route, Navigate } from 'react-router-dom'
import LegalNotice from './feature/pages/legal_notice.js'

function PortfolioPage() {
  return(
  <main>
    <HeroComponent />
    <AboutMeComponent />
    <SkillsComponent />
    <ProjectsComponent />
    <CommentsComponent />
    <ContactComponent />
  </main>
  )
}

function App() {
  return (
    <>
      <Navbar />  {/* Navbar immer sichtbar */}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
