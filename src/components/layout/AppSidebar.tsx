import React from 'react';
import { 
  NavigationModule 
} from '../../types';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Network, 
  Clock, 
  FileSearch, 
  Globe, 
  Coins, 
  FileText, 
  Cpu, 
  Bot, 
  FileDown, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface AppSidebarProps {
  currentModule: NavigationModule;
  onSelectModule: (module: NavigationModule) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  evidenceCount?: number;
}

interface NavItemDef {
  id: NavigationModule;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  badge?: string;
  badgeTone?: 'emerald' | 'cyan' | 'amber' | 'red' | 'purple' | 'slate';
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentModule,
  onSelectModule,
  isCollapsed,
  onToggleCollapse,
  evidenceCount = 7
}) => {
  const navItems: NavItemDef[] = [
    {
      id: 'dashboard',
      label: 'Operations Dashboard',
      sublabel: 'Evidence Collection & Status',
      icon: LayoutDashboard,
      badge: 'LIVE',
      badgeTone: 'emerald'
    },
    {
      id: 'cases',
      label: 'Case Management',
      sublabel: 'Controlled Corpus Registry',
      icon: Briefcase,
      badge: 'CASE-001',
      badgeTone: 'cyan'
    },
    {
      id: 'actors',
      label: 'Persona Profiles',
      sublabel: 'NightHarbor · NightRiver',
      icon: Users,
      badge: '2 TARGETS',
      badgeTone: 'purple'
    },
    {
      id: 'graph',
      label: 'Temporal Evidence Graph',
      sublabel: 'ELTAG Entity Linkages',
      icon: Network,
      badge: 'INTERACTIVE',
      badgeTone: 'cyan'
    },
    {
      id: 'timeline',
      label: 'Observation Timeline',
      sublabel: 'Temporal Activity Window',
      icon: Clock
    },
    {
      id: 'evidence',
      label: 'Evidence Explorer',
      sublabel: 'WARC & Hash Preservation',
      icon: FileSearch,
      badge: `${evidenceCount} OBJ`,
      badgeTone: 'slate'
    },
    {
      id: 'cite',
      label: 'CITE // Infrastructure',
      sublabel: 'Cross-Layer Triangulation',
      icon: Globe,
      badge: 'CORE 1',
      badgeTone: 'cyan'
    },
    {
      id: 'bti',
      label: 'BTI // Blockchain',
      sublabel: 'Ledger Peel Chains',
      icon: Coins,
      badge: 'CORE 2',
      badgeTone: 'amber'
    },
    {
      id: 'ptrw',
      label: 'PTRW // Stylometry',
      sublabel: 'Temporal Writeprints',
      icon: FileText,
      badge: 'CORE 3',
      badgeTone: 'purple'
    },
    {
      id: 'fusion',
      label: 'Evidence Fusion & ACS',
      sublabel: 'Attribution Scoring & Abstention',
      icon: Cpu,
      badge: '78.4%',
      badgeTone: 'amber'
    },
    {
      id: 'agent',
      label: 'Agent Orchestrator',
      sublabel: 'Read-Only Gap Analysis',
      icon: Bot,
      badge: 'READ-ONLY',
      badgeTone: 'emerald'
    },
    {
      id: 'reports',
      label: 'Forensic Reports',
      sublabel: 'STIX 2.1 · PDF · JSON',
      icon: FileDown
    }
  ];

  return (
    <aside style={{
      width: isCollapsed ? '64px' : '260px',
      backgroundColor: '#ffffff',
      borderRight: '1px solid rgba(226, 232, 240, 0.9)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '12px 8px',
      transition: 'width 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
      flexShrink: 0,
      userSelect: 'none',
      height: 'calc(100vh - 75px)',
      position: 'sticky',
      top: '75px',
      zIndex: 30,
      overflowY: 'auto'
    }}>
      {/* Top Nav List */}
      <div>
        {/* Module Rail Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isCollapsed ? 'center' : 'space-between',
          padding: '6px 8px 10px 8px',
          borderBottom: '1px solid #f1f5f9',
          marginBottom: '8px'
        }}>
          {!isCollapsed && (
            <span style={{
              fontSize: '10px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64748b'
            }}>
              Intelligence Modules
            </span>
          )}
          <button
            onClick={onToggleCollapse}
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            style={{
              background: 'none',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              padding: '4px',
              cursor: 'pointer',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isCollapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </button>
        </div>

        {/* Navigation Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectModule(item.id)}
                title={isCollapsed ? `${item.label} — ${item.sublabel}` : undefined}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: isCollapsed ? '9px 0' : '8px 10px',
                  justifyContent: isCollapsed ? 'center' : 'flex-start',
                  borderRadius: '6px',
                  border: isActive ? '1px solid #1a3d66' : '1px solid transparent',
                  backgroundColor: isActive ? '#0a192f' : 'transparent',
                  color: isActive ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.12s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                <div style={{
                  color: isActive ? '#38bdf8' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Icon size={16} />
                </div>

                {!isCollapsed && (
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '4px'
                    }}>
                      <span style={{
                        fontSize: '12px',
                        fontWeight: isActive ? 700 : 600,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className={`badge badge-${item.badgeTone || 'slate'}`} style={{ fontSize: '9px', padding: '1px 5px' }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span style={{
                      display: 'block',
                      fontSize: '10px',
                      color: isActive ? '#94a3b8' : '#94a3b8',
                      fontFamily: 'var(--font-mono)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      marginTop: '1px'
                    }}>
                      {item.sublabel}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Footer Notice */}
      {!isCollapsed && (
        <div style={{
          marginTop: '16px',
          padding: '10px',
          backgroundColor: '#f8fafc',
          borderRadius: '6px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <ShieldCheck size={14} color="#059669" />
            <span style={{ fontSize: '10px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#065f46' }}>
              CONTROLLED ENVIRONMENT
            </span>
          </div>
          <p style={{
            fontSize: '10px',
            color: '#64748b',
            lineHeight: 1.4,
            margin: 0,
            fontFamily: 'var(--font-mono)'
          }}>
            Authorized sources only. Collection ≠ attribution.
          </p>
        </div>
      )}
    </aside>
  );
};
