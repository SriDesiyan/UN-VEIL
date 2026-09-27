import React from 'react';
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  Clock, 
  HelpCircle,
  ShieldCheck 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_PERSONAS } from '../data/mockData';

interface PtrwViewProps {
  onOpenWhy?: () => void;
}

export const PtrwView: React.FC<PtrwViewProps> = ({ onOpenWhy }) => {
  const p1 = MOCK_PERSONAS[0];
  const p2 = MOCK_PERSONAS[1];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="CORE ANALYTICS 3 // STYLOMETRIC NLP"
        title="PTRW — Paraphrase-Robust Temporal Writeprint"
        subtitle="Stylometric author verification, syntactic branching patterns, and posting-cadence synchronization."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Short-Text Caution Banner */}
      <div style={{
        padding: '14px 18px',
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', display: 'block' }}>
            Stylometric Guardrail: Short-Text Sample Attenuation
          </span>
          <p style={{ fontSize: '11px', color: '#78350f', margin: '4px 0 0 0', lineHeight: 1.5 }}>
            <strong>PTRW Scientific Limitation:</strong> Writing samples under 150 tokens exhibit high variance and are disqualified from contributing to high-confidence attribution. Stylometric writeprints are circumstantial advisory signals. They must always be corroborated by independent cryptographic or infrastructure layers.
          </p>
        </div>
      </div>

      {/* Comparative Writeprint Table */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0a192f', marginBottom: '16px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
          Writeprint Comparison: NightHarbor vs NightRiver
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px'
        }}>
          {/* Legacy Actor PTRW */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span className="badge badge-cyan">{p1.primaryHandle} (LEGACY CORPUS)</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>42 Verified Samples</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>LEXICAL DIVERSITY (TTR)</span>
                <strong style={{ fontSize: '16px', color: '#0f172a' }}>{p1.stylometry.lexicalDiversityScore}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>AVERAGE SENTENCE LENGTH</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>{p1.stylometry.averageSentenceLength} words</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>PUNCTUATION PATTERNS</span>
                <span style={{ color: '#334155' }}>{p1.stylometry.punctuationFingerprint}</span>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>ACTIVE POSTING WINDOW (UTC)</span>
                <strong style={{ color: '#0284c7', fontFamily: 'var(--font-mono)' }}>{p1.stylometry.postingTimeWindowUtc}</strong>
              </div>
            </div>
          </div>

          {/* Successor Actor PTRW */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span className="badge badge-emerald">{p2.primaryHandle} (SUCCESSOR CORPUS)</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>18 Verified Samples</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>LEXICAL DIVERSITY (TTR)</span>
                <strong style={{ fontSize: '16px', color: '#0f172a' }}>{p2.stylometry.lexicalDiversityScore}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>AVERAGE SENTENCE LENGTH</span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>{p2.stylometry.averageSentenceLength} words</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>PUNCTUATION PATTERNS</span>
                <span style={{ color: '#334155' }}>{p2.stylometry.punctuationFingerprint}</span>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '10px', display: 'block' }}>ACTIVE POSTING WINDOW (UTC)</span>
                <strong style={{ color: '#0284c7', fontFamily: 'var(--font-mono)' }}>{p2.stylometry.postingTimeWindowUtc}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Correlation Metric */}
        <div style={{
          marginTop: '20px',
          padding: '16px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#166534', display: 'block' }}>
              Overall Function-Word Overlap Correlation
            </span>
            <span style={{ fontSize: '11px', color: '#15803d' }}>
              High syntactic continuity across coordinating conjunctions and adverbial prepositions.
            </span>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#15803d' }}>
            84.2% Match
          </span>
        </div>
      </div>
    </div>
  );
};
