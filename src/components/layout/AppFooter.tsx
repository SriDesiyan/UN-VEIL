import React from 'react';
import { ShieldCheck, Database, Lock } from 'lucide-react';

export const AppFooter: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #cbd5e1',
      padding: '8px 16px',
      fontSize: '11px',
      fontFamily: 'var(--font-mono)',
      color: '#64748b',
      marginTop: 'auto',
      zIndex: 20
    }}>
      <div style={{
        maxWidth: '1700px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        {/* Left: Product & Purpose */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#059669',
            display: 'inline-block'
          }} />
          <span style={{ fontWeight: 700, color: '#334155' }}>
            UN-VEIL FedPortal v2.6.1
          </span>
          <span>•</span>
          <span>National Cyber Threat Attribution & Evidence Linkage Network</span>
        </div>

        {/* Right: Forensic Standards */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Database size={12} color="#0284c7" />
            <span>FIPS 140-3 Cryptographic Hashing</span>
          </div>
          <span>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={12} color="#059669" />
            <span style={{ fontWeight: 600, color: '#334155' }}>CJIS Standard 5.4 Compliant</span>
          </div>
          <span>•</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Lock size={12} color="#d97706" />
            <span style={{ color: '#b45309', fontWeight: 700 }}>
              TLP:AMBER / LAW ENFORCEMENT SENSITIVE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
