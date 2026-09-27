import React, { useState, useEffect } from 'react';
import { NavigationModule, PersonaProfile } from './types';
import { MOCK_PERSONAS, MOCK_EVIDENCE, PRIMARY_CASE_ID } from './data/mockData';
import { FederalClassificationBar } from './components/layout/FederalClassificationBar';
import { AppHeader } from './components/layout/AppHeader';
import { AppSidebar } from './components/layout/AppSidebar';
import { AppFooter } from './components/layout/AppFooter';
import { GlobalSearchModal } from './components/layout/GlobalSearchModal';
import { WhyPanel } from './components/modals/WhyPanel';
import { ActorDossierDrawer } from './components/modals/ActorDossierDrawer';
import { QuickExportModal } from './components/modals/QuickExportModal';
import { Toast } from './components/common/Toast';

// Views
import { LandingHero } from './views/LandingHero';
import { Dashboard } from './views/Dashboard';
import { CasesView } from './views/CasesView';
import { ActorsView } from './views/ActorsView';
import { GraphView } from './views/GraphView';
import { TimelineView } from './views/TimelineView';
import { EvidenceView } from './views/EvidenceView';
import { CiteView } from './views/CiteView';
import { BtiView } from './views/BtiView';
import { PtrwView } from './views/PtrwView';
import { FusionView } from './views/FusionView';
import { AgentOrchestrator } from './views/AgentOrchestrator';
import { ReportsView } from './views/ReportsView';

import './styles/globals.css';

export const App: React.FC = () => {
  // Navigation & Ingress state
  const [isLanding, setIsLanding] = useState<boolean>(false);
  const [currentModule, setCurrentModule] = useState<NavigationModule>('dashboard');

  // Modals & Drawers state
  const [isWhyOpen, setIsWhyOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [selectedActor, setSelectedActor] = useState<PersonaProfile | null>(null);
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | undefined>(undefined);
  const [focusedActorId, setFocusedActorId] = useState<string | undefined>(undefined);

  // Layout responsiveness state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState<boolean>(false);

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const notify = (msg: string) => {
    setToastMessage(msg);
  };

  // Global Keyboard Listener for Cmd/Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers for cross-module workflows
  const handleSelectModule = (mod: NavigationModule) => {
    setCurrentModule(mod);
    setIsSidebarMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenActorDossier = (actor: PersonaProfile) => {
    setSelectedActor(actor);
  };

  const handleNavigateToGraphWithActor = (actor: PersonaProfile) => {
    setFocusedActorId(actor.id);
    setCurrentModule('graph');
    setIsSidebarMobileOpen(false);
  };

  const handleNavigateFromSearch = (module: NavigationModule, entityId?: string) => {
    setCurrentModule(module);
    if (module === 'actors' && entityId) {
      const found = MOCK_PERSONAS.find(p => p.id === entityId);
      if (found) setSelectedActor(found);
    } else if (module === 'evidence' && entityId) {
      setSelectedEvidenceId(entityId);
    }
  };

  // Render Landing Hero if in landing mode
  if (isLanding) {
    return (
      <LandingHero
        onEnterPortal={() => setIsLanding(false)}
        onOpenCase={() => {
          setIsLanding(false);
          setCurrentModule('cases');
        }}
        onOpenWhy={() => setIsWhyOpen(true)}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f1f5f9' }}>
      {/* 1. Federal Top Classification Bar */}
      <FederalClassificationBar
        isLanding={isLanding}
        onToggleLanding={() => setIsLanding(prev => !prev)}
      />

      {/* 2. Main Branding & Search Header */}
      <AppHeader
        currentCaseId={PRIMARY_CASE_ID}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
        onOpenWhy={() => setIsWhyOpen(true)}
        onToggleSidebarMobile={() => setIsSidebarMobileOpen(prev => !prev)}
      />

      {/* 3. Main Workspace Layout */}
      <div style={{
        display: 'flex',
        flex: 1,
        maxWidth: '1700px',
        width: '100%',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Persistent Collapsible Sidebar */}
        <AppSidebar
          currentModule={currentModule}
          onSelectModule={handleSelectModule}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(prev => !prev)}
          evidenceCount={MOCK_EVIDENCE.length}
        />

        {/* Center Main View Area */}
        <main style={{
          flex: 1,
          minWidth: 0,
          padding: '24px 28px 48px 28px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Breadcrumb Trail */}
          <div style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px'
          }}>
            <span>UN-VEIL</span>
            <span>/</span>
            <span style={{ color: '#0f172a', fontWeight: 700, textTransform: 'uppercase' }}>
              {currentModule}
            </span>
            <span>/</span>
            <span style={{ color: '#0284c7' }}>{PRIMARY_CASE_ID}</span>
          </div>

          {/* Module Views */}
          {currentModule === 'dashboard' && (
            <Dashboard
              onNavigate={handleSelectModule}
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'cases' && (
            <CasesView
              onNavigate={handleSelectModule}
              onOpenExport={() => setIsExportOpen(true)}
            />
          )}

          {currentModule === 'actors' && (
            <ActorsView
              onSelectActor={handleOpenActorDossier}
              onNavigateToGraph={handleNavigateToGraphWithActor}
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'graph' && (
            <GraphView
              focusedActorId={focusedActorId}
              onOpenWhy={() => setIsWhyOpen(true)}
              onSelectActor={handleOpenActorDossier}
            />
          )}

          {currentModule === 'timeline' && (
            <TimelineView
              onOpenWhy={() => setIsWhyOpen(true)}
              onNavigateToEvidence={(id) => {
                setSelectedEvidenceId(id);
                setCurrentModule('evidence');
              }}
            />
          )}

          {currentModule === 'evidence' && (
            <EvidenceView
              selectedEvidenceId={selectedEvidenceId}
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'cite' && (
            <CiteView
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'bti' && (
            <BtiView
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'ptrw' && (
            <PtrwView
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'fusion' && (
            <FusionView
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}

          {currentModule === 'agent' && (
            <AgentOrchestrator
              onOpenWhy={() => setIsWhyOpen(true)}
              onNotify={notify}
            />
          )}

          {currentModule === 'reports' && (
            <ReportsView
              onNotify={notify}
              onOpenWhy={() => setIsWhyOpen(true)}
            />
          )}
        </main>
      </div>

      {/* 4. Federal Compliance & Audit Footer */}
      <AppFooter />

      {/* 5. Modals & Drawers */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigateFromSearch}
      />

      <WhyPanel
        isOpen={isWhyOpen}
        onClose={() => setIsWhyOpen(false)}
        onNavigateToEvidence={() => {
          setIsWhyOpen(false);
          setCurrentModule('evidence');
        }}
        onNavigateToGraph={() => {
          setIsWhyOpen(false);
          setCurrentModule('graph');
        }}
      />

      <ActorDossierDrawer
        actor={selectedActor}
        onClose={() => setSelectedActor(null)}
        onViewInGraph={(actor) => {
          setSelectedActor(null);
          handleNavigateToGraphWithActor(actor);
        }}
        onViewInCite={() => {
          setSelectedActor(null);
          setCurrentModule('cite');
        }}
        onViewInBti={() => {
          setSelectedActor(null);
          setCurrentModule('bti');
        }}
      />

      <QuickExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        onExport={(format) => {
          notify(`${format} export generated with cryptographic SHA-256 provenance.`);
        }}
      />

      {/* 6. In-App Notifications Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
};
