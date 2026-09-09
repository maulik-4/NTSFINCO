  import { useEffect, useState } from 'react'
  import { useLocation } from 'react-router-dom'
  import { AnimatePresence, motion } from 'framer-motion'
  import AppRoutes from './routes/AppRoutes.jsx'
  import { PageLoader, SiteLayout } from './components/SiteLayout.jsx'

  function AppTransition() {
    const location = useLocation()
    return <SiteLayout><AnimatePresence mode="wait"><motion.div key={location.pathname} className="route-view" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: "easeOut" }}><AppRoutes /></motion.div></AnimatePresence><RouteLoader key={location.pathname} /></SiteLayout>
  }

  function RouteLoader() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const timer = window.setTimeout(() => setLoading(false), 520)
      return () => window.clearTimeout(timer)
    }, [])

    return loading ? <PageLoader /> : null
  }

function App() {
    return <AppTransition />
}

export default App
