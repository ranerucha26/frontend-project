import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToTop = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
}

export const useScrollToTopOnRouteChange = () => {
  const location = useLocation()
  
  useEffect(() => {
    // Scroll to top whenever location changes (route changes)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
}

export const useScrollToTopOnHashChange = () => {
  useEffect(() => {
    const handleHashChange = () => {
      // Scroll to top immediately when hash changes
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    // Also scroll to top on initial load if hash exists
    if (window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
}
