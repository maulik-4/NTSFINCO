import { Activity, ArrowDown, CircleDollarSign, Code2, Database, Fingerprint, LockKeyhole, Network, ShieldCheck, Sparkles, WalletCards, Zap } from 'lucide-react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { durations, easing } from '../animations/easing'

function InfrastructureGraph() {
  const nodes = ['API gateway', 'Authentication', 'Validation', 'Processing', 'Settlement']
  const modules = ['AEPS', 'DMT', 'RECHARGE', 'BBPS', 'VERIFY', 'PAYOUT']
  
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)
  
  // Parallax transform
  const parallaxX = useTransform(xSpring, [-0.5, 0.5], [10, -10])
  const parallaxY = useTransform(ySpring, [-0.5, 0.5], [10, -10])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const touch = window.matchMedia('(pointer: coarse)').matches
    if (reducedMotion || touch) return

    const handleMouseMove = (e) => {
      const rect = window.document.body.getBoundingClientRect()
      const xPct = (e.clientX / rect.width) - 0.5
      const yPct = (e.clientY / rect.height) - 0.5
      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div 
      ref={ref}
      className="infra-visual"
      style={{ x: parallaxX, y: parallaxY }}
    >
      <div className="visual-glow" />
      <div className="infra-caption">
        <span className="status-dot" /> FINANCIAL INFRASTRUCTURE CONTROL CENTER
      </div>
      <div className="infra-modules">
        {modules.map((module, index) => (
          <motion.span 
            key={module}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.1, duration: durations.normal }}
          >
            {module}
          </motion.span>
        ))}
      </div>
      <div className="relative mt-8">
        {nodes.map((node, index) => (
          <motion.div 
            className="flow-node group" 
            key={node} 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: durations.medium, delay: 0.8 + index * 0.15, ease: easing.expressive }}
          >
            {/* Traveling indicator */}
            {index < nodes.length - 1 && (
              <motion.div 
                className="absolute w-1.5 h-1.5 rounded-full bg-blue z-10"
                style={{ left: '42px', top: '100%' }}
                animate={{ top: ['0%', '150%'], opacity: [0, 1, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.4,
                  ease: 'linear' 
                }}
              />
            )}
            <span className="node-index group-hover:scale-110 transition-transform">0{index + 1}</span>
            <strong>{node}</strong>
            <span className="node-status">{index === nodes.length - 1 ? 'READY' : 'PASS'}</span>
            {index < nodes.length - 1 && (
              <ArrowDown className="node-arrow" size={16} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function ProductMockup({ kind = 'platform' }) {
  const icon = kind === 'security' ? <ShieldCheck /> : kind === 'api' ? <Code2 /> : <Activity />
  
  return (
    <div className="product-mockup relative group">
      <div className="mockup-top">
        <span className="mockup-icon group-hover:bg-blue/5 transition-colors">{icon}</span>
        <span>
          <b>{kind === 'security' ? 'Control plane' : kind === 'api' ? 'Developer console' : 'Operations view'}</b>
          <small>Updated just now</small>
        </span>
        <span className="status-pill">healthy</span>
      </div>
      <div className="mockup-chart">
        <div className="chart-grid" />
        <svg viewBox="0 0 500 130" preserveAspectRatio="none">
          <motion.path 
            d="M0,105 C42,100 50,74 90,85 S130,103 165,70 S218,86 250,53 S292,67 330,41 S370,58 405,25 S455,40 500,15" 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.5, ease: easing.expressive }}
          />
        </svg>
      </div>
      <div className="mockup-stats">
        <span><small>Requests</small><b>24.8k</b></span>
        <span><small>Success rate</small><b>99.8%</b></span>
        <span><small>Latency</small><b>184ms</b></span>
      </div>
    </div>
  )
}

function ApiConsole() {
  const code = `{\n  "reference": "txn_48A9",\n  "amount": 499,\n  "operator": "mobile"\n}`;
  return (
    <div className="api-console group">
      <div className="console-bar">
        <span className="window-dots"><i /><i /><i /></span>
        <span>request.preview</span>
        <span className="status-pill group-hover:scale-105 transition-transform">example</span>
      </div>
      <div className="console-body">
        <div className="code-line"><span className="method">POST</span> <span>/api/v1/recharge</span></div>
        <pre>{code}</pre>
        <div className="response-line">
          <span className="status-dot" /> 200 · response received
        </div>
      </div>
    </div>
  )
}

function SecurityDashboard() {
  const items = [[LockKeyhole, 'Authentication'], [Fingerprint, 'Identity controls'], [Database, 'Audit trail'], [ShieldCheck, 'Risk monitoring']]
  return (
    <div className="security-dashboard">
      <div className="security-score">
        <div><span className="eyebrow">SECURITY CONTROL PLANE</span><h3>Workflow confidence</h3></div>
        <motion.strong
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >98<span>%</span></motion.strong>
      </div>
      <div className="security-items">
        {items.map(([Icon, label], index) => (
          <motion.div 
            key={label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="hover:bg-line/5 transition-colors cursor-default"
          >
            <Icon size={18} className="group-hover:scale-110 transition-transform" />
            <span>{label}</span>
            <b>{index === 3 ? 'Monitor' : 'Ready'}</b>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function NetworkVisualization() {
  const marks = [WalletCards, Fingerprint, CircleDollarSign, Network, Zap]
  return (
    <div className="network-visual">
      <div className="network-lines opacity-50" />
      {marks.map((Icon, index) => (
        <motion.div 
          className={`network-node node-${index} shadow-sm border-blue/10`} 
          key={`network-${index}`} 
          animate={{ y: [0, -4, 0] }} 
          transition={{ repeat: Infinity, duration: 3 + index * 0.4, delay: index * 0.3 }}
          whileHover={{ scale: 1.1, zIndex: 10 }}
        >
          <Icon size={18} />
        </motion.div>
      ))}
      <motion.div 
        className="network-core shadow-lg"
        initial="rest"
        whileHover="hover"
        style={{ overflow: 'hidden', cursor: 'pointer' }}
      >
        <motion.div 
          className="core-fill"
          style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: 'var(--blue)', zIndex: 0 }}
          variants={{
            rest: { top: '100%' },
            hover: { top: '0%' }
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <motion.div variants={{ rest: { color: 'var(--gold)' }, hover: { color: '#ffffff' } }}>
            <Sparkles size={22} />
          </motion.div>
          <motion.span variants={{ rest: { color: 'var(--blue)' }, hover: { color: '#ffffff' } }}>
            NTS<br />CORE
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}

function ScrollReveal({ children, className = '' }) {
  return (
    <motion.div 
      className={className} 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: '-60px' }} 
      transition={{ duration: durations.medium, ease: easing.expressive }}
    >
      {children}
    </motion.div>
  )
}

export { ApiConsole, InfrastructureGraph, NetworkVisualization, ProductMockup, ScrollReveal, SecurityDashboard }
