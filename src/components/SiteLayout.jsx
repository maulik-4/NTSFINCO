import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import site from '../config/site'
import { apiGroups, industryItems, serviceItems, softwareCategories } from '../data/catalog'

const menuGroups = {
  software: softwareCategories.map((group) => ({ ...group, id: group.name.toLowerCase().replaceAll(' ', '-') })),
  api: apiGroups.map((group) => ({ ...group, id: group.name.toLowerCase().replaceAll(' ', '-') })),
  services: [
    { id: 'development', name: 'Development', description: 'Product and platform engineering.', items: serviceItems.filter((item) => ['android-development', 'pwa-development', 'b2b-b2c-platforms', 'hybrid-development', 'web-development', 'cms-development', 'ecommerce'].includes(item.slug)) },
    { id: 'marketing', name: 'Marketing', description: 'Acquisition and visibility systems.', items: serviceItems.filter((item) => ['digital-marketing', 'seo-smo', 'google-ppc'].includes(item.slug)) },
    { id: 'infrastructure', name: 'Infrastructure', description: 'Hosting and money movement operations.', items: serviceItems.filter((item) => ['linux-windows-hosting', 'reseller-hosting', 'vps-dedicated-hosting', 'payin-payout'].includes(item.slug)) },
    { id: 'design', name: 'Design', description: 'Visual systems for digital products.', items: serviceItems.filter((item) => ['mobile-game-development', 'graphic-design', 'web-design'].includes(item.slug)) },
  ],
  industries: [
    { id: 'financial', name: 'Financial', description: 'Money movement, access and trust.', items: industryItems.filter((item) => ['recharge-bill-payments', 'banking-fintech', 'neobanking', 'identity-risk'].includes(item.slug)) },
    { id: 'commerce', name: 'Commerce', description: 'Retail and transaction workflows.', items: industryItems.filter((item) => ['ecommerce', 'retail', 'travel', 'logistics'].includes(item.slug)) },
    { id: 'enterprise', name: 'Enterprise', description: 'Business operations at scale.', items: industryItems.filter((item) => ['b2b', 'corporate', 'hrms-payroll', 'manufacturing'].includes(item.slug)) },
    { id: 'services', name: 'Services', description: 'Sector-specific operating contexts.', items: industryItems.filter((item) => ['sales-marketing', 'education', 'healthcare'].includes(item.slug)) },
  ],
}

function Navbar() {
  const [open, setOpen] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    ['Home', '/'], ['About Us', '/about'], ['Softwares', 'software'], ['API Solutions', 'api'], ['Services', 'services'], ['Industries', 'industries'], ['Career', '/career'], ['Contact Us', '/contact'],
  ]

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} onMouseLeave={() => setOpen(null)}>
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="NTSFINCO home"><span className="brand-mark">N</span><span>NTSFINCO</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, target]) => target.startsWith('/') ? <NavLink key={label} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={target} onMouseEnter={() => setOpen(null)}>{label}</NavLink> : (
            <button key={label} className={`nav-link nav-trigger ${open === target || location.pathname.startsWith(`/${target}`) ? 'active' : ''}`} onMouseEnter={() => setOpen(target)} onClick={() => setOpen(open === target ? null : target)} aria-haspopup="true" aria-expanded={open === target}>{label}<ChevronDown size={14} /></button>
          ))}
        </nav>
        <Link className="button button-small nav-cta" to="/contact">Talk to Sales <ArrowUpRight size={15} /></Link>
        <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>{mobileOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <MegaMenu type={open} />}
        {mobileOpen && <MobileMenu navItems={navItems} />}
      </AnimatePresence>
    </header>
  )
}

