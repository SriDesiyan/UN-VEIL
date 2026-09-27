import React from 'react';
import { 
  X, 
  HelpCircle, 
  GitBranch, 
  ShieldAlert, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Hash, 
  Clock 
} from 'lucide-react';
import { MOCK_EVIDENCE } from '../../data/mockData';

interface WhyPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToEvidence?: () => void;
  onNavigateToGraph?: () => void;
}

export const WhyPanel: React.FC<WhyPanelProps> = ({
  isOpen,
  onClose,
  onNavigateToEvidence,
  onNavigateToGraph
}) => {
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside 
        className="drawer-panel"
        onClick={e => e.stopPropagation()}
        style={{ width: 'min(580px, 100vw)' }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 20px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0a192f',
          color: '#ffffff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#0f2a4a',
              border: '1px solid #1a3d66',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8'
            }}>
              <HelpCircle size={18} />
            </div>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                RELATIONSHIP EXPLAINABILITY RATIONALE
              </div>
              <h2 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: '#f8fafc' }}>
                Why does UN-VEIL link these personas?
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Target Hypothesis Pair */}
          <div style={{
            padding: '14px',
            backgroundColor: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span className="badge badge-amber">INVESTIGATIVE LEAD</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                CURRENT ACS: 78.4%
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '10px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0a192f', display: 'block' }}>NightHarbor</span>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>P-001 (Legacy)</span>
              </div>
              <div style={{ color: '#0284c7', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <GitBranch size={20} />
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0a192f', display: 'block' }}>NightRiver</span>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>P-002 (Successor)</span>
              </div>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#475569',
              lineHeight: 1.5,
              marginTop: '10px',
              marginBottom: 0
            }}>
              <strong>Evidence-First Posture:</strong> This linkage is an investigative hypothesis supported by corroborating signals across 4 independent sources. It is <em>not</em> an assertion of verified individual identity.
            </p>
          </div>

          {/* Section 1: Supporting Evidence */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: '#065f46',
              marginBottom: '8px'
            }}>
              <CheckCircle2 size={14} color="#059669" />
              <span>SUPPORTING EVIDENCE (4 INDEPENDENT GROUPS)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#166534' }}>1. Cryptographic Key Transition</span>
                  <span className="badge badge-emerald">HIGH RELIABILITY</span>
                </div>
                <p style={{ fontSize: '11px', color: '#14532d', margin: 0, lineHeight: 1.4 }}>
                  EV-26151-014: Master key 7AC419F2 directly signed and endorsed subkey B910C24A utilized by NightRiver during operational transition.
                </p>
              </div>

              <div style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#166534' }}>2. Cross-Layer Infrastructure Overlap</span>
                  <span className="badge badge-emerald">HIGH RELIABILITY</span>
                </div>
                <p style={{ fontSize: '11px', color: '#14532d', margin: 0, lineHeight: 1.4 }}>
                  EV-26151-021: Identical Let's Encrypt X.509 certificate SAN issued for both harbor-sync.is and river-sync-node.is hosted on Bulgarian VPS 185.220.101.44.
                </p>
              </div>

              <div style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#166534' }}>3. Public Ledger Peel Chain Link</span>
                  <span className="badge badge-emerald">HIGH RELIABILITY</span>
                </div>
                <p style={{ fontSize: '11px', color: '#14532d', margin: 0, lineHeight: 1.4 }}>
                  EV-26151-038: 14.85 BTC transferred directly from NightHarbor splitter address into NightRiver deposit address without CoinJoin/mixer obfuscation.
                </p>
              </div>

              <div style={{ padding: '10px 12px', borderRadius: '6px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#166534' }}>4. Stylometric Writeprint (PTRW)</span>
                  <span className="badge badge-cyan">MEDIUM RELIABILITY</span>
                </div>
                <p style={{ fontSize: '11px', color: '#14532d', margin: 0, lineHeight: 1.4 }}>
                  EV-26151-032: 84.2% function-word correlation across 14,200 forum tokens. Guardrail: short-text samples excluded from certainty scores.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Contradictory Evidence */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              color: '#991b1b',
              marginBottom: '8px'
            }}>
              <AlertTriangle size={14} color="#dc2626" />
              <span>CONTRADICTORY EVIDENCE (ACTIVE FLAG)</span>
            </div>
            <div style={{ padding: '12px', borderRadius: '6px', border: '1px solid #fecaca', backgroundColor: '#fef2f2' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#991b1b' }}>
                  EV-26151-041: Simultaneous Active Session Collision
                </span>
                <span className="badge badge-red">CRITICAL PENALTY (-2.4)</span>
              </div>
              <p style={{ fontSize: '11px', color: '#7f1d1d', margin: 0, lineHeight: 1.5 }}>
                On 2026-08-21 at 03:12 UTC, active authenticated Jabber sessions were simultaneously recorded from AS58224 (Iran) under NightHarbor and AS206216 (Bulgaria) under NightRiver. This concurrent telemetry contradicts a single-human alias migration hypothesis, enforcing the <strong>INVESTIGATIVE LEAD</strong> state instead of corroborated proof.
              </p>
            </div>
          </div>

          {/* Section 3: Independence & Temporal Integrity */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            padding: '12px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px'
          }}>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 700 }}>
                INDEPENDENT GROUPS
              </div>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0a192f', display: 'block', marginTop: '2px' }}>
                4 Sources
              </span>
              <span style={{ fontSize: '10px', color: '#64748b' }}>No double-counted duplicates</span>
            </div>
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 700 }}>
                TEMPORAL OVERLAP
              </div>
              <span style={{ fontSize: '16px', fontWeight: 800, color: '#0a192f', display: 'block', marginTop: '2px' }}>
                44 Days
              </span>
              <span style={{ fontSize: '10px', color: '#64748b' }}>12 JUL 2026 – 25 AUG 2026</span>
            </div>
          </div>

          {/* Section 4: Provenance Vault */}
          <div style={{
            padding: '12px',
            backgroundColor: '#ffffff',
            border: '1px solid #cbd5e1',
            borderRadius: '6px'
          }}>
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0284c7', marginBottom: '6px' }}>
              FORENSIC PROVENANCE METADATA
            </div>
            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#334155', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div><strong>WARC ID:</strong> warc://controlled-corpus/case-26151/20260712-102214-warc.gz</div>
              <div><strong>SHA-256:</strong> a8f190c12847be6630f9a21b3c901842e01934ba9823104f7620bcde10293481</div>
              <div><strong>Extractor:</strong> UNVEIL-FUSION-FABRIC v2.6.1</div>
              <div><strong>Capture Authority:</strong> NTRO Cyber Testbed (Authorized Controlled Corpus)</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-end'
        }}>
          {onNavigateToGraph && (
            <button 
              className="btn-secondary"
              onClick={() => {
                onClose();
                onNavigateToGraph();
              }}
            >
              Focus in Graph
            </button>
          )}
          {onNavigateToEvidence && (
            <button 
              className="btn-primary"
              onClick={() => {
                onClose();
                onNavigateToEvidence();
              }}
            >
              Inspect Evidence Trail
              <ExternalLink size={13} />
            </button>
          )}
        </div>
      </aside>
    </div>
  );
};
