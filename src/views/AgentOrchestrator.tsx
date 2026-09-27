import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileText, 
  Terminal, 
  Sparkles,
  Layers,
  HelpCircle 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_AGENT_TASKS } from '../data/mockData';

interface AgentOrchestratorProps {
  onOpenWhy?: () => void;
  onNotify?: (msg: string) => void;
}

export const AgentOrchestrator: React.FC<AgentOrchestratorProps> = ({
  onOpenWhy,
  onNotify
}) => {
  const [query, setQuery] = useState('What evidence supports the NightHarbor to NightRiver lead, and why has the system not confirmed attribution?');
  const [hasInvestigated, setHasInvestigated] = useState(true);

  const handleRunInvestigation = () => {
    setHasInvestigated(true);
    if (onNotify) {
      onNotify('Read-only evidence retrieval & gap analysis completed.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="AGENTIC INVESTIGATION ORCHESTRATOR // READ-ONLY COORDINATOR"
        title="Automated Evidence Gap Analysis & Routing"
        subtitle="Autonomous task decomposition and tool routing strictly bounded by read-only forensic access."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Agent Guardrails & Architectural Contract */}
      <div style={{
        padding: '16px 20px',
        backgroundColor: '#0a192f',
        color: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #1a3d66',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px'
      }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '8px',
          backgroundColor: '#0f2a4a',
          border: '1px solid #1a3d66',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
          flexShrink: 0
        }}>
          <Bot size={22} />
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>
              Read-Only Investigation Coordinator Contract
            </span>
            <span className="badge badge-emerald">READ-ONLY AUDIT LOCK</span>
          </div>
          <p style={{ fontSize: '11px', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
            The Investigator functions exclusively as an analytical coordinator: it decomposes case requirements, queries existing stores (PostgreSQL, Neo4j, Qdrant, MinIO), highlights evidence gaps, and suggests next analytical tasks. <strong>The Agent cannot mutate evidence, modify ACS scores, alter graph relationships, or issue final attribution verdicts.</strong> Attribution decisions remain strictly reserved for the Evidence Fusion Engine and certified Human Analyst review.
          </p>
        </div>
      </div>

      {/* Interactive Query Box */}
      <div className="portal-card" style={{ padding: '20px' }}>
        <h4 style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
          Investigate Controlled Case Corpus (CASE-26151-001)
        </h4>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f8fafc'
          }}>
            <Search size={16} color="#64748b" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Ask an investigative hypothesis or evidence gap question..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent',
                fontSize: '13px',
                color: '#0f172a'
              }}
            />
          </div>
          <button 
            className="btn-primary"
            onClick={handleRunInvestigation}
            style={{ fontSize: '12px', padding: '0 18px' }}
          >
            <span>Execute Analysis</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Synthesized Result */}
        {hasInvestigated && (
          <div style={{
            marginTop: '16px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '6px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge badge-emerald">AGENT SYNTHESIS REPORT</span>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#166534' }}>Executed 15:40:00 UTC</span>
            </div>
            <p style={{ fontSize: '12px', color: '#14532d', lineHeight: 1.6, margin: '0 0 12px 0' }}>
              <strong>Investigative Finding:</strong> Strong evidence linkage exists between NightHarbor and NightRiver, corroborated across 4 decoupled channels: OpenPGP key rotation packet (EV-26151-014), dual-SAN Let's Encrypt certificate on VPS 185.220.101.44 (EV-26151-021), 14.85 BTC unmixed direct peel chain hop (EV-26151-038), and 84.2% function-word stylometric continuity (EV-26151-032).
            </p>
            <div style={{
              padding: '10px 12px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              borderRadius: '6px',
              color: '#991b1b',
              fontSize: '11px',
              lineHeight: 1.5
            }}>
              <strong>Unresolved Evidence Gap & Reason for Non-Confirmation:</strong> Artifact EV-26151-041 captured active authenticated Jabber sessions simultaneously in Iran and Bulgaria on 2026-08-21 03:12 UTC. This contradicts a clean single-operator migration hypothesis. <em>Recommended Analyst Task:</em> Subpoena upstream Netflow from Bulgarian AS206216 to ascertain whether session was an automated script or second human co-conspirator.
            </div>
          </div>
        )}
      </div>

      {/* Task Decomposition & Execution Log */}
      <div className="portal-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0a192f', marginBottom: '16px', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
          Autonomous Task Decomposition & Tool Routing
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {MOCK_AGENT_TASKS.map(task => (
            <div 
              key={task.id}
              style={{
                padding: '12px 14px',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                backgroundColor: task.evidenceGap ? '#fef2f2' : '#f8fafc',
                borderLeft: task.evidenceGap ? '4px solid #ef4444' : '4px solid #10b981'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', color: '#0284c7' }}>
                    {task.id}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>
                    {task.taskName}
                  </span>
                </div>
                <span className="badge badge-slate" style={{ fontSize: '9px' }}>
                  {task.toolUsed}
                </span>
              </div>

              <p style={{ fontSize: '11px', color: '#475569', margin: '0 0 6px 0', lineHeight: 1.4 }}>
                {task.summary}
              </p>

              {task.evidenceGap && (
                <div style={{ fontSize: '11px', color: '#991b1b', fontWeight: 600, marginTop: '4px' }}>
                  ⚠️ {task.evidenceGap}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
