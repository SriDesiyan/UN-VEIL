import React from 'react';
import { 
  ShieldAlert, 
  ArrowRight, 
  Network, 
  FileSearch, 
  Cpu, 
  Layers, 
  Lock, 
  Server, 
  Database,
  ExternalLink 
} from 'lucide-react';
import { PRIMARY_CASE_ID } from '../data/mockData';

interface LandingHeroProps {
  onEnterPortal: () => void;
  onOpenCase: () => void;
  onOpenWhy: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onEnterPortal,
  onOpenCase,
  onOpenWhy
}) => {
  return (
    <div className="landing-container">
      {/* Autoplaying Loop Video */}
      <video
        className="landing-video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/tracenet-hero-cinematic-loop.webm" type="video/webm" />
      </video>

      {/* Radial Gradient Overlay */}
      <div className="landing-video-overlay" />

      {/* Main Content Layer */}
      <div className="landing-content">
        {/* Cinematic Header */}
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 36px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(9, 21, 38, 0.75)',
          backdropFilter: 'blur(12px)',
          position: 'sticky',
          top: 0,
          zIndex: 50
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '6px',
              backgroundColor: '#0a192f',
              border: '1px solid #1a3d66',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8'
            }}>
              <ShieldAlert size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.04em' }}>
                  UN-VEIL
                </span>
                <span style={{
                  fontSize: '9px',
                  fontFamily: 'var(--font-mono)',
                  padding: '1px 5px',
                  borderRadius: '3px',
                  backgroundColor: '#0f2a4a',
                  color: '#38bdf8',
                  border: '1px solid #1a3d66'
                }}>
                  FED-CORE v2.6.1
                </span>
              </div>
              <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                NTRO Cyber Forensics Testbed // SIH26151
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onOpenWhy}
              style={{
                background: 'rgba(15, 42, 74, 0.6)',
                border: '1px solid #1a3d66',
                color: '#38bdf8',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>View Evidence Rationale</span>
              <ExternalLink size={12} />
            </button>
            <button
              onClick={onEnterPortal}
              style={{
                backgroundColor: '#0284c7',
                border: '1px solid #0369a1',
                color: '#ffffff',
                padding: '7px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 0 15px rgba(2, 132, 199, 0.35)'
              }}
            >
              <span>Enter Evidence Console</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </header>

        {/* Hero Body */}
        <div style={{
          flex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* Eyebrow Chip */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(15, 42, 74, 0.65)',
            border: '1px solid #1a3d66',
            borderRadius: '999px',
            padding: '4px 14px',
            marginBottom: '20px',
            color: '#38bdf8',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} className="pulse-indicator" />
            <span>ACTIVE INVESTIGATION TESTBED // {PRIMARY_CASE_ID}</span>
          </div>

          {/* Hero Heading */}
          <h1 style={{
            fontSize: 'clamp(32px, 5.5vw, 54px)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            maxWidth: '960px',
            marginBottom: '18px'
          }}>
            Temporal Entity Attribution, <br />
            <span style={{
              background: 'linear-gradient(to right, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Strictly Grounded in Forensic Evidence.
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            maxWidth: '680px',
            lineHeight: 1.6,
            marginBottom: '32px'
          }}>
            Cross-layer infrastructure triangulation (CITE), blockchain transaction intelligence (BTI), and writeprint stylometry (PTRW) fused into an explainable temporal attribution graph with explicit contradiction tracking and formal abstention.
          </p>

          {/* Primary Action Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px' }}>
            <button
              onClick={onEnterPortal}
              style={{
                backgroundColor: '#0284c7',
                border: '1px solid #0369a1',
                color: '#ffffff',
                padding: '12px 26px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(2, 132, 199, 0.4)'
              }}
            >
              <span>Launch Operations Dashboard</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onOpenCase}
              style={{
                backgroundColor: 'rgba(15, 42, 74, 0.8)',
                border: '1px solid #1a3d66',
                color: '#e2e8f0',
                padding: '12px 22px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileSearch size={16} color="#38bdf8" />
              <span>Inspect Case Dossier</span>
            </button>
          </div>

          {/* Metric Badges Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            width: '100%',
            maxWidth: '920px',
            textAlign: 'left'
          }}>
            <div style={{
              backgroundColor: 'rgba(10, 25, 47, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                CONTROLLED EVIDENCE
              </div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', margin: '4px 0' }}>
                7 Artifacts
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                WARC & SHA-256 preserved
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(10, 25, 47, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                INDEPENDENT SIGNALS
              </div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', margin: '4px 0' }}>
                4 Corroborations
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Crypto, Infra, Writeprint, Ledger
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(10, 25, 47, 0.75)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#f43f5e', fontWeight: 700 }}>
                CONTRADICTION FLAG
              </div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#fecdd3', margin: '4px 0' }}>
                1 Collision
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                EV-26151-041 (Active penalty)
              </div>
            </div>

            <div style={{
              backgroundColor: 'rgba(10, 25, 47, 0.75)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#fbbf24', fontWeight: 700 }}>
                CURRENT ATTRIBUTION
              </div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: '#fef3c7', margin: '4px 0' }}>
                78.4% ACS
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Investigative Lead (Not proof)
              </div>
            </div>
          </div>
        </div>

        {/* Cinematic Footer Notice */}
        <div style={{
          padding: '12px 36px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          backgroundColor: 'rgba(9, 21, 38, 0.85)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '11px',
          fontFamily: 'var(--font-mono)',
          color: '#64748b'
        }}>
          <div>
            UN-VEIL Core Architecture: PostgreSQL • Neo4j • Qdrant • S3/MinIO
          </div>
          <div>
            Collection ≠ Attribution • Final Attribution Governed by Decision Policy
          </div>
        </div>
      </div>
    </div>
  );
};
