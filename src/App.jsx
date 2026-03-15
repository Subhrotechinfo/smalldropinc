import { useState, useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Blog from './components/Blog'
import LatestWork from './components/LatestWork'
import WebDesign from './components/WebDesign'
import WebDevelopment from './components/WebDevelopment'

function getPage() {
  const hash = window.location.hash
  if (hash === '#/about') return 'about'
  if (hash === '#/blog') return 'blog'
  if (hash === '#/work') return 'work'
  if (hash === '#/web-design') return 'web-design'
  if (hash === '#/web-development') return 'web-development'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHash = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <Cursor />
      <Navbar page={page} />
      {page === 'about'           && <><AboutUs /><Footer /></>}
      {page === 'blog'            && <><Blog /><Footer /></>}
      {page === 'work'            && <><LatestWork /><Footer /></>}
      {page === 'web-design'      && <><WebDesign /><Footer /></>}
      {page === 'web-development' && <><WebDevelopment /><Footer /></>}
      {page === 'home'  && (
        <>
          <Hero />
          <Marquee />
          <Work />
          <Services />
          <Clients />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}
