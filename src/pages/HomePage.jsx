import { useEffect } from 'react'
import { ArrowRight, Code2, Database, Fingerprint, LockKeyhole, ShieldCheck, WalletCards, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ApiConsole, InfrastructureGraph, ProductMockup, ScrollReveal, SecurityDashboard } from '../components/Visuals'

function HomePage() {
  useEffect(() => {
    document.title = 'Financial Infrastructure Platform | NTSFINCO'
  }, [])

  return <>
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><i className="status-dot" /> FINANCIAL INFRASTRUCTURE / 2026</span>
          <h1>One platform. Every financial <em>flow.</em></h1>
          <p className="hero-lede">Connect payments, banking, recharge, verification and settlement through one calm operating layer for the products your customers rely on.</p>
          <div className="hero-actions"><Link className="button" to="/software">Explore platform <ArrowRight size={16} /></Link><Link className="button button-secondary" to="/contact">Talk to sales <ArrowRight size={16} /></Link></div>
          <div className="hero-trust"><span><ShieldCheck size={16} /> Control by design</span><span><Zap size={16} /> Integration-first</span></div>
        </div>
        <div className="hero-art"><InfrastructureGraph /></div>
      </div>
      <div className="hero-signal"><span>01</span><span>ONE CONTROL PLANE</span><div /><span>SCROLL TO EXPLORE</span></div>
    </section>
    <section className="metrics-band"><div className="container metrics"><div className="metric"><strong>Modular</strong><span>API and product building blocks</span></div><div className="metric"><strong>Connected</strong><span>Across financial operations</span></div><div className="metric"><strong>Observable</strong><span>From request to settlement</span></div><div className="metric"><strong>Human</strong><span>Support for complex workflows</span></div></div></section>
    <section className="section"><div className="container split-grid"><ScrollReveal><span className="eyebrow">THE OPERATING LAYER</span><h2 className="editorial-title">Financial infrastructure should make the next decision clearer.</h2><p className="editorial-copy">The important work is between the headline features: identity, routing, reconciliation, permissions and the people who need to understand what happened.</p><div className="feature-list"><div><span>01</span><p><b>Connect the edges</b><br />Give every channel a consistent route into operations.</p></div><div><span>02</span><p><b>See the whole path</b><br />Move from request to outcome without losing context.</p></div><div><span>03</span><p><b>Build for change</b><br />Keep the product layer flexible as your network evolves.</p></div></div></ScrollReveal><ScrollReveal className="visual-column"><ProductMockup /></ScrollReveal></div></section>
    <section className="section dark-section"><div className="container"><div className="section-intro"><span className="eyebrow">CAPABILITY MAP</span><h2>Choose the rail. Keep the operating model.</h2><p>Start with one workflow or connect an entire financial product around shared visibility.</p></div><div className="capability-grid">{[['Banking rails', 'AEPS, DMT and assisted access workflows.', WalletCards], ['Recharge network', 'Mobile, biller and recurring payment journeys.', Zap], ['Verification', 'Identity and account checks designed for review.', Fingerprint], ['Payout operations', 'Move from instruction to settlement visibility.', Database], ['Developer layer', 'Documented integration concepts and clear states.', Code2], ['Risk controls', 'Permission, audit and monitoring as part of the flow.', LockKeyhole]].map(([title, text, Icon]) => <Link className="capability-card" to="/software" key={title}><span className="card-icon"><Icon size={19} /></span><h3>{title}</h3><p>{text}</p><ArrowRight size={16} /></Link>)}</div></div></section>
    <section className="section"><div className="container split-grid reverse-mobile"><ScrollReveal className="visual-column"><ApiConsole /></ScrollReveal><ScrollReveal><span className="eyebrow">FOR DEVELOPERS</span><h2 className="editorial-title">A clear path from request to response.</h2><p className="editorial-copy">Make integrations easier to reason about with consistent endpoints, understandable states and workflows your team can observe.</p><Link className="inline-link" to="/api/recharge">Explore API solutions <ArrowRight size={16} /></Link></ScrollReveal></div></section>
    <section className="section security-section"><div className="container split-grid"><ScrollReveal><span className="eyebrow">SECURITY CONTROL LAYER</span><h2 className="editorial-title">Trust is built into the workflow.</h2><p className="editorial-copy">Design financial operations around authentication, auditability, data protection and risk visibility from the beginning.</p><Link className="button button-secondary" to="/about">See how we work <ArrowRight size={16} /></Link></ScrollReveal><ScrollReveal className="visual-column"><SecurityDashboard /></ScrollReveal></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">BUILD WITH CLARITY</span><h2>Give your next financial workflow a stronger foundation.</h2></div><Link className="button" to="/contact">Talk to our team <ArrowRight size={16} /></Link></div></section>
  </>
}

export default HomePage
