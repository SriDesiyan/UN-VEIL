import React, { useState, useEffect } from 'react';
import { ShieldCheck, Clock, Server, MonitorPlay } from 'lucide-react';

interface FederalClassificationBarProps {
  onToggleLanding?: () => void;
  isLanding?: boolean;
}

export const FederalClassificationBar: React.FC<FederalClassificationBarProps> = ({ 
  onToggleLanding,
  isLanding = false 
}) => {
  const [timeUtc, setTimeUtc] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setTimeUtc(`${hours}:${minutes}:${seconds} UTC`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      backgroundColor: '#091526',
      borderBottom: '1px solid #1e293b',
      color: '#cbd5e1',
      fontSize: '11px',
      fontFamily: 'var(--font-mono)',
      padding: '4px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      letterSpacing: '0.04em',
      userSelect: 'none',
      zIndex: 50
    }}>
      {/* Left items: Sensitive classification */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: '#10b981',
          boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.25)',
          display: 'inline-block'
        }} className="pulse-indicator" />
        <span style={{ color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase' }}>
          CUI // LAW ENFORCEMENT SENSITIVE
        </span>
        <span style={{ color: '#475569' }}>•</span>
        <span style={{ color: '#94a3b8' }}>
          CONTROLLED DEMO DATA // SIH26151 NTRO
        </span>
        <span style={{ color: '#475569' }} className="hidden-mobile">•</span>
        <span style={{ color: '#64748b' }} className="hidden-mobile">
          28 U.S.C. § 1746 ATTESTED
        </span>
      </div>

      {/* Right items: System status & UTC clock */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Server size={13} color="#10b981" />
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>EVIDENCE REPOSITORY ONLINE</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8' }}>
          <Clock size={13} />
          <span style={{ color: '#f1f5f9', fontWeight: 500, fontVariantNumeric: 'tabular-nums' }}>
            {timeUtc || '15:40:00 UTC'}
          </span>
        </div>

        {onToggleLanding && (
          <button
            onClick={onToggleLanding}
            title={isLanding ? "Enter Application Workspace" : "View Cinematic Hero View"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: '#172a45',
              border: '1px solid #1a3d66',
              color: '#38bdf8',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            <MonitorPlay size={12} />
            <span>{isLanding ? "Exit Cinematic" : "Cinematic Mode"}</span>
          </button>
        )}
      </div>
    </div>
  );
};
