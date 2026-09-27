import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  sublabel: string;
  icon: React.ElementType;
  accentColor?: string;
  badge?: string;
  badgeTone?: 'emerald' | 'cyan' | 'amber' | 'red' | 'purple' | 'slate';
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  sublabel,
  icon: Icon,
  accentColor = '#0284c7',
  badge,
  badgeTone = 'slate',
  onClick
}) => {
  return (
    <div 
      className="portal-card" 
      onClick={onClick}
      style={{
        padding: '16px',
        borderTop: `3px solid ${accentColor}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            backgroundColor: '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: accentColor
          }}>
            <Icon size={16} />
          </div>
          <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: '#64748b',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            {label}
          </span>
        </div>
        {badge && (
          <span className={`badge badge-${badgeTone}`} style={{ fontSize: '9px' }}>
            {badge}
          </span>
        )}
      </div>

      <div style={{ marginTop: '12px' }}>
        <span style={{
          display: 'block',
          fontSize: '26px',
          fontWeight: 800,
          color: '#0a192f',
          fontFamily: 'var(--font-mono)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em'
        }}>
          {value}
        </span>
        <span style={{
          display: 'block',
          fontSize: '11px',
          color: '#64748b',
          marginTop: '4px',
          fontFamily: 'var(--font-sans)'
        }}>
          {sublabel}
        </span>
      </div>
    </div>
  );
};
