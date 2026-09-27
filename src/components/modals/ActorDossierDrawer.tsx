import React, { useState } from 'react';
import { 
  X, 
  Key, 
  Globe, 
  Coins, 
  FileText, 
  Cpu, 
  ExternalLink, 
  Network, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Server 
} from 'lucide-react';
import { PersonaProfile } from '../../types';

interface ActorDossierDrawerProps {
  actor: PersonaProfile | null;
  onClose: () => void;
  onViewInGraph: (actor: PersonaProfile) => void;
  onViewInCite?: (actor: PersonaProfile) => void;
  onViewInBti?: (actor: PersonaProfile) => void;
}

export const ActorDossierDrawer: React.FC<ActorDossierDrawerProps> = ({
  actor,
  onClose,
  onViewInGraph,
  onViewInCite,
  onViewInBti
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'infra' | 'crypto' | 'stylometry' | 'attribution'>('overview');

  if (!actor) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside 
        className="drawer-panel"
        onClick={e => e.stopPropagation()}
        style={{ width: 'min(640px, 100vw)' }}
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
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-purple" style={{ fontSize: '10px' }}>
                {actor.id}
              </span>
              <span className="badge badge-amber" style={{ fontSize: '10px' }}>
                {actor.status}
              </span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                ACS: {actor.hypothesis.acsScore}%
              </span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 800, margin: '6px 0 0 0', color: '#f8fafc' }}>
              {actor.primaryHandle}
            </h2>
            <p style={{ fontSize: '11px', color: '#cbd5e1', margin: '2px 0 0 0' }}>
              Aliases: {actor.knownAliases.join(', ')}
            </p>
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

        {/* Tab Selection */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          padding: '0 12px',
          overflowX: 'auto'
        }}>
          {[
            { id: 'overview', label: 'Overview & PGP', icon: Key },
            { id: 'infra', label: 'Infrastructure (CITE)', icon: Globe },
            { id: 'crypto', label: 'Blockchain (BTI)', icon: Coins },
            { id: 'stylometry', label: 'Stylometry (PTRW)', icon: FileText },
            { id: 'attribution', label: 'Attribution & WHY', icon: Cpu }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 12px',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #0284c7' : '2px solid transparent',
                  backgroundColor: 'transparent',
                  color: isActive ? '#0284c7' : '#64748b',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '11px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Target Dossier Summary
                </h4>
                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6, margin: 0, backgroundColor: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  {actor.summaryDossier}
                </p>
              </div>

              {/* Observed Timeline & Source Metadata */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
                    OBSERVATION WINDOW
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '4px' }}>
                    {actor.firstSeen} → {actor.lastSeen}
                  </span>
                  <span style={{ fontSize: '10px', color: '#64748b' }}>Controlled testbed timeline</span>
                </div>
                <div style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
                    PRIMARY SOURCE
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '4px' }}>
                    {actor.primarySource}
                  </span>
                  <span style={{ fontSize: '10px', color: '#64748b' }}>WARC verified</span>
                </div>
              </div>

              {/* OpenPGP Keys Section */}
              <div>
                <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Verified Cryptographic Keys ({actor.pgpKeys.length})
                </h4>
                {actor.pgpKeys.map(k => (
                  <div key={k.keyId} style={{ padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700, color: '#0284c7' }}>
                        Key ID: 0x{k.keyId}
                      </span>
                      <span className="badge badge-emerald" style={{ fontSize: '9px' }}>
                        {k.algorithm} • {k.bitLength}-BIT
                      </span>
                    </div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#475569', marginBottom: '6px' }}>
                      <strong>Fingerprint:</strong> {k.fingerprint}
                    </div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>
                      Created: {k.createdDate} • Verified signed statements in case corpus: {k.verifiedSignedMessages}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'infra' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', margin: 0 }}>
                  Correlated Hidden Services & Origin Clearnet
                </h4>
                {onViewInCite && (
                  <button className="btn-secondary" onClick={() => onViewInCite(actor)} style={{ padding: '4px 8px', fontSize: '10px' }}>
                    Open CITE Matrix
                  </button>
                )}
              </div>

              {actor.hiddenServices.map(hs => (
                <div key={hs.onionAddress} style={{ padding: '14px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                      {hs.serviceName}
                    </span>
                    <span className={`badge ${hs.status === 'ONLINE' ? 'badge-emerald' : 'badge-slate'}`}>
                      {hs.status}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#0284c7', backgroundColor: '#f1f5f9', padding: '6px 8px', borderRadius: '4px', marginBottom: '10px' }}>
                    {hs.onionAddress}
                  </div>
                  {hs.correlatedClearnetOrigin && (
                    <div style={{ padding: '10px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991b1b', fontSize: '11px', fontWeight: 700, marginBottom: '4px' }}>
                        <Server size={13} />
                        <span>CORRELATED CLEARNET ORIGIN LEAK</span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#7f1d1d', lineHeight: 1.4 }}>
                        <strong>IP:</strong> {hs.correlatedClearnetOrigin.ip} ({hs.correlatedClearnetOrigin.isp}, {hs.correlatedClearnetOrigin.country} - {hs.correlatedClearnetOrigin.asNumber})
                        <div style={{ marginTop: '4px' }}>
                          <strong>Leak Vector:</strong> {hs.correlatedClearnetOrigin.leakDescription}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'crypto' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', margin: 0 }}>
                  Associated Unhosted Wallets
                </h4>
                {onViewInBti && (
                  <button className="btn-secondary" onClick={() => onViewInBti(actor)} style={{ padding: '4px 8px', fontSize: '10px' }}>
                    Open BTI Ledger
                  </button>
                )}
              </div>

              {actor.cryptoWallets.map(w => (
                <div key={w.address} style={{ padding: '14px', border: '1px solid #cbd5e1', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="badge badge-amber">{w.currency}</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{w.clusterTag}</span>
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#065f46' }}>
                      ${(w.estimatedBalanceUsd / 1e6).toFixed(2)}M USD
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#0f172a', backgroundColor: '#f8fafc', padding: '6px 8px', borderRadius: '4px', marginBottom: '8px', wordBreak: 'break-all' }}>
                    {w.address}
                  </div>
                  <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>
                    <strong>Tainted Source:</strong> {w.taintedSource} ({w.transactionCount} transactions observed).
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'stylometry' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h4 style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', margin: 0 }}>
                PTRW Stylometric Fingerprint
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ padding: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>LEXICAL DIVERSITY (TTR)</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>{actor.stylometry.lexicalDiversityScore}</span>
                </div>
                <div style={{ padding: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px' }}>
                  <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>FUNCTION WORD OVERLAP</span>
                  <span style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>{actor.stylometry.functionWordOverlap}%</span>
                </div>
              </div>
              <div style={{ padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '11px', lineHeight: 1.5, color: '#334155' }}>
                <div><strong>Punctuation Habit:</strong> {actor.stylometry.punctuationFingerprint}</div>
                <div style={{ marginTop: '6px' }}><strong>Temporal Window:</strong> {actor.stylometry.postingTimeWindowUtc} ({actor.stylometry.peakHourDistribution})</div>
                <div style={{ marginTop: '6px' }}><strong>Cadence:</strong> {actor.stylometry.burstCadence}</div>
              </div>
              <div style={{ padding: '10px 12px', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '6px', fontSize: '11px', color: '#92400e' }}>
                <strong>Advisory Lead Notice:</strong> Writing habits provide circumstantial correlation and never constitute definitive biometric proof of physical authorship.
              </div>
            </div>
          )}

          {activeTab === 'attribution' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ padding: '14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="badge badge-amber">{actor.hypothesis.posture}</span>
                  <span style={{ fontSize: '14px', fontWeight: 800, fontFamily: 'var(--font-mono)', color: '#0284c7' }}>
                    ACS: {actor.hypothesis.acsScore}%
                  </span>
                </div>
                <p style={{ fontSize: '11px', color: '#334155', lineHeight: 1.5, margin: 0 }}>
                  {actor.hypothesis.decisionReasoning}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#991b1b', display: 'block', marginBottom: '6px' }}>
                  UNRESOLVED CONTRADICTIONS:
                </span>
                {actor.hypothesis.contradictions.map((c, i) => (
                  <div key={i} style={{ padding: '8px 10px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', fontSize: '11px', color: '#991b1b' }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button className="btn-secondary" onClick={onClose}>
            Close Dossier
          </button>
          <button 
            className="btn-primary"
            onClick={() => {
              onClose();
              onViewInGraph(actor);
            }}
          >
            <Network size={14} />
            <span>Open in Temporal Graph</span>
          </button>
        </div>
      </aside>
    </div>
  );
};
