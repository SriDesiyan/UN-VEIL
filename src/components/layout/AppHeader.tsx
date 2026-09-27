import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  Download, 
  HelpCircle, 
  FolderLock, 
  Menu, 
  UserCheck 
} from 'lucide-react';
import { PRIMARY_CASE_ID } from '../../data/mockData';

interface AppHeaderProps {
  onOpenSearch: () => void;
  onOpenExport: () => void;
  onOpenWhy: () => void;
  onToggleSidebarMobile: () => void;
  currentCaseId?: string;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onOpenSearch,
  onOpenExport,
  onOpenWhy,
  onToggleSidebarMobile,
  currentCaseId = PRIMARY_CASE_ID
}) => {
  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.03)'
    }}>
      <div style={{
        maxWidth: '1700px',
        margin: '0 auto',
        padding: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Left: Mobile Toggle + Brand & Identity */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onToggleSidebarMobile}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '6px',
              color: '#334155',
              cursor: 'pointer'
            }}
            aria-label="Toggle navigation menu"
          >
            <Menu size={18} />
          </button>

          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '6px',
            backgroundColor: '#0a192f',
            border: '1px solid #172a45',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#f59e0b',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            flexShrink: 0
          }}>
            <ShieldAlert size={22} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '17px',
                fontWeight: 800,
                color: '#0a192f',
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-sans)',
                lineHeight: 1.1
              }}>
                UN-VEIL
              </span>
              <span style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                padding: '1px 6px',
                borderRadius: '4px',
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
                border: '1px solid #cbd5e1'
              }}>
                CORE v2.6.1
              </span>
              <span style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                color: '#64748b'
              }} className="hidden-mobile">
                [NTRO-FORENSICS]
              </span>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#64748b',
              margin: '2px 0 0 0',
              fontWeight: 500
            }}>
              Unmasking Virtual Entities & Intelligence Linkage
            </p>
          </div>
        </div>

        {/* Center: Global Search Bar */}
        <div style={{ flex: '1', maxWidth: '360px' }}>
          <button
            onClick={onOpenSearch}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '6px 12px',
              fontSize: '12px',
              color: '#64748b',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#0284c7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Search size={14} color="#64748b" />
              <span>Search PGP, Onion, Wallet, Artifact, Persona...</span>
            </div>
            <kbd style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              padding: '2px 5px',
              borderRadius: '3px',
              backgroundColor: '#e2e8f0',
              color: '#475569',
              border: '1px solid #cbd5e1'
            }}>
              ⌘ K
            </kbd>
          </button>
        </div>

        {/* Right: Active Case, WHY Button, Export & Analyst */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Active Case Chip */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '5px 9px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: '#0f172a'
          }}>
            <FolderLock size={13} color="#0284c7" />
            <span style={{ fontWeight: 600 }}>{currentCaseId}</span>
          </div>

          {/* WHY Panel Button */}
          <button
            onClick={onOpenWhy}
            className="btn-secondary"
            title="Inspect Attribution Rationale & Contradictions"
            style={{ padding: '6px 11px', fontSize: '11px', backgroundColor: '#ecfeff', borderColor: '#a5f3fc', color: '#0e7490' }}
          >
            <HelpCircle size={14} color="#0891b2" />
            <span>WHY Link?</span>
          </button>

          {/* Forensic Export Action */}
          <button
            onClick={onOpenExport}
            className="btn-primary"
            title="Export Forensic Intelligence Package"
            style={{ padding: '6px 12px', fontSize: '11px' }}
          >
            <Download size={14} />
            <span className="hidden-mobile">Export Package</span>
          </button>

          {/* Analyst Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            paddingLeft: '6px',
            borderLeft: '1px solid #e2e8f0'
          }} className="hidden-mobile">
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#0f2a4a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)'
            }}>
              VS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
