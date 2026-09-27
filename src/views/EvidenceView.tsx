import React, { useState } from 'react';
import { 
  FileSearch, 
  Search, 
  Database, 
  Hash, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Download,
  Copy,
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_EVIDENCE } from '../data/mockData';
import { EvidenceArtifact } from '../types';

interface EvidenceViewProps {
  onOpenWhy: () => void;
  selectedEvidenceId?: string;
}

export const EvidenceView: React.FC<EvidenceViewProps> = ({
  onOpenWhy,
  selectedEvidenceId
}) => {
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [activeArtifact, setActiveArtifact] = useState<EvidenceArtifact>(() => {
    if (selectedEvidenceId) {
      return MOCK_EVIDENCE.find(e => e.id === selectedEvidenceId) || MOCK_EVIDENCE[0];
    }
    return MOCK_EVIDENCE[0];
  });
  const [copiedHash, setCopiedHash] = useState(false);

  const filteredEvidence = MOCK_EVIDENCE.filter(e => {
    const matchesGroup = selectedGroup === 'ALL' || e.group.toUpperCase() === selectedGroup;
    const q = search.toLowerCase();
    const matchesSearch = 
      e.id.toLowerCase().includes(q) ||
      e.evidenceType.toLowerCase().includes(q) ||
      e.source.toLowerCase().includes(q) ||
      e.contentSummary.toLowerCase().includes(q) ||
      e.sha256Hash.toLowerCase().includes(q);
    return matchesGroup && matchesSearch;
  });

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="EVIDENCE PRESERVATION VAULT // FORENSIC PROVENANCE"
        title="Evidence Artifact Explorer"
        subtitle="Cryptographically verified WARC archives, extraction lineage, and temporal observation records."
        action={
          <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
            <span>Attribution Rationale</span>
          </button>
        }
      />

      {/* Search and Category Filter */}
      <div className="portal-card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '240px' }}>
          <Search size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Search by Evidence ID, Type, Source, WARC Reference or SHA-256..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-sans)',
              color: '#0f172a'
            }}
          />
        </div>

        {/* Group Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {['ALL', 'CRYPTOGRAPHIC', 'INFRASTRUCTURE', 'BLOCKCHAIN', 'STYLOMETRIC', 'CONTRADICTION', 'TEMPORAL'].map(grp => (
            <button
              key={grp}
              onClick={() => setSelectedGroup(grp)}
              style={{
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                padding: '3px 8px',
                borderRadius: '4px',
                border: selectedGroup === grp ? '1px solid #0284c7' : '1px solid #cbd5e1',
                backgroundColor: selectedGroup === grp ? '#f0f9ff' : '#ffffff',
                color: selectedGroup === grp ? '#0284c7' : '#64748b',
                cursor: 'pointer'
              }}
            >
              {grp}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Artifact List + Provenance Inspector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
        gap: '20px',
        alignItems: 'start'
      }}>
        {/* Artifacts List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredEvidence.map(art => {
            const isSelected = activeArtifact.id === art.id;
            return (
              <div
                key={art.id}
                onClick={() => setActiveArtifact(art)}
                className="portal-card"
                style={{
                  padding: '16px',
                  cursor: 'pointer',
                  borderLeft: isSelected ? '4px solid #0284c7' : (art.isContradiction ? '4px solid #ef4444' : '1px solid rgba(226, 232, 240, 0.9)'),
                  backgroundColor: isSelected ? '#f8fafc' : '#ffffff',
                  transition: 'all 0.12s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '12px', color: '#0284c7' }}>
                      {art.id}
                    </span>
                    <span className={`badge ${art.isContradiction ? 'badge-red' : 'badge-cyan'}`} style={{ fontSize: '9px' }}>
                      {art.group}
                    </span>
                  </div>
                  <span className={`badge ${art.sourceReliability === 'HIGH' ? 'badge-emerald' : 'badge-amber'}`} style={{ fontSize: '9px' }}>
                    {art.sourceReliability} RELIABILITY
                  </span>
                </div>

                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>
                  {art.evidenceType}
                </h4>

                <p style={{ fontSize: '11px', color: '#475569', lineHeight: 1.5, margin: '0 0 8px 0' }}>
                  {art.contentSummary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                  <span>Source: {art.source}</span>
                  <span>{art.capturedTimestamp}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Provenance & Cryptographic Hash Details */}
        <div className="portal-card" style={{ padding: '24px', position: 'sticky', top: '90px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase' }}>
              ARTIFACT PROVENANCE AUDIT
            </span>
            <span className={`badge ${activeArtifact.isContradiction ? 'badge-red' : 'badge-emerald'}`}>
              {activeArtifact.isContradiction ? 'CONTRADICTION FLAG' : 'CHAIN OF CUSTODY VERIFIED'}
            </span>
          </div>

          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0a192f', margin: '0 0 4px 0' }}>
            {activeArtifact.id}: {activeArtifact.evidenceType}
          </h3>
          <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 16px 0', fontFamily: 'var(--font-mono)' }}>
            Captured: {activeArtifact.capturedTimestamp}
          </p>

          {/* Cryptographic SHA-256 Hash */}
          <div style={{
            backgroundColor: '#0a192f',
            borderRadius: '6px',
            padding: '12px',
            color: '#f8fafc',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                SHA-256 CRYPTOGRAPHIC CHECKSUM
              </span>
              <button
                onClick={() => handleCopyHash(activeArtifact.sha256Hash)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copiedHash ? '#10b981' : '#94a3b8',
                  cursor: 'pointer',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <Copy size={11} />
                <span>{copiedHash ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: '#e2e8f0',
              wordBreak: 'break-all',
              lineHeight: 1.4
            }}>
              {activeArtifact.sha256Hash}
            </div>
          </div>

          {/* Provenance Table */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            backgroundColor: '#f8fafc',
            padding: '14px',
            borderRadius: '6px',
            border: '1px solid #e2e8f0',
            marginBottom: '16px'
          }}>
            <div>
              <strong style={{ color: '#64748b' }}>WARC URI:</strong>
              <div style={{ color: '#0f172a', wordBreak: 'break-all', marginTop: '2px' }}>
                {activeArtifact.warcReference}
              </div>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '6px' }}>
              <strong style={{ color: '#64748b' }}>Extractor Engine:</strong>
              <div style={{ color: '#0f172a', marginTop: '2px' }}>
                {activeArtifact.extractorVersion} (Confidence: {activeArtifact.extractionConfidence}%)
              </div>
            </div>
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '6px' }}>
              <strong style={{ color: '#64748b' }}>Linked Entities:</strong>
              <div style={{ color: '#0284c7', marginTop: '2px' }}>
                {activeArtifact.linkedEntities.join(' • ')}
              </div>
            </div>
          </div>

          {activeArtifact.isContradiction && (
            <div style={{
              padding: '12px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '6px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#991b1b', fontWeight: 700, fontSize: '11px', marginBottom: '4px' }}>
                <AlertTriangle size={13} />
                <span>CONTRADICTION ANALYSIS</span>
              </div>
              <p style={{ fontSize: '11px', color: '#7f1d1d', margin: 0, lineHeight: 1.4 }}>
                {activeArtifact.contradictionNotes}
              </p>
            </div>
          )}

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn-accent" 
              onClick={onOpenWhy}
              style={{ flex: 1, fontSize: '11px' }}
            >
              <span>Explain in WHY Panel</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
