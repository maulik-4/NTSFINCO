import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Menu, Phone, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import site from '../config/site'
import { apiGroups, industryItems, serviceItems, softwareCategories } from '../data/catalog'
import { MagneticButton } from './common/MagneticButton'

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
  const [hoveredNav, setHoveredNav] = useState(null)
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
    <header className={`site-header transition-all duration-300 ease-out ${scrolled ? 'is-scrolled h-[68px]' : 'h-[80px]'}`} onMouseLeave={() => { setOpen(null); setHoveredNav(null); }}>
      <div className={`nav-shell transition-all duration-300 ease-out ${scrolled ? 'h-[68px]' : 'h-[80px]'}`}>
        <Link className="brand" to="/" aria-label="NTSFINCO home">
          <img src="/icon.png" alt="NTSFINCO Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
        </Link>
        <nav className="desktop-nav relative" aria-label="Main navigation">
          {navItems.map(([label, target]) => {
            const isActive = target.startsWith('/') ? location.pathname === target : location.pathname.startsWith(`/${target}`);
            const isHovered = hoveredNav === label;
            return target.startsWith('/') ? (
              <NavLink 
                key={label} 
                className={({ isActive }) => `nav-link relative py-2 px-3 ${isActive ? 'text-deep font-medium' : ''}`} 
                to={target} 
                onMouseEnter={() => { setOpen(null); setHoveredNav(label); }}
              >
                <span className="relative z-10">{label}</span>
                {isHovered && <motion.div layoutId="navHover" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
                {!isHovered && isActive && <motion.div layoutId="navActive" className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue z-0" />}
              </NavLink>
            ) : (
              <button 
                key={label} 
                className={`nav-link relative py-2 px-3 nav-trigger ${open === target || isActive ? 'text-deep font-medium' : ''}`} 
                onMouseEnter={() => { setOpen(target); setHoveredNav(label); }} 
                onClick={() => setOpen(open === target ? null : target)} 
                aria-haspopup="true" 
                aria-expanded={open === target}
              >
                <span className="relative z-10 flex items-center gap-1">{label}<ChevronDown size={14} className={`transition-transform ${open === target ? 'rotate-180' : ''}`} /></span>
                {isHovered && <motion.div layoutId="navHover" className="absolute bottom-0 left-2 right-2 h-0.5 bg-gold z-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />}
                {!isHovered && isActive && <motion.div layoutId="navActive" className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue z-0" />}
              </button>
            )
          })}
        </nav>
        <MagneticButton className="button button-small nav-cta ml-4" to="/contact">Talk to Sales <ArrowUpRight size={15} /></MagneticButton>
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
  return (
    <footer className="site-footer">
      <div className="footer-top" style={{ flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '300px' }}>
          <Link className="brand" to="/">
            <img src="/icon.png" alt="NTSFINCO Logo" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </Link>
          <p className="footer-note" style={{ marginBottom: '15px' }}>
            The infrastructure layer for teams building connected financial products.
          </p>
          {site.address && (
            <p style={{ color: '#b7c4cd', fontSize: '11px', lineHeight: '1.6', marginBottom: '8px' }}>
              <strong style={{ color: '#fff', fontWeight: 600 }}>Address:</strong> {site.address}
            </p>
          )}
          {(site.gstin || site.cin) && (
            <p style={{ color: '#b7c4cd', fontSize: '11px', lineHeight: '1.6', marginBottom: '15px' }}>
              {site.gstin && <><strong style={{ color: '#fff', fontWeight: 600 }}>GSTIN:</strong> {site.gstin}<br /></>}
              {site.cin && <><strong style={{ color: '#fff', fontWeight: 600 }}>CIN:</strong> {site.cin}</>}
            </p>
          )}
        </div>
        
        <div className="footer-columns">
          <div>
            <span className="footer-label">Company</span>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <span className="footer-label">Platform</span>
            <Link to="/software/aeps">Banking software</Link>
            <Link to="/api/recharge">Recharge APIs</Link>
            <Link to="/api/verify-suite">Verification</Link>
          </div>
          <div>
            <span className="footer-label">Contact</span>
            {site.phone && <a href={`tel:${site.phone}`}>Call Us: {site.phone}</a>}
            {site.email && <a href={`mailto:${site.email}`}>Email: {site.email}</a>}
            {site.whatsapp && <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp: {site.whatsapp}</a>}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {site.companyName || 'NTSFINCO'}</span>
        <span>Built for dependable financial workflows.</span>
      </div>
    </footer>
  )
}

function FloatingActions() {
  return <div className="floating-actions">{site.phone && <a href={`tel:${site.phone}`} aria-label="Call NTSFINCO"><Phone size={17} /></a>}{site.whatsapp && <a href={`https://wa.me/${site.whatsapp}`} aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer"><span>W</span></a>}</div>
}

function MouseFollower() {
  const [isDisabled, setIsDisabled] = useState(false);
  
  // Create motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring configuration for the dot (fast)
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });
  
  // Spring configuration for the glow (delayed/smooth)
  const glowX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 });
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 });

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const touch = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || touch) {
      setIsDisabled(true);
      return;
    }

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  if (isDisabled) return null;

  return (
    <>
      {/* Ambient Glow */}
      <motion.div 
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(var(--blue-rgb), 0.03) 0%, transparent 70%)',
        }}
        aria-hidden="true" 
      />
      {/* Cursor Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        aria-hidden="true" 
      />
    </>
  );
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
