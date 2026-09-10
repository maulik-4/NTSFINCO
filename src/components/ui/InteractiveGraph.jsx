import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export function InteractiveGraph({ data, label, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Fallback data if none provided
  const points = data || [
    { x: 10, y: 80, val: '$12k', date: 'Jan' },
    { x: 30, y: 40, val: '$45k', date: 'Feb' },
    { x: 50, y: 60, val: '$32k', date: 'Mar' },
    { x: 70, y: 20, val: '$78k', date: 'Apr' },
    { x: 90, y: 30, val: '$65k', date: 'May' }
  ];

  // SVG Path generation
  const createPath = (pts) => {
    if (!pts || pts.length === 0) return '';
    const d = pts.map((p, i) => {
      const command = i === 0 ? 'M' : 'L';
      return `${command} ${p.x} ${p.y}`;
    }).join(' ');
    return d;
  };

  const pathD = createPath(points);

  return (
    <div ref={ref} className={`relative w-full h-[240px] bg-white dark:bg-surface border border-line rounded-lg overflow-visible p-6 shadow-sm ${className}`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-deep font-semibold text-sm">{label || 'Transaction Volume'}</h4>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-blue animate-pulse" />
          <span className="text-xs text-muted">Live</span>
        </div>
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-x-6 top-16 bottom-6 border-l border-b border-line">
        {[0, 25, 50, 75, 100].map((line, i) => (
          <div key={i} className="absolute w-full border-t border-line/50 border-dashed" style={{ top: `${line}%` }} />
        ))}
      </div>

      {/* SVG Canvas */}
      <svg className="absolute inset-x-6 top-16 bottom-6 w-[calc(100%-48px)] h-[calc(100%-88px)] overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Animated Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="var(--blue)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Data Points */}
        {points.map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
            onMouseEnter={() => setHoveredPoint(p)}
            onMouseLeave={() => setHoveredPoint(null)}
            className="cursor-pointer"
          >
            {/* Hover Indicator */}
            <circle
              cx={p.x}
              cy={p.y}
              r={hoveredPoint === p ? 4 : 0}
              fill="rgba(var(--blue-rgb), 0.2)"
              className="transition-all duration-300"
            />
            {/* Core Point */}
            <circle
              cx={p.x}
              cy={p.y}
              r="2"
              fill="var(--surface)"
              stroke="var(--blue)"
              strokeWidth="1.5"
            />
          </motion.g>
        ))}
      </svg>

      {/* Tooltip */}
      {hoveredPoint && (
        <div 
          className="absolute z-20 pointer-events-none bg-deep text-white px-3 py-2 rounded shadow-xl text-xs flex flex-col gap-1 transition-all duration-200"
          style={{
            left: `calc(24px + (100% - 48px) * ${hoveredPoint.x / 100})`,
            top: `calc(64px + (100% - 88px) * ${hoveredPoint.y / 100})`,
            transform: 'translate(-50%, -120%)'
          }}
        >
          <span className="font-semibold text-sm">{hoveredPoint.val}</span>
          <span className="text-white/70">{hoveredPoint.date}</span>
        </div>
      )}
    </div>
  );
}
