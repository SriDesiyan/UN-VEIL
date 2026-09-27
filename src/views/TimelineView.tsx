import React, { useState } from 'react';
import { 
  Clock, 
  Filter, 
  ArrowRight, 
  AlertTriangle, 
  Key, 
  Globe, 
  Coins, 
  FileText, 
  ShieldAlert,
  ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_TIMELINE } from '../data/mockData';
import { NavigationModule } from '../types';

interface TimelineViewProps {
  onNavigateToEvidence?: (evidenceId?: string) => void;
  onOpenWhy?: () => void;
}

export const TimelineView: React.FC<TimelineViewProps> = ({
  onNavigateToEvidence,
  onOpenWhy
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredEvents = MOCK_TIMELINE.filter(ev => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'conflict') return ev.isContradiction;
    return ev.category === filterCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'alias': return <Key size={14} color="#0284c7" />;
      case 'infra': return <Globe size={14} color="#f43f5e" />;
      case 'write': return <FileText size={14} color="#8b5cf6" />;
      case 'wallet': return <Coins size={14} color="#d97706" />;
      case 'conflict': return <AlertTriangle size={14} color="#dc2626" />;
      default: return <Clock size={14} color="#64748b" />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <SectionHeader
        eyebrow="TEMPORAL CORRELATION // OBSERVATION TRAIL"
        title="Temporal Investigation Timeline"
        subtitle="Chronological sequence of captured evidence, operational transitions, and detected contradictions."
        action={
          onOpenWhy && (
            <button className="btn-secondary" onClick={onOpenWhy} style={{ fontSize: '11px' }}>
              <span>Attribution Rationale</span>
            </button>
          )
        }
      />

      {/* Filter Toolbar */}
      <div className="portal-card" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
          Event Category:
        </span>
        {[
          { id: 'all', label: 'All Observations' },
          { id: 'alias', label: 'Identifiers & PGP' },
          { id: 'infra', label: 'Infrastructure (CITE)' },
          { id: 'write', label: 'Writing (PTRW)' },
          { id: 'wallet', label: 'Blockchain (BTI)' },
          { id: 'conflict', label: 'Contradiction Alerts' }
        ].map(cat => {
          const isActive = filterCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: isActive ? '1px solid #0284c7' : '1px solid #cbd5e1',
                backgroundColor: isActive ? '#f0f9ff' : '#ffffff',
                color: isActive ? '#0284c7' : '#475569',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Vertical Timeline Card */}
      <div className="portal-card" style={{ padding: '28px 24px' }}>
        <div style={{ position: 'relative' }}>
          {/* Central Line */}
          <div style={{
            position: 'absolute',
            left: '110px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            backgroundColor: '#e2e8f0'
          }} />

          {/* Timeline Events List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {filteredEvents.map(event => (
              <div 
                key={event.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  position: 'relative'
                }}
              >
                {/* Date Column */}
                <div style={{
                  width: '95px',
                  textAlign: 'right',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#475569',
                  paddingTop: '2px'
                }}>
                  {event.formattedDate}
                </div>

                {/* Node Bullet */}
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: event.isContradiction ? '#fee2e2' : '#ffffff',
                  border: event.isContradiction ? '2px solid #ef4444' : '2px solid #0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  flexShrink: 0
                }}>
                  {getCategoryIcon(event.category)}
                </div>

                {/* Event Card Content */}
                <div style={{
                  flex: 1,
                  backgroundColor: event.isContradiction ? '#fef2f2' : '#f8fafc',
                  border: event.isContradiction ? '1px solid #fecaca' : '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '14px 16px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={`badge ${event.isContradiction ? 'badge-red' : 'badge-cyan'}`} style={{ fontSize: '9px' }}>
                        {event.category.toUpperCase()}
                      </span>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                        Linked: {event.entity}
                      </span>
                    </div>
                    {event.isContradiction && (
                      <span className="badge badge-red" style={{ fontSize: '9px' }}>
                        ACS PENALIZED
                      </span>
                    )}
                  </div>

                  <h4 style={{ fontSize: '14px', fontWeight: 800, color: event.isContradiction ? '#991b1b' : '#0f172a', margin: '4px 0 6px 0' }}>
                    {event.title}
                  </h4>

                  <p style={{ fontSize: '12px', color: event.isContradiction ? '#7f1d1d' : '#334155', lineHeight: 1.5, margin: '0 0 10px 0' }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '8px' }}>
                    <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                      Artifact: {event.linkedEvidenceId}
                    </span>
                    <button
                      className="btn-secondary"
                      onClick={() => onNavigateToEvidence && onNavigateToEvidence(event.linkedEvidenceId)}
                      style={{ fontSize: '10px', padding: '3px 8px' }}
                    >
                      <span>Inspect Provenance</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
