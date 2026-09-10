import { useEffect } from 'react'
import { ArrowRight, Code2, Database, Fingerprint, LockKeyhole, ShieldCheck, WalletCards, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ApiConsole, InfrastructureGraph, ProductMockup, ScrollReveal, SecurityDashboard } from '../components/Visuals'
import { AnimatedSection } from '../components/common/AnimatedSection'
import { MagneticButton } from '../components/common/MagneticButton'
import { InteractiveCard } from '../components/common/InteractiveCard'
import { InteractiveGraph } from '../components/ui/InteractiveGraph'
import { staggerItem } from '../animations/variants'

function HomePage() {
  useEffect(() => {
    document.title = 'Financial Infrastructure Platform | NTSFINCO'
  }, [])

  return <>
    <section className="hero">
      <div className="hero-grid">
        <motion.div 
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow"><i className="status-dot" /> FINANCIAL INFRASTRUCTURE / 2026</span>
          <h1>One platform. Every financial <em>flow.</em></h1>
          <p className="hero-lede">Connect payments, banking, recharge, verification and settlement through one calm operating layer for the products your customers rely on.</p>
          <div className="hero-actions">
            <MagneticButton className="button" to="/software">Explore platform <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></MagneticButton>
            <MagneticButton className="button button-secondary" to="/contact">Talk to sales <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></MagneticButton>
          </div>
          <div className="hero-trust"><span><ShieldCheck size={16} /> Control by design</span><span><Zap size={16} /> Integration-first</span></div>
        </motion.div>
        <motion.div 
          className="hero-art"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <InfrastructureGraph />
        </motion.div>
      </div>
      <motion.div 
        className="hero-signal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <span>01</span><span>ONE CONTROL PLANE</span><div /><span>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>

    <AnimatedSection className="metrics-band">
      <div className="container metrics">
        <motion.div variants={staggerItem} className="metric"><strong>Modular</strong><span>API and product building blocks</span></motion.div>
        <motion.div variants={staggerItem} className="metric"><strong>Connected</strong><span>Across financial operations</span></motion.div>
        <motion.div variants={staggerItem} className="metric"><strong>Observable</strong><span>From request to settlement</span></motion.div>
        <motion.div variants={staggerItem} className="metric"><strong>Human</strong><span>Support for complex workflows</span></motion.div>
      </div>
    </AnimatedSection>

    <section className="section">
      <div className="container split-grid">
        <ScrollReveal>
          <span className="eyebrow">THE OPERATING LAYER</span>
          <h2 className="editorial-title">Financial infrastructure should make the next decision clearer.</h2>
          <p className="editorial-copy">The important work is between the headline features: identity, routing, reconciliation, permissions and the people who need to understand what happened.</p>
          <AnimatedSection className="feature-list" delay={0.2}>
            <motion.div variants={staggerItem}><span>01</span><p><b>Connect the edges</b><br />Give every channel a consistent route into operations.</p></motion.div>
            <motion.div variants={staggerItem}><span>02</span><p><b>See the whole path</b><br />Move from request to outcome without losing context.</p></motion.div>
            <motion.div variants={staggerItem}><span>03</span><p><b>Build for change</b><br />Keep the product layer flexible as your network evolves.</p></motion.div>
          </AnimatedSection>
        </ScrollReveal>
        <ScrollReveal className="visual-column"><InteractiveGraph /></ScrollReveal>
      </div>
    </section>

    <section className="section dark-section">
      <div className="container">
        <ScrollReveal className="section-intro mb-12">
          <span className="eyebrow text-gold">CAPABILITY MAP</span>
          <h2>Choose the rail. Keep the operating model.</h2>
          <p>Start with one workflow or connect an entire financial product around shared visibility.</p>
        </ScrollReveal>
        <AnimatedSection className="capability-grid">
          {[
            ['Banking rails', 'AEPS, DMT and assisted access workflows.', WalletCards], 
            ['Recharge network', 'Mobile, biller and recurring payment journeys.', Zap], 
            ['Verification', 'Identity and account checks designed for review.', Fingerprint], 
            ['Payout operations', 'Move from instruction to settlement visibility.', Database], 
            ['Developer layer', 'Documented integration concepts and clear states.', Code2], 
            ['Risk controls', 'Permission, audit and monitoring as part of the flow.', LockKeyhole]
          ].map(([title, text, Icon]) => (
            <motion.div key={title} variants={staggerItem}>
              <InteractiveCard className="capability-card block group h-full cursor-pointer dark:bg-surface dark:border-line">
                <span className="card-icon group-hover:scale-110 transition-transform"><Icon size={19} /></span>
                <h3 className="dark:text-white">{title}</h3>
                <p>{text}</p>
                <ArrowRight size={16} className="absolute bottom-5 right-5 text-blue transition-transform group-hover:translate-x-1" />
              </InteractiveCard>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>

    <section className="section">
      <div className="container split-grid reverse-mobile">
        <ScrollReveal className="visual-column"><ApiConsole /></ScrollReveal>
        <ScrollReveal>
          <span className="eyebrow">FOR DEVELOPERS</span>
          <h2 className="editorial-title">A clear path from request to response.</h2>
          <p className="editorial-copy">Make integrations easier to reason about with consistent endpoints, understandable states and workflows your team can observe.</p>
          <Link className="inline-link group" to="/api/recharge">
            Explore API solutions <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <section className="section security-section">
      <div className="container split-grid">
        <ScrollReveal>
          <span className="eyebrow text-gold">SECURITY CONTROL LAYER</span>
          <h2 className="editorial-title">Trust is built into the workflow.</h2>
          <p className="editorial-copy">Design financial operations around authentication, auditability, data protection and risk visibility from the beginning.</p>
          <MagneticButton className="button button-secondary mt-6" to="/about">See how we work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></MagneticButton>
        </ScrollReveal>
        <ScrollReveal className="visual-column"><SecurityDashboard /></ScrollReveal>
      </div>
    </section>

    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">BUILD WITH CLARITY</span>
          <h2>Give your next financial workflow a stronger foundation.</h2>
        </div>
        <MagneticButton className="button" to="/contact">Talk to our team <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></MagneticButton>
      </div>
    </section>
  </>
}

export default HomePage
