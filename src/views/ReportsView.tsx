import React from 'react';
import { 
  FileDown, 
  FileText, 
  Table, 
  Database, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  Printer, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { PRIMARY_CASE_ID, MOCK_CASES, MOCK_PERSONAS, MOCK_EVIDENCE } from '../data/mockData';

interface ReportsViewProps {
  onNotify: (msg: string) => void;
  onOpenWhy: () => void;
}

export const ReportsView: React.FC<ReportsViewProps> = ({
  onNotify,
  onOpenWhy
}) => {
  const currentCase = MOCK_CASES[0];

  const handleExport = (format: string) => {
    // Generate deterministic demo file download
    const filename = `UNVEIL_${currentCase.id}_${format}_EXPORT.${format.toLowerCase() === 'pdf' ? 'txt' : format.toLowerCase()}`;
    const content = `================================================================================
PROJECT UN-VEIL // FORENSIC INTELLIGENCE DOSSIER (CONTROLLED CORPUS)
AUTHORITY: 28 U.S.C. § 1746 ATTESTED FORENSIC SUMMARY
CASE ID: ${currentCase.id}
OPERATION: ${currentCase.title}
LEAD AGENCY: ${currentCase.leadAgency}
ANALYST: ${currentCase.assignedAnalyst}
DATE GENERATED: ${new Date().toISOString()} UTC
CLASSIFICATION: CUI // LAW ENFORCEMENT SENSITIVE // TLP:AMBER
================================================================================

1. EXECUTIVE SUMMARY & ATTRIBUTION POSTURE
--------------------------------------------------------------------------------
Primary Target: ${currentCase.primarySubject} (P-001)
Secondary Target: ${currentCase.secondarySubject} (P-002)
Current Attribution Posture: ${currentCase.posture}
Attribution Confidence Score (ACS): ${currentCase.fusionScore}%

EVALUATION NOTICE:
The correlation linking NightHarbor to NightRiver is supported across four (4)
independent technical domains: OpenPGP key rotation endorsement (EV-26151-014),
dual-SAN Let's Encrypt infrastructure continuity on VPS 185.220.101.44 (EV-26151-021),
direct unmixed Bitcoin peel chain value movement (EV-26151-038), and 84.2% function-word
stylometric continuity (EV-26151-032).

CONTRADICTION STATEMENT:
Artifact EV-26151-041 documents concurrent administrative sessions in Iran and Bulgaria
on 2026-08-21 03:12 UTC. In accordance with UN-VEIL Decision Policy 4.2, this temporal
conflict prevents corroborated candidate declaration, holding the status strictly at
INVESTIGATIVE LEAD.

2. PRESERVED EVIDENCE LEDGER & CHAIN OF CUSTODY
--------------------------------------------------------------------------------
${MOCK_EVIDENCE.map(e => `[${e.id}] ${e.evidenceType}
  Source: ${e.source} (Reliability: ${e.sourceReliability})
  Captured: ${e.capturedTimestamp}
  WARC URI: ${e.warcReference}
  SHA-256: ${e.sha256Hash}
  Extractor: ${e.extractorVersion} (Confidence: ${e.extractionConfidence}%)
  Contradiction: ${e.isContradiction ? 'YES - ACTIVE PENALTY' : 'NO - CORROBORATIVE'}
`).join('\n')}

3. MATHEMATICAL FUSION BREAKDOWN
--------------------------------------------------------------------------------
Formula: z = β0 + β_I(I) + β_C(C) + β_S(S) + β_B(B) + β_T(T) + β_R(R) - β_X(X)
Base Intercept: -1.2
Infrastructure Signal: +2.1
Cryptographic Signal: +2.8
Stylometric Signal: +1.9
Blockchain Signal: +1.4
Contradiction Penalty: -2.4 (Collision active)
Calculated z = 1.29  --> ACS = 100 * sigmoid(z) = 78.4%

================================================================================
END OF UN-VEIL ATTESTED FORENSIC DOSSIER
================================================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onNotify(`${format} dossier successfully downloaded with cryptographic provenance.`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="FORENSIC REPORTING & INTELLIGENCE SHARING"
        title="Forensic Export Facility"
        subtitle="Produce court-admissible dossiers, STIX 2.1 threat intelligence bundles, and grand jury evidence indices."
        action={
          <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
            <span>Attribution Rationale</span>
          </button>
        }
      />

      {/* Case Overview Card */}
      <div style={{
        background: 'linear-gradient(135deg, #0a192f 0%, #0f2a4a 100%)',
        borderRadius: '8px',
        padding: '24px',
        color: '#ffffff',
        border: '1px solid #1a3d66'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span className="badge badge-amber">{currentCase.posture}</span>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#38bdf8' }}>
            ATTESTED DOSSIER // {currentCase.id}
          </span>
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 6px 0', color: '#f8fafc' }}>
          {currentCase.title}
        </h2>
        <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5, maxWidth: '780px', margin: 0 }}>
          Every exported dossier incorporates the full provenance chain-of-custody, WARC byte offsets, SHA-256 hashes, mathematical fusion coefficients, and unmitigated contradiction disclosures.
        </p>
      </div>

      {/* 4 Export Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px'
      }}>
        <div className="portal-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', marginBottom: '12px' }}>
              <FileText size={20} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Formal Dossier</h4>
              <span className="badge badge-emerald">PDF / TXT</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Comprehensive investigative narrative containing lead analysis, timeline sequence, and contradiction statements.
            </p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => handleExport('PDF')}
            style={{ width: '100%', fontSize: '11px' }}
          >
            <Download size={13} />
            <span>Download Dossier</span>
          </button>
        </div>

        <div className="portal-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', marginBottom: '12px' }}>
              <Database size={20} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>STIX 2.1 Bundle</h4>
              <span className="badge badge-cyan">JSON</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              OASIS STIX 2.1 interoperable threat-actor, infrastructure, indicator, and identity-hypothesis objects.
            </p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => handleExport('STIX_JSON')}
            style={{ width: '100%', fontSize: '11px' }}
          >
            <Download size={13} />
            <span>Export STIX 2.1</span>
          </button>
        </div>

        <div className="portal-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', marginBottom: '12px' }}>
              <Table size={20} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Grand Jury Index</h4>
              <span className="badge badge-amber">CSV</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Tabular index of evidence IDs, capture timestamps, WARC offsets, SHA-256 hashes, and reliability scores.
            </p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => handleExport('CSV')}
            style={{ width: '100%', fontSize: '11px' }}
          >
            <Download size={13} />
            <span>Export CSV Table</span>
          </button>
        </div>

        <div className="portal-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '36px', height: '36px', borderRadius: '6px', backgroundColor: '#faf5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333ea', marginBottom: '12px' }}>
              <FileDown size={20} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Raw Evidence Dump</h4>
              <span className="badge badge-purple">JSON</span>
            </div>
            <p style={{ fontSize: '11px', color: '#64748b', lineHeight: 1.5, margin: '0 0 16px 0' }}>
              Complete JSON export of entities, graph edges, and cryptographic parameters for archive backups.
            </p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => handleExport('JSON')}
            style={{ width: '100%', fontSize: '11px' }}
          >
            <Download size={13} />
            <span>Dump Raw JSON</span>
          </button>
        </div>
      </div>
    </div>
  );
};