function MegaMenu({ type }) {
  const groups = menuGroups[type] || []
  const [activeCategory, setActiveCategory] = useState(groups[0]?.id)

  useEffect(() => {
    if (groups.length > 0) {
      setActiveCategory(groups[0].id)
    }
  }, [type, groups])

  const activeGroup = groups.find((group) => group.id === activeCategory) || groups[0]

  if (!activeGroup) return null

  return (
    <motion.div className="mega-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.25, ease: "easeOut" }}>
      <div className="mega-inner">
        <div className="mega-intro">
          <span className="eyebrow">NTSFINCO CONTROL CENTER</span>
          <h2>{type === 'software' ? 'Operating software for financial networks.' : type === 'api' ? 'Connect the capabilities your product needs.' : `Build the ${type} workflows your teams rely on.`}</h2>
          <p>Choose a category to focus the system around the work you need to do.</p>
          <div className="mega-signal"><span className="status-dot" /> {groups.length} ACTIVE DOMAINS</div>
        </div>
        <div className="mega-content">
          <div className="mega-categories" role="tablist" aria-label={`${type} categories`}>
            {groups.map((group) => (
              <button 
                className={`mega-category ${activeCategory === group.id ? 'active' : ''}`} 
                key={group.id} 
                onMouseEnter={() => setActiveCategory(group.id)} 
                onFocus={() => setActiveCategory(group.id)} 
                onClick={() => setActiveCategory(group.id)} 
                role="tab" 
                aria-selected={activeCategory === group.id}
              >
                <span>
                  <b>{group.name}</b>
                  <small>{group.description || `${group.items.length} platform capabilities`}</small>
                </span>
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <div className="mega-results-container">
            <AnimatePresence mode="wait">
              <motion.div 
                className="mega-results" 
                key={activeGroup.id} 
                initial={{ opacity: 0, x: 8 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="mega-results-head">
                  <span className="eyebrow">{activeGroup.name}</span>
                  <span>{activeGroup.items.length} routes</span>
                </div>
                {activeGroup.items.map((item) => (
                  <Link className="mega-item" key={item.route} to={item.route}>
                    <span>
                      <strong>{item.title}</strong>
                      <small>{item.description}</small>
                    </span>
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function MobileMenu({ navItems }) {
  const [expanded, setExpanded] = useState(null)
  return <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}><div className="mobile-menu-inner">{navItems.map(([label, target]) => target.startsWith('/') ? <Link key={label} to={target}>{label}<ArrowUpRight size={15} /></Link> : <div className="mobile-nav-group" key={label}><button onClick={() => setExpanded(expanded === target ? null : target)} aria-expanded={expanded === target}>{label}<ChevronDown size={16} /></button>{expanded === target && <div className="mobile-subnav">{menuGroups[target].map((group) => <div key={group.id}><span>{group.name}</span>{group.items.slice(0, 5).map((item) => <Link key={item.route} to={item.route}>{item.title}<ArrowUpRight size={13} /></Link>)}</div>)}</div>}</div>)}<Link className="button" to="/contact">Talk to Sales <ArrowUpRight size={15} /></Link></div></motion.div>
}

function Footer() {
  return <footer className="site-footer"><div className="footer-top"><div><Link className="brand" to="/"><span className="brand-mark">N</span><span>NTSFINCO</span></Link><p className="footer-note">The infrastructure layer for teams building connected financial products.</p></div><div className="footer-columns"><div><span className="footer-label">Company</span><Link to="/about">About</Link><Link to="/career">Career</Link><Link to="/contact">Contact</Link></div><div><span className="footer-label">Platform</span><Link to="/software/aeps">Banking software</Link><Link to="/api/recharge">Recharge APIs</Link><Link to="/api/verify-suite">Verification</Link></div><div><span className="footer-label">Services</span><Link to="/services/web-development">Web development</Link><Link to="/services/android-development">Mobile development</Link><Link to="/services/payin-payout">Payin & payout</Link></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {site.companyName || 'Rakle Service Private Limited'}</span><span>Built for dependable financial workflows.</span></div></footer>
}

function FloatingActions() {
  return <div className="floating-actions">{site.phone && <a href={`tel:${site.phone}`} aria-label="Call NTSFINCO"><Phone size={17} /></a>}{site.whatsapp && <a href={`https://wa.me/${site.whatsapp}`} aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer"><span>W</span></a>}</div>
}

function MouseFollower() {
  const glowRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(pointer: coarse)').matches
    if (reduced || touch) return undefined
    const move = (event) => {
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${event.clientX - 140}px, ${event.clientY - 140}px, 0)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />
}

function PageLoader() {
  return <motion.div className="page-loader" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.65, delay: 0.1 }}><span>NTSFINCO</span><small>CONNECTING FINANCIAL INFRASTRUCTURE</small><div className="loader-line"><i /></div></motion.div>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function SiteLayout({ children }) {
  const location = useLocation()
  return <><ScrollToTop /><MouseFollower /><Navbar key={location.pathname} /><main>{children}</main><Footer /><FloatingActions /></>
}

export { PageLoader, SiteLayout }
