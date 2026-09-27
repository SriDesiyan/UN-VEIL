import React from 'react';
import { 
  Users, 
  Key, 
  Globe, 
  Coins, 
  FileText, 
  ArrowRight, 
  ShieldAlert, 
  ExternalLink,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_PERSONAS } from '../data/mockData';
import { PersonaProfile, NavigationModule } from '../types';

interface ActorsViewProps {
  onSelectActor: (actor: PersonaProfile) => void;
  onNavigateToGraph: (actor: PersonaProfile) => void;
  onOpenWhy: () => void;
}

export const ActorsView: React.FC<ActorsViewProps> = ({
  onSelectActor,
  onNavigateToGraph,
  onOpenWhy
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="ENTITY RESOLUTION & PERSONA DOSSIERS"
        title="Observed Threat Personas"
        subtitle="Tracking pseudonymous actor evolution, cryptographic key transitions, and infrastructure continuity."
        action={
          <button 
            className="btn-secondary" 
            onClick={onOpenWhy}
            style={{ fontSize: '12px' }}
          >
            <HelpCircle size={14} color="#0284c7" />
            <span>Attribution Rationale</span>
          </button>
        }
      />

      {/* Non-Identity Legal Disclaimer */}
      <div style={{
        padding: '12px 16px',
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <ShieldAlert size={18} color="#d97706" style={{ flexShrink: 0 }} />
        <p style={{ fontSize: '11px', color: '#92400e', margin: 0, lineHeight: 1.5 }}>
          <strong>Forensic Integrity Standard:</strong> Pseudonymous personas represent observed digital handles and infrastructure orchestration profiles. UN-VEIL maintains an evidence-supported <em>Candidate Linkage</em> posture; no persona is asserted as a confirmed physical individual without independent legal process and human analyst adjudication.
        </p>
      </div>

      {/* Personas Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
        gap: '20px'
      }}>
        {MOCK_PERSONAS.map(actor => (
          <div 
            key={actor.id} 
            className="portal-card" 
            style={{ 
              padding: '22px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              gap: '16px' 
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: actor.id === 'P-001' ? '#0f2a4a' : '#1e1b4b',
                    border: '1px solid #334155',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {actor.id}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0a192f', margin: 0 }}>
                        {actor.primaryHandle}
                      </h3>
                      <span className="badge badge-amber" style={{ fontSize: '9px' }}>
                        {actor.status}
                      </span>
                    </div>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>
                      First Seen: {actor.firstSeen} • Last Seen: {actor.lastSeen}
                    </span>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 800, color: '#0284c7' }}>
                  ACS {actor.hypothesis.acsScore}%
                </span>
              </div>

              {/* Aliases List */}
              <div style={{ marginBottom: '14px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  Observed Aliases & Handles:
                </span>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {actor.knownAliases.map(alias => (
                    <span key={alias} style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: '#f1f5f9',
                      color: '#334155',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      border: '1px solid #cbd5e1'
                    }}>
                      {alias}
                    </span>
                  ))}
                </div>
              </div>

              {/* Summary Dossier */}
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                {actor.summaryDossier}
              </p>

              {/* Key Indicators Overview */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                padding: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                fontSize: '11px'
              }}>
                <div>
                  <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>CRYPTO KEYS</span>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                    {actor.pgpKeys.length} PGP Key
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>WALLETS</span>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                    ${(actor.cryptoWallets[0]?.estimatedBalanceUsd / 1e6 || 0).toFixed(2)}M
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>WRITEPRINT</span>
                  <span style={{ fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-mono)' }}>
                    TTR {actor.stylometry.lexicalDiversityScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '10px', paddingTop: '14px', borderTop: '1px solid #f1f5f9' }}>
              <button 
                className="btn-secondary"
                onClick={() => onSelectActor(actor)}
                style={{ flex: 1, fontSize: '11px' }}
              >
                Inspect Full Dossier
              </button>
              <button 
                className="btn-primary"
                onClick={() => onNavigateToGraph(actor)}
                style={{ flex: 1, fontSize: '11px' }}
              >
                <Users size={13} />
                <span>Focus in Graph</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
