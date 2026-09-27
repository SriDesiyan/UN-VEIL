import React, { useState } from 'react';
import { 
  X, 
  FileDown, 
  FileText, 
  Table, 
  Database, 
  ShieldCheck, 
  Download 
} from 'lucide-react';
import { PRIMARY_CASE_ID } from '../../data/mockData';

interface QuickExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: (format: string) => void;
}

export const QuickExportModal: React.FC<QuickExportModalProps> = ({
  isOpen,
  onClose,
  onExport
}) => {
  const [selectedFormat, setSelectedFormat] = useState('PDF');
  const [includeProvenance, setIncludeProvenance] = useState(true);
  const [includeContradictions, setIncludeContradictions] = useState(true);

  if (!isOpen) return null;

  const exportOptions = [
    {
      id: 'PDF',
      title: 'Formal Investigation Dossier (.pdf)',
      desc: 'Court-ready forensic summary with evidence trail, provenance hashes, and methodology statements.',
      icon: FileText,
      badge: 'PROSECUTORIAL'
    },
    {
      id: 'STIX_JSON',
      title: 'STIX 2.1 Threat Intelligence (.json)',
      desc: 'Structured cyber threat indicators, attack patterns, identity-hypothesis objects, and infrastructure links.',
      icon: Database,
      badge: 'INTEROPERABLE'
    },
    {
      id: 'CSV',
      title: 'Grand Jury Forensic Evidence Table (.csv)',
      desc: 'Tabular artifact index mapping Evidence IDs, capture times, WARC offsets, SHA-256 hashes, and reliability ranks.',
      icon: Table,
      badge: 'INDEX'
    },
    {
      id: 'JSON',
      title: 'Raw Evidence Vault Dump (.json)',
      desc: 'Complete machine-readable JSON bundle of cases, personas, graph topologies, and cryptographic keys.',
      icon: FileDown,
      badge: 'FULL CORPUS'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        style={{
          width: 'min(580px, 94vw)',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #cbd5e1',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}
        onClick={e => e.stopPropagation()}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileDown size={18} color="#38bdf8" />
            <div>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 700 }}>
                FORENSIC EXPORT FACILITY
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: '#f8fafc' }}>
                Export Case Package ({PRIMARY_CASE_ID})
              </h3>
            </div>
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

        {/* Content Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Select Intelligence Format:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exportOptions.map(opt => {
                const Icon = opt.icon;
                const isSelected = selectedFormat === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedFormat(opt.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: isSelected ? '2px solid #0284c7' : '1px solid #cbd5e1',
                      backgroundColor: isSelected ? '#f0f9ff' : '#ffffff',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <div style={{ color: isSelected ? '#0284c7' : '#64748b' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                          {opt.title}
                        </span>
                        <span className="badge badge-slate" style={{ fontSize: '9px' }}>
                          {opt.badge}
                        </span>
                      </div>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0 0', lineHeight: 1.4 }}>
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Export Settings Checklist */}
          <div style={{
            padding: '12px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={includeProvenance}
                onChange={e => setIncludeProvenance(e.target.checked)}
              />
              <span>Include full cryptographic SHA-256 hashes & WARC archive offsets</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={includeContradictions}
                onChange={e => setIncludeContradictions(e.target.checked)}
              />
              <span>Attach unmitigated contradiction ledger (EV-26151-041)</span>
            </label>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            color: '#64748b',
            fontFamily: 'var(--font-mono)'
          }}>
            <ShieldCheck size={14} color="#059669" />
            <span>Controlled Demo Mode: Generates an attested in-browser export package.</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px'
        }}>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="btn-primary"
            onClick={() => {
              onExport(selectedFormat);
              onClose();
            }}
          >
            <Download size={14} />
            <span>Generate {selectedFormat} Package</span>
          </button>
        </div>
      </div>
    </div>
  );
};
