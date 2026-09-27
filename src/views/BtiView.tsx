import React from 'react';
import { 
  Coins, 
  ArrowRight, 
  ShieldAlert, 
  ExternalLink, 
  Layers, 
  TrendingUp,
  HelpCircle,
  Database
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';

interface BtiViewProps {
  onOpenWhy?: () => void;
}

export const BtiView: React.FC<BtiViewProps> = ({ onOpenWhy }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="CORE ANALYTICS 2 // BLOCKCHAIN INTELLIGENCE"
        title="BTI — Blockchain Transaction Intelligence"
        subtitle="Analyzing transparent ledger peel chains, unhosted escrow splitters, and counterparty clusters."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Wallet ≠ Person Disclaimer */}
      <div style={{
        padding: '14px 18px',
        backgroundColor: '#fffbeb',
        border: '1px solid #fde68a',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <ShieldAlert size={18} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#92400e', display: 'block' }}>
            Ledger Attribution Standard: Pseudonymous Wallet ≠ Physical Individual
          </span>
          <p style={{ fontSize: '11px', color: '#78350f', margin: '4px 0 0 0', lineHeight: 1.5 }}>
            <strong>BTI Guardrail:</strong> Blockchain transactions establish value movement and cryptographic control across unhosted key pairs. They do not constitute biometric or physical identity proof. UN-VEIL utilizes transparent public ledgers (Bitcoin / EVM) to formulate investigative leads, while acknowledging mixer hops and CoinJoin liquidity pools.
          </p>
        </div>
      </div>

      {/* Controlled Peel Chain Visualization */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0a192f', margin: 0, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Observed Value Transfer // Tx 8f9b204c (Block #884192)
          </h3>
          <span className="badge badge-emerald">DIRECT PEEL CHAIN (NO MIXER)</span>
        </div>

        {/* Peel Chain Diagram */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          gap: '16px',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#0a192f',
          borderRadius: '8px',
          color: '#ffffff'
        }}>
          {/* Source Wallet: NightHarbor */}
          <div style={{ padding: '16px', backgroundColor: '#0f2a4a', border: '1px solid #1a3d66', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span className="badge badge-cyan">SOURCE: NIGHTHARBOR</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>148 Txs</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#38bdf8', wordBreak: 'break-all', marginBottom: '6px' }}>
              bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>
              Balance: 142.50 BTC (~$1.42M USD)
            </div>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>Cluster: NightHarbor Splitter #1</span>
          </div>

          {/* Transfer Arrow & Hop */}
          <div style={{ textAlign: 'center', padding: '0 8px' }}>
            <span className="badge badge-amber" style={{ fontSize: '11px', padding: '4px 8px', display: 'inline-block', marginBottom: '6px' }}>
              14.85 BTC (~$148,500 USD)
            </span>
            <div style={{ color: '#f59e0b', display: 'flex', justifyContent: 'center' }}>
              <ArrowRight size={24} />
            </div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8', display: 'block', marginTop: '4px' }}>
              Unmixed Hop
            </span>
          </div>

          {/* Destination Wallet: NightRiver */}
          <div style={{ padding: '16px', backgroundColor: '#0f2a4a', border: '1px solid #1a3d66', borderRadius: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span className="badge badge-emerald">DESTINATION: NIGHTRIVER</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>34 Txs</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#34d399', wordBreak: 'break-all', marginBottom: '6px' }}>
              bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc' }}>
              Balance: 14.85 BTC (~$148,500 USD)
            </div>
            <span style={{ fontSize: '10px', color: '#94a3b8' }}>Cluster: NightRiver Ingress Vault #2</span>
          </div>
        </div>
      </div>

      {/* Counterparty Analysis */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '20px'
      }}>
        <div className="portal-card" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a192f', marginBottom: '10px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Associated Counterparties & Mixer Egress
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
            <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>Wasabi CoinJoin Egress Pool #4</strong>
                <div style={{ fontSize: '10px', color: '#64748b' }}>Zurich Mixer Relay</div>
              </div>
              <span className="badge badge-amber">MIXED FLOW</span>
            </div>

            <div style={{ padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>Dubai OTC Broker Desk (Unregulated)</strong>
                <div style={{ fontSize: '10px', color: '#64748b' }}>High-Frequency Settlement</div>
              </div>
              <span className="badge badge-red">SANCTIONS WATCH</span>
            </div>
          </div>
        </div>

        <div className="portal-card" style={{ padding: '20px' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0a192f', marginBottom: '10px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
            Ledger Extraction Provenance
          </h4>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', display: 'flex', flexDirection: 'column', gap: '6px', color: '#334155' }}>
            <div><strong>Artifact ID:</strong> EV-26151-038</div>
            <div><strong>Block Height:</strong> Block #884192 (Mined 2026-08-08 14:05 UTC)</div>
            <div><strong>Confirmations:</strong> 2,410 blocks</div>
            <div><strong>Extractor:</strong> UNVEIL-BTI-LEDGER v1.8.0</div>
            <div><strong>Extraction Confidence:</strong> 99.1% (Deterministic on-chain proof)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
