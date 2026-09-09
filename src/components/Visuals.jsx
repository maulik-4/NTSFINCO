import { Activity, ArrowDown, CircleDollarSign, Code2, Database, Fingerprint, LockKeyhole, Network, ShieldCheck, Sparkles, WalletCards, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

function InfrastructureGraph() {
  const nodes = ['API gateway', 'Authentication', 'Validation', 'Processing', 'Settlement']
  const modules = ['AEPS', 'DMT', 'RECHARGE', 'BBPS', 'VERIFY', 'PAYOUT']
  return <div className="infra-visual"><div className="visual-glow" /><div className="infra-caption"><span className="status-dot" /> FINANCIAL INFRASTRUCTURE CONTROL CENTER</div><div className="infra-modules">{modules.map((module, index) => <span key={module} style={{ '--i': index }}>{module}</span>)}</div>{nodes.map((node, index) => <motion.div className="flow-node" key={node} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}><span className="node-index">0{index + 1}</span><strong>{node}</strong><span className="node-status">{index === nodes.length - 1 ? 'READY' : 'PASS'}</span>{index < nodes.length - 1 && <ArrowDown className="node-arrow" size={16} />}</motion.div>)}</div>
}

function ProductMockup({ kind = 'platform' }) {
  const icon = kind === 'security' ? <ShieldCheck /> : kind === 'api' ? <Code2 /> : <Activity />
  return <div className="product-mockup"><div className="mockup-top"><span className="mockup-icon">{icon}</span><span><b>{kind === 'security' ? 'Control plane' : kind === 'api' ? 'Developer console' : 'Operations view'}</b><small>Updated just now</small></span><span className="status-pill">healthy</span></div><div className="mockup-chart"><div className="chart-grid" /><svg viewBox="0 0 500 130" preserveAspectRatio="none"><path d="M0,105 C42,100 50,74 90,85 S130,103 165,70 S218,86 250,53 S292,67 330,41 S370,58 405,25 S455,40 500,15" /></svg></div><div className="mockup-stats"><span><small>Requests</small><b>24.8k</b></span><span><small>Success rate</small><b>99.8%</b></span><span><small>Latency</small><b>184ms</b></span></div></div>
}

function ApiConsole() {
  return <div className="api-console"><div className="console-bar"><span className="window-dots"><i /><i /><i /></span><span>request.preview</span><span className="status-pill">example</span></div><div className="console-body"><div className="code-line"><span className="method">POST</span> <span>/api/v1/recharge</span></div><pre>{`{\n  "reference": "txn_48A9",\n  "amount": 499,\n  "operator": "mobile"\n}`}</pre><div className="response-line"><span className="status-dot" /> 200 · response received</div></div></div>
}

function SecurityDashboard() {
  const items = [[LockKeyhole, 'Authentication'], [Fingerprint, 'Identity controls'], [Database, 'Audit trail'], [ShieldCheck, 'Risk monitoring']]
  return <div className="security-dashboard"><div className="security-score"><div><span className="eyebrow">SECURITY CONTROL PLANE</span><h3>Workflow confidence</h3></div><strong>98<span>%</span></strong></div><div className="security-items">{items.map(([Icon, label], index) => <div key={label}><Icon size={18} /><span>{label}</span><b>{index === 3 ? 'Monitor' : 'Ready'}</b></div>)}</div></div>
}

function NetworkVisualization() {
  const marks = [WalletCards, Fingerprint, CircleDollarSign, Network, Zap]
  return <div className="network-visual"><div className="network-lines" />{marks.map((Icon, index) => <motion.div className={`network-node node-${index}`} key={`network-${index}`} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 4 + index * 0.4, delay: index * 0.3 }}><Icon size={18} /></motion.div>)}<div className="network-core"><Sparkles size={22} /><span>NTS<br />CORE</span></div></div>
}

function ScrollReveal({ children, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, ease: "easeOut" }}>{children}</motion.div>
}

export { ApiConsole, InfrastructureGraph, NetworkVisualization, ProductMockup, ScrollReveal, SecurityDashboard }
