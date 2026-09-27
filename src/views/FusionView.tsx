import React from 'react';
import { 
  Cpu, 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldAlert,
  Sliders,
  Scale 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_PERSONAS } from '../data/mockData';

interface FusionViewProps {
  onOpenWhy?: () => void;
}

export const FusionView: React.FC<FusionViewProps> = ({ onOpenWhy }) => {
  const hypothesis = MOCK_PERSONAS[0].hypothesis;
  const bd = hypothesis.formulaFormulaBreakdown;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="EVIDENCE FUSION LAYER & DECISION POLICY"
        title="Attribution Confidence Scoring (ACS) Engine"
        subtitle="Mathematical fusion across decoupled intelligence signals, penalty attribution, and formal analytical abstention."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Abstention As A Feature Banner */}
      <div style={{
        padding: '16px 20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '14px'
      }}>
        <AlertTriangle size={20} color="#dc2626" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#991b1b' }}>
              Analytical Posture: ABSTAIN FROM AUTOMATED CORROBORATION
            </span>
            <span className="badge badge-red">CONTRADICTION RULE TRIGGERED</span>
          </div>
          <p style={{ fontSize: '11px', color: '#7f1d1d', margin: 0, lineHeight: 1.5 }}>
            UN-VEIL refuses to force a deanonymization verdict when contradictory evidence exists. Because artifact <strong>EV-26151-041</strong> confirmed simultaneous administrative sessions in Bulgaria and Iran, the system subtracts a <strong>-2.4 contradiction penalty</strong>, holding the posture at <strong>INVESTIGATIVE LEAD (78.4%)</strong>. Abstention is a legitimate, rigorous analytical outcome.
          </p>
        </div>
      </div>

      {/* Mathematical Formulation Card */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0a192f', margin: 0, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Evidence Fusion Logistic Formulation
          </h3>
          <span className="badge badge-cyan">MODEL v2.6.1</span>
        </div>

        {/* Formula Display Box */}
        <div style={{
          backgroundColor: '#0a192f',
          color: '#f8fafc',
          borderRadius: '8px',
          padding: '18px 24px',
          fontFamily: 'var(--font-mono)',
          marginBottom: '20px',
          overflowX: 'auto'
        }}>
          <div style={{ fontSize: '14px', color: '#38bdf8', marginBottom: '8px' }}>
            z = β₀ + β_I·I + β_C·C + β_S·S + β_B·B + β_T·T + β_R·R − β_X·X
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc' }}>
            ACS = 100 × [ 1 / (1 + e^(−z)) ] = 78.4%
          </div>
        </div>

        {/* Linear Signal Decomposition Breakdown */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>BASE INTERCEPT (β₀)</span>
            <strong style={{ fontSize: '15px', color: '#0f172a' }}>{bd.baseIntercept}</strong>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>Prior baseline</span>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>INFRASTRUCTURE (β_I·I)</span>
            <strong style={{ fontSize: '15px', color: '#15803d' }}>+{bd.infrastructureSignal}</strong>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>TLS SAN & SSH</span>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>CRYPTOGRAPHIC (β_C·C)</span>
            <strong style={{ fontSize: '15px', color: '#15803d' }}>+{bd.cryptographicSignal}</strong>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>PGP cross-signing</span>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>STYLOMETRIC (β_S·S)</span>
            <strong style={{ fontSize: '15px', color: '#15803d' }}>+{bd.stylometricSignal}</strong>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>PTRW writeprint</span>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>BLOCKCHAIN (β_B·B)</span>
            <strong style={{ fontSize: '15px', color: '#15803d' }}>+{bd.behavioralSignal}</strong>
            <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>Direct peel chain</span>
          </div>

          <div style={{ padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px' }}>
            <span style={{ fontSize: '10px', color: '#991b1b', display: 'block' }}>CONTRADICTION (−β_X·X)</span>
            <strong style={{ fontSize: '15px', color: '#dc2626' }}>−{bd.contradictionPenalty}</strong>
            <span style={{ fontSize: '10px', color: '#991b1b', display: 'block' }}>Session collision</span>
          </div>
        </div>
      </div>

      {/* Decision Policy Thresholds */}
      <div className="portal-card" style={{ padding: '20px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a192f', marginBottom: '12px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
          Attribution Decision Matrix & Policies
        </h4>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          <div style={{ padding: '12px', borderRadius: '6px', border: '1px solid #bbf7d0', backgroundColor: '#f0fdf4' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>ACS ≥ 85% & CONTRADICTIONS = 0</span>
            <strong style={{ fontSize: '12px', color: '#166534', display: 'block' }}>CORROBORATED CANDIDATE</strong>
            <p style={{ fontSize: '10px', color: '#15803d', margin: '4px 0 0 0' }}>Multi-layer proof verified across independent authorities with zero temporal conflict.</p>
          </div>

          <div style={{ padding: '12px', borderRadius: '6px', border: '2px solid #0284c7', backgroundColor: '#f0f9ff' }}>
            <span className="badge badge-cyan" style={{ marginBottom: '4px' }}>65% ≤ ACS &lt; 85% OR CONFLICT &gt; 0</span>
            <strong style={{ fontSize: '12px', color: '#0369a1', display: 'block' }}>INVESTIGATIVE LEAD (CURRENT)</strong>
            <p style={{ fontSize: '10px', color: '#0c4a6e', margin: '4px 0 0 0' }}>Sufficient independent signals to guide investigative focus, but barred from definitive finding.</p>
          </div>

          <div style={{ padding: '12px', borderRadius: '6px', border: '1px solid #fde68a', backgroundColor: '#fffbeb' }}>
            <span className="badge badge-amber" style={{ marginBottom: '4px' }}>ACS &lt; 65%</span>
            <strong style={{ fontSize: '12px', color: '#92400e', display: 'block' }}>NEEDS MORE EVIDENCE</strong>
            <p style={{ fontSize: '10px', color: '#78350f', margin: '4px 0 0 0' }}>Signals weak or short-text samples dominate. Handoff to agentic crawler for re-collection.</p>
          </div>

          <div style={{ padding: '12px', borderRadius: '6px', border: '1px solid #fecaca', backgroundColor: '#fef2f2' }}>
            <span className="badge badge-red" style={{ marginBottom: '4px' }}>CONFLICT SCORE &gt; 3.0</span>
            <strong style={{ fontSize: '12px', color: '#991b1b', display: 'block' }}>FORMAL ABSTENTION</strong>
            <p style={{ fontSize: '10px', color: '#7f1d1d', margin: '4px 0 0 0' }}>Incompatible cryptographic assertions or mutually exclusive alibis trigger formal abstention.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
