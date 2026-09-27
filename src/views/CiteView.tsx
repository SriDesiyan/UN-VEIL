import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Server, 
  Key, 
  Activity, 
  ArrowRight, 
  AlertCircle, 
  Layers,
  Lock,
  ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';

interface CiteViewProps {
  onOpenWhy?: () => void;
}

export const CiteView: React.FC<CiteViewProps> = ({ onOpenWhy }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="CORE ANALYTICS 1 // INFRASTRUCTURE TRIANGULATION"
        title="CITE — Cross-Layer Infrastructure Triangulation Engine"
        subtitle="Correlating Tor hidden services, TLS certificates, SSH host fingerprints, and application leaks to clearnet hosting."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Multi-Signal Triangulation Architecture Notice */}
      <div style={{
        padding: '14px 18px',
        backgroundColor: '#f0f9ff',
        border: '1px solid #bae6fd',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px'
      }}>
        <Layers size={18} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#0369a1', display: 'block' }}>
            Multi-Signal Infrastructure Triangulation Rule
          </span>
          <p style={{ fontSize: '11px', color: '#0c4a6e', margin: '4px 0 0 0', lineHeight: 1.5 }}>
            <strong>CITE Policy:</strong> A single TLS certificate or IP match is treated strictly as an uncorroborated lead. Robust triangulation requires evidence fusion across at least three decoupled technical layers: cryptographic X.509 certificates, transport-layer host keys, and application-layer misconfiguration disclosures.
          </p>
        </div>
      </div>

      {/* Multi-Layer Flow Diagram */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0a192f', marginBottom: '16px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
          Active Triangulation Pipeline // CASE-26151-001
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '14px',
          alignItems: 'center'
        }}>
          {/* Step 1: Tor V3 Ingress */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Globe size={16} color="#64748b" />
              <span className="badge badge-slate">LAYER 1: TOR ONION</span>
            </div>
            <strong style={{ fontSize: '12px', color: '#0f172a', display: 'block' }}>harbor77...onion</strong>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>HSDir keepalive drift: 20 min</span>
          </div>

          {/* Step 2: TLS SAN Overlap */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Lock size={16} color="#0284c7" />
              <span className="badge badge-cyan">LAYER 2: TLS X.509</span>
            </div>
            <strong style={{ fontSize: '12px', color: '#0f172a', display: 'block' }}>EV-26151-021 (Dual SAN)</strong>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>harbor-sync ↔ river-sync</span>
          </div>

          {/* Step 3: SSH Host Fingerprint */}
          <div style={{ padding: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Key size={16} color="#8b5cf6" />
              <span className="badge badge-purple">LAYER 3: SSH HOST</span>
            </div>
            <strong style={{ fontSize: '12px', color: '#0f172a', display: 'block' }}>EV-26151-042 (ED25519)</strong>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>Port 22 Key Overlap</span>
          </div>

          {/* Step 4: Clearnet Origin Leak */}
          <div style={{ padding: '16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Server size={16} color="#dc2626" />
              <span className="badge badge-red">LAYER 4: ORIGIN VPS</span>
            </div>
            <strong style={{ fontSize: '12px', color: '#991b1b', display: 'block' }}>185.220.101.44</strong>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#7f1d1d' }}>Belcloud Hosting (AS206216)</span>
          </div>
        </div>
      </div>

      {/* Triangulation Evidence Packets */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
        gap: '20px'
      }}>
        {/* Packet 1 */}
        <div className="portal-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span className="badge badge-emerald">CONFIRMED TRIANGULATION</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>Confidence: 96%</span>
          </div>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0a192f', margin: '0 0 6px 0' }}>
            Apache Mod_Status Worker Telemetry Leak
          </h4>
          <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: '0 0 12px 0' }}>
            Endpoint <code>/server-status</code> improperly exposed worker thread metadata. Disclosed loopback gateway <code>185.220.101.44:8080</code> serving virtual host <code>harbor-sync.is</code> and <code>river-sync-node.is</code>.
          </p>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <div><strong>Origin IP:</strong> 185.220.101.44</div>
            <div><strong>Autonomous System:</strong> AS206216 (Belcloud High-Availability)</div>
            <div><strong>Country:</strong> Bulgaria 🇧🇬</div>
          </div>
        </div>

        {/* Packet 2 */}
        <div className="portal-card" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span className="badge badge-emerald">CONFIRMED CONTINUITY</span>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>Confidence: 98%</span>
          </div>
          <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#0a192f', margin: '0 0 6px 0' }}>
            ED25519 SSH Host Key Fingerprint Persistence
          </h4>
          <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: '0 0 12px 0' }}>
            Public key probe on port 22 verified identical host key fingerprint <code>SHA-256:7uT4wBq3s10xVp9L4kMz82jF1qW</code> across both deployment epochs, confirming the exact same server instance persisted across the alias transition.
          </p>
          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
            <div><strong>OpenSSH Version:</strong> OpenSSH_8.9p1 Ubuntu-3ubuntu0.6</div>
            <div><strong>Key Algorithm:</strong> ssh-ed25519</div>
            <div><strong>Correlated Asset:</strong> srv-03.harbor-sync.is</div>
          </div>
        </div>
      </div>
    </div>
  );
};
