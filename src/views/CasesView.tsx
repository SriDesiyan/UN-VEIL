import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Database, 
  FolderLock, 
  ExternalLink,
  Download
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_CASES } from '../data/mockData';
import { CaseRecord, NavigationModule } from '../types';

interface CasesViewProps {
  onNavigate: (module: NavigationModule) => void;
  onOpenExport: () => void;
}

export const CasesView: React.FC<CasesViewProps> = ({
  onNavigate,
  onOpenExport
}) => {
  const [search, setSearch] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseRecord>(MOCK_CASES[0]);

  const filteredCases = MOCK_CASES.filter(c => 
    c.id.toLowerCase().includes(search.toLowerCase()) ||
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.primarySubject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="CASE MANAGEMENT & EVIDENCE VAULT"
        title="Active Investigation Cases"
        subtitle="Controlled multi-persona case registries maintained in compliance with forensic chain-of-custody protocols."
        action={
          <button 
            className="btn-primary" 
            onClick={onOpenExport}
            style={{ fontSize: '12px' }}
          >
            <Download size={14} />
            <span>Export Case Dossier</span>
          </button>
        }
      />

      {/* Search and Filter Toolbar */}
      <div className="portal-card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '240px' }}>
          <Search size={16} color="#64748b" />
          <input
            type="text"
            placeholder="Search by Case ID, Operation Title, or Target Subject..."
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="badge badge-slate">
            {filteredCases.length} OF {MOCK_CASES.length} CASES
          </span>
          <span className="badge badge-emerald">
            CONTROLLED CORPUS
          </span>
        </div>
      </div>

      {/* Cases Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Case ID / Title</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Primary Target</th>
              <th>Evidence</th>
              <th>Contradictions</th>
              <th>Fusion Score</th>
              <th>Last Updated</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCases.map(c => {
              const isSelected = selectedCase.id === c.id;
              return (
                <tr 
                  key={c.id} 
                  style={{ backgroundColor: isSelected ? 'rgba(240, 249, 255, 0.7)' : undefined }}
                >
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0284c7' }}>
                        {c.id}
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', display: 'block', marginTop: '2px' }}>
                      {c.title}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      c.status.includes('ACTIVE') ? 'badge-amber' : 
                      c.status.includes('UNDER') ? 'badge-cyan' : 'badge-red'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      c.priority === 'CRITICAL' ? 'badge-red' : 'badge-amber'
                    }`}>
                      {c.priority}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontWeight: 600, color: '#1e293b' }}>{c.primarySubject}</span>
                    <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>➔ {c.secondarySubject}</span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {c.evidenceCount} objects
                  </td>
                  <td>
                    {c.contradictionCount > 0 ? (
                      <span className="badge badge-red">{c.contradictionCount} Flag</span>
                    ) : (
                      <span className="badge badge-emerald">0 Clean</span>
                    )}
                  </td>
                  <td>
                    <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: c.fusionScore > 75 ? '#0284c7' : '#d97706' }}>
                      {c.fusionScore}%
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b' }}>
                    {c.updatedDate}
                  </td>
                  <td>
                    <button
                      className="btn-secondary"
                      onClick={() => {
                        setSelectedCase(c);
                        if (c.id === 'CASE-26151-001') {
                          onNavigate('actors');
                        }
                      }}
                      style={{ fontSize: '11px', padding: '4px 8px' }}
                    >
                      <span>Open</span>
                      <ArrowRight size={12} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Case Detail Card */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-cyan">{selectedCase.id}</span>
              <span className="badge badge-amber">{selectedCase.posture}</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0a192f', margin: 0 }}>
              {selectedCase.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0 0' }}>
              {selectedCase.subtitle}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="btn-secondary"
              onClick={() => onNavigate('actors')}
            >
              View Personas
            </button>
            <button 
              className="btn-primary"
              onClick={() => onNavigate('graph')}
            >
              Open Temporal Graph
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* Case Metadata Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          padding: '16px',
          backgroundColor: '#f8fafc',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          marginBottom: '16px'
        }}>
          <div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
              LEAD AGENCY & ANALYST
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '2px' }}>
              {selectedCase.assignedAnalyst}
            </span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>{selectedCase.leadAgency}</span>
          </div>

          <div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
              TARGET INFRASTRUCTURE
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
              {selectedCase.targetInfrastructure}
            </span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Triangulated origin VPS</span>
          </div>

          <div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
              TRACKED CRYPTOCURRENCY
            </span>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#065f46', display: 'block', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
              ${(selectedCase.trackedCryptoUsd / 1e6).toFixed(2)}M USD
            </span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Unhosted peel chains</span>
          </div>

          <div>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', textTransform: 'uppercase', display: 'block' }}>
              INVESTIGATION PHASE
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', display: 'block', marginTop: '2px' }}>
              {selectedCase.investigationPhase}
            </span>
            <span style={{ fontSize: '11px', color: '#64748b' }}>Audit gate active</span>
          </div>
        </div>

        {/* Forensic Storage Separation Box */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '14px 16px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '8px'
        }}>
          <Database size={18} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#166534', display: 'block' }}>
              Architectural Logical Storage Preservation
            </span>
            <p style={{ fontSize: '11px', color: '#15803d', margin: '4px 0 0 0', lineHeight: 1.5 }}>
              This prototype honors the production tiering boundary: <strong>PostgreSQL</strong> stores structured case metadata and access controls; <strong>Neo4j</strong> models the temporal attribution graph (ELTAG); <strong>Qdrant</strong> stores stylometric writeprint embeddings; and <strong>S3/MinIO</strong> preserves raw WARC captures with cryptographic SHA-256 integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
