import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  Briefcase, 
  Users, 
  FileSearch, 
  Globe, 
  Coins, 
  ArrowRight 
} from 'lucide-react';
import { MOCK_CASES, MOCK_PERSONAS, MOCK_EVIDENCE } from '../../data/mockData';
import { NavigationModule } from '../../types';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (module: NavigationModule, entityId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Esc and Ctrl/Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matchedCases = MOCK_CASES.filter(c => 
      c.id.toLowerCase().includes(q) || 
      c.title.toLowerCase().includes(q) ||
      c.primarySubject.toLowerCase().includes(q)
    );

    const matchedPersonas = MOCK_PERSONAS.filter(p => 
      p.id.toLowerCase().includes(q) || 
      p.primaryHandle.toLowerCase().includes(q) ||
      p.knownAliases.some(a => a.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q)
    );

    const matchedEvidence = MOCK_EVIDENCE.filter(e => 
      e.id.toLowerCase().includes(q) || 
      e.evidenceType.toLowerCase().includes(q) ||
      e.contentSummary.toLowerCase().includes(q) ||
      e.sha256Hash.toLowerCase().includes(q)
    );

    return {
      cases: matchedCases,
      personas: matchedPersonas,
      evidence: matchedEvidence
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        style={{
          width: 'min(640px, 94vw)',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #cbd5e1',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 16px',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc'
        }}>
          <Search size={18} color="#0284c7" />
          <input
            autoFocus
            type="text"
            placeholder="Search Case, Persona, Alias, Wallet, Onion, SHA-256..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              fontSize: '14px',
              fontFamily: 'var(--font-sans)',
              color: '#0f172a'
            }}
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
            >
              <X size={16} />
            </button>
          )}
          <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            padding: '2px 6px',
            borderRadius: '4px',
            backgroundColor: '#e2e8f0',
            color: '#475569'
          }}>
            ESC
          </span>
        </div>

        {/* Results Area */}
        <div style={{ padding: '16px', overflowY: 'auto', flex: 1 }}>
          {!query && (
            <div style={{ padding: '24px 0', textAlign: 'center', color: '#64748b' }}>
              <p style={{ fontSize: '12px', marginBottom: '8px' }}>
                Type a query to search across the controlled intelligence repository.
              </p>
              <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['CASE-26151', 'NightHarbor', 'NightRiver', '185.220.101.44', 'bc1q9u...'].map(sample => (
                  <button
                    key={sample}
                    onClick={() => setQuery(sample)}
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      color: '#0284c7',
                      cursor: 'pointer'
                    }}
                  >
                    {sample}
                  </button>
                ))}
              </div>
            </div>
          )}

          {searchResults && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Matched Cases */}
              {searchResults.cases.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#64748b',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Briefcase size={12} />
                    <span>Cases ({searchResults.cases.length})</span>
                  </div>
                  {searchResults.cases.map(c => (
                    <div 
                      key={c.id}
                      onClick={() => {
                        onNavigate('cases');
                        onClose();
                      }}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        marginBottom: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#ffffff',
                        transition: 'background-color 0.12s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '12px', color: '#0284c7' }}>
                            {c.id}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: '#1e293b' }}>
                            {c.title}
                          </span>
                        </div>
                        <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0 0' }}>
                          {c.subtitle}
                        </p>
                      </div>
                      <ArrowRight size={14} color="#64748b" />
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Personas */}
              {searchResults.personas.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#64748b',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Users size={12} />
                    <span>Personas & Aliases ({searchResults.personas.length})</span>
                  </div>
                  {searchResults.personas.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        onNavigate('actors', p.id);
                        onClose();
                      }}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        marginBottom: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#ffffff'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>
                            {p.primaryHandle}
                          </span>
                          <span className="badge badge-purple" style={{ fontSize: '9px' }}>
                            {p.status}
                          </span>
                        </div>
                        <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0 0' }}>
                          Aliases: {p.knownAliases.join(', ')}
                        </p>
                      </div>
                      <ArrowRight size={14} color="#64748b" />
                    </div>
                  ))}
                </div>
              )}

              {/* Matched Evidence */}
              {searchResults.evidence.length > 0 && (
                <div>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#64748b',
                    marginBottom: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <FileSearch size={12} />
                    <span>Evidence Objects ({searchResults.evidence.length})</span>
                  </div>
                  {searchResults.evidence.map(e => (
                    <div 
                      key={e.id}
                      onClick={() => {
                        onNavigate('evidence');
                        onClose();
                      }}
                      style={{
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0',
                        marginBottom: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#ffffff'
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f8fafc'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
                    >
                      <div style={{ flex: 1, minWidth: 0, paddingRight: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '11px', color: '#0284c7' }}>
                            {e.id}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 600, color: '#1e293b' }}>
                            {e.evidenceType}
                          </span>
                          {e.isContradiction && (
                            <span className="badge badge-red" style={{ fontSize: '9px' }}>
                              CONTRADICTION
                            </span>
                          )}
                        </div>
                        <p style={{
                          fontSize: '11px',
                          color: '#64748b',
                          margin: '2px 0 0 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {e.contentSummary}
                        </p>
                      </div>
                      <ArrowRight size={14} color="#64748b" />
                    </div>
                  ))}
                </div>
              )}

              {/* No results */}
              {searchResults.cases.length === 0 && 
               searchResults.personas.length === 0 && 
               searchResults.evidence.length === 0 && (
                <div style={{ padding: '30px 0', textAlign: 'center', color: '#64748b' }}>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>
                    No matching records found for "{query}"
                  </p>
                  <p style={{ fontSize: '11px', marginTop: '4px' }}>
                    Try searching for an alias (NightHarbor, NightRiver), IP (185.220.101.44), or evidence ID (EV-26151).
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
