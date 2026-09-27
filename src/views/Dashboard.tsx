import React from 'react';
import { 
  Briefcase, 
  Users, 
  FileSearch, 
  AlertTriangle, 
  ArrowRight, 
  HelpCircle, 
  Network, 
  Bot, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Clock,
  KeyRound,
  CheckCircle2
} from 'lucide-react';
import { StatCard } from '../components/common/StatCard';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_CASES, MOCK_PERSONAS, MOCK_EVIDENCE, MOCK_ACTIVITY_FEED, PRIMARY_CASE_ID } from '../data/mockData';
import { NavigationModule } from '../types';

interface DashboardProps {
  onNavigate: (module: NavigationModule) => void;
  onOpenWhy: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigate,
  onOpenWhy
}) => {
  const currentCase = MOCK_CASES.find(c => c.id === PRIMARY_CASE_ID) || MOCK_CASES[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Top Banner / Case Orientation */}
      <div style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #0f2a4a 60%, #172a45 100%)',
        borderRadius: '10px',
        padding: '24px 28px',
        color: '#ffffff',
        border: '1px solid #1a3d66',
        boxShadow: '0 4px 12px rgba(10, 25, 47, 0.15)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        <div style={{ maxWidth: '640px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-amber">ACTIVE INVESTIGATION</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
              PHASE IV // CROSS-LAYER FUSION
            </span>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 6px 0', letterSpacing: '-0.02em', color: '#f8fafc' }}>
            {currentCase.title}
          </h1>
          <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
            {currentCase.summary}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '16px' }}>
            <button 
              className="btn-accent" 
              onClick={() => onNavigate('graph')}
              style={{ padding: '8px 16px', fontSize: '12px' }}
            >
              <Network size={14} />
              <span>Explore Temporal Graph</span>
              <ArrowRight size={13} />
            </button>
            <button 
              className="btn-secondary" 
              onClick={onOpenWhy}
              style={{ padding: '8px 14px', fontSize: '12px', backgroundColor: '#0f2a4a', color: '#e2e8f0', borderColor: '#1a3d66' }}
            >
              <HelpCircle size={14} color="#38bdf8" />
              <span>Why This Link?</span>
            </button>
          </div>
        </div>

        {/* Case Progression Card */}
        <div style={{
          backgroundColor: 'rgba(9, 21, 38, 0.75)',
          border: '1px solid #1a3d66',
          borderRadius: '8px',
          padding: '18px',
          width: '310px',
          backdropFilter: 'blur(8px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8', textTransform: 'uppercase' }}>
              ATTRIBUTION STRENGTH
            </span>
            <span style={{ fontSize: '16px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#fbbf24' }}>
              ACS 78.4%
            </span>
          </div>

          <div style={{ height: '6px', backgroundColor: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginBottom: '10px' }}>
            <div style={{ width: '78.4%', height: '100%', backgroundColor: '#0284c7', borderRadius: '3px' }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
            <span>7 Evidence Objects</span>
            <span style={{ color: '#f87171' }}>1 Contradiction</span>
          </div>

          <div style={{
            marginTop: '12px',
            paddingTop: '10px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '11px',
            color: '#cbd5e1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>Decision State:</span>
            <span className="badge badge-amber">INVESTIGATIVE LEAD</span>
          </div>
        </div>
      </div>

      {/* Top 4 Metrics Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
        gap: '16px'
      }}>
        <StatCard
          label="Active Cases"
          value="01"
          sublabel="Controlled SIH-26151 Testbed"
          icon={Briefcase}
          accentColor="#0284c7"
          badge="CASE-001"
          badgeTone="cyan"
          onClick={() => onNavigate('cases')}
        />
        <StatCard
          label="Target Personas"
          value="02"
          sublabel="NightHarbor ↔ NightRiver"
          icon={Users}
          accentColor="#8b5cf6"
          badge="REVIEW"
          badgeTone="purple"
          onClick={() => onNavigate('actors')}
        />
        <StatCard
          label="Preserved Evidence"
          value="07"
          sublabel="WARC & SHA-256 Validated"
          icon={FileSearch}
          accentColor="#10b981"
          badge="FUSED"
          badgeTone="emerald"
          onClick={() => onNavigate('evidence')}
        />
        <StatCard
          label="Contradiction Flags"
          value="01"
          sublabel="Active Session Time Collision"
          icon={AlertTriangle}
          accentColor="#f43f5e"
          badge="PENALTY"
          badgeTone="red"
          onClick={onOpenWhy}
        />
      </div>

      {/* Main Grid: Temporal Graph Preview + Investigation Queue */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
        gap: '20px'
      }}>
        {/* Left Column: Mini Temporal Graph */}
        <div className="portal-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
          <SectionHeader
            eyebrow="TEMPORAL EVIDENCE GRAPH (ELTAG)"
            title="Entity Linkage Matrix"
            subtitle="Click NightRiver or any edge to inspect relationship rationale."
            action={
              <button 
                className="btn-secondary" 
                onClick={() => onNavigate('graph')}
                style={{ fontSize: '11px', padding: '5px 10px' }}
              >
                <span>Full Graph</span>
                <ArrowRight size={12} />
              </button>
            }
          />

          {/* Mini Interactive SVG Graph */}
          <div 
            className="graph-canvas"
            style={{
              height: '260px',
              borderRadius: '6px',
              border: '1px solid #1e293b',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <svg viewBox="0 0 700 240" style={{ width: '100%', height: '100%' }}>
              {/* Edges */}
              <line x1="160" y1="120" x2="350" y2="70" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="350" y1="70" x2="540" y2="120" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="160" y1="120" x2="350" y2="180" stroke="#f43f5e" strokeWidth="2" />
              <line x1="350" y1="180" x2="540" y2="120" stroke="#f43f5e" strokeWidth="2" />
              <line x1="160" y1="120" x2="540" y2="120" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="6 3" />

              {/* Edge Hit / Callout */}
              <g 
                style={{ cursor: 'pointer' }}
                onClick={onOpenWhy}
              >
                <rect x="275" y="108" width="150" height="24" rx="4" fill="#091526" stroke="#0284c7" strokeWidth="1" />
                <text x="350" y="124" fill="#38bdf8" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">
                  PGP + 3 Corroborations
                </text>
              </g>

              {/* Legacy Node: NightHarbor */}
              <g transform="translate(160, 120)">
                <circle r="36" fill="#0f2a4a" stroke="#38bdf8" strokeWidth="2" />
                <text textAnchor="middle" y="-2" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--font-sans)">NightHarbor</text>
                <text textAnchor="middle" y="12" fill="#94a3b8" fontSize="9" fontFamily="var(--font-mono)">P-001</text>
              </g>

              {/* Cryptographic Node */}
              <g transform="translate(350, 70)">
                <circle r="26" fill="#172554" stroke="#60a5fa" strokeWidth="1.5" />
                <text textAnchor="middle" y="3" fill="#bfdbfe" fontSize="10" fontFamily="var(--font-mono)">PGP Key</text>
              </g>

              {/* VPS Node */}
              <g transform="translate(350, 180)">
                <circle r="26" fill="#3f1d24" stroke="#f43f5e" strokeWidth="1.5" />
                <text textAnchor="middle" y="3" fill="#fecdd3" fontSize="10" fontFamily="var(--font-mono)">VPS Origin</text>
              </g>

              {/* Successor Node: NightRiver */}
              <g 
                transform="translate(540, 120)" 
                style={{ cursor: 'pointer' }}
                onClick={onOpenWhy}
              >
                <circle r="36" fill="#0f2a4a" stroke="#10b981" strokeWidth="2" />
                <text textAnchor="middle" y="-2" fill="#ffffff" fontSize="11" fontWeight="700" fontFamily="var(--font-sans)">NightRiver</text>
                <text textAnchor="middle" y="12" fill="#34d399" fontSize="9" fontFamily="var(--font-mono)">P-002</text>
              </g>
            </svg>

            {/* Float Action */}
            <div style={{
              position: 'absolute',
              bottom: '10px',
              right: '12px',
              display: 'flex',
              gap: '6px'
            }}>
              <button 
                onClick={onOpenWhy}
                style={{
                  backgroundColor: 'rgba(9, 21, 38, 0.9)',
                  border: '1px solid #1a3d66',
                  color: '#38bdf8',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                Explain Linkage ➔
              </button>
            </div>
          </div>

          {/* Graph Legend */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
            marginTop: '12px'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />
              Persona
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#60a5fa' }} />
              Cryptographic
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f43f5e' }} />
              Infrastructure
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '12px', height: '2px', backgroundColor: '#dc2626' }} />
              Contradiction Link
            </span>
          </div>
        </div>

        {/* Right Column: Investigation Queue & Posture */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Current Hypothesis Card */}
          <div className="portal-card" style={{ padding: '20px' }}>
            <SectionHeader
              eyebrow="ATTRIBUTION POSTURE"
              title="Hypothesis Evaluation"
              action={<span className="badge badge-amber">LEAD (ACS 78.4%)</span>}
            />
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
              NightHarbor ↔ NightRiver linkage is backed by 4 independent corroboration groups. However, simultaneous authenticated session traffic on 2026-08-21 mandates that the system <strong>abstain</strong> from corroborated candidate status.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '6px'
            }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#0f172a', display: 'block' }}>
                  Contradiction Penalty Active
                </span>
                <span style={{ fontSize: '10px', color: '#64748b' }}>
                  Score penalized by -2.4 points in fusion formula
                </span>
              </div>
              <button 
                onClick={onOpenWhy}
                className="btn-secondary" 
                style={{ fontSize: '11px', padding: '5px 10px' }}
              >
                Inspect Why
              </button>
            </div>
          </div>

          {/* Investigation Attention Queue */}
          <div className="portal-card" style={{ padding: '20px', flex: 1 }}>
            <SectionHeader
              eyebrow="ANALYST ATTENTION QUEUE"
              title="Open Discrepancies"
              action={<span className="badge badge-red">2 PENDING</span>}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div 
                style={{
                  padding: '12px',
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={onOpenWhy}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertTriangle size={14} color="#dc2626" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#991b1b' }}>
                      Review Temporal Conflict EV-26151-041
                    </span>
                  </div>
                  <span className="badge badge-red">HIGH</span>
                </div>
                <p style={{ fontSize: '11px', color: '#7f1d1d', margin: 0, lineHeight: 1.4 }}>
                  Simultaneous Jabber sessions in Iran & Bulgaria prevent attribution certainty.
                </p>
              </div>

              <div 
                style={{
                  padding: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => onNavigate('evidence')}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <KeyRound size={14} color="#0284c7" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>
                      Validate PGP Rotation Packet
                    </span>
                  </div>
                  <span className="badge badge-cyan">MEDIUM</span>
                </div>
                <p style={{ fontSize: '11px', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                  Cross-verify key packet EV-26151-014 against full marketplace corpus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Intelligence Activity Feed */}
      <div className="portal-card" style={{ padding: '20px' }}>
        <SectionHeader
          eyebrow="AUDIT TRAIL // REAL-TIME LOG"
          title="Recent Intelligence Activity"
          subtitle="Preserved ingestions, telemetry scans, and contradiction events."
          action={
            <button 
              className="btn-secondary" 
              onClick={() => onNavigate('timeline')}
              style={{ fontSize: '11px', padding: '5px 10px' }}
            >
              <span>View Full Timeline</span>
              <ArrowRight size={12} />
            </button>
          }
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '12px'
        }}>
          {MOCK_ACTIVITY_FEED.map((item) => (
            <div 
              key={item.id}
              style={{
                padding: '12px 14px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                backgroundColor: '#f8fafc'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className={`badge badge-${item.badgeTone}`}>
                  {item.badgeText}
                </span>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  {item.relativeTime}
                </span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', marginBottom: '3px' }}>
                {item.actorHandle}
              </div>
              <p style={{ fontSize: '11px', color: '#475569', margin: 0, lineHeight: 1.4 }}>
                {item.summary}
              </p>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8', marginTop: '6px' }}>
                {item.id} • {item.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
