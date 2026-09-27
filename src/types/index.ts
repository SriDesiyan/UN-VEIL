export type NavigationModule = 
  | 'dashboard'
  | 'cases'
  | 'actors'
  | 'graph'
  | 'timeline'
  | 'evidence'
  | 'cite'
  | 'bti'
  | 'ptrw'
  | 'fusion'
  | 'agent'
  | 'reports';

export type AttributionPosture = 
  | 'INVESTIGATIVE LEAD'
  | 'CORROBORATED CANDIDATE'
  | 'CONFLICTED / DISPUTED'
  | 'NEEDS MORE EVIDENCE'
  | 'ABSTAIN';

export type ReliabilityLevel = 'HIGH' | 'MEDIUM' | 'LOW' | 'UNVERIFIED';

export type SeverityLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFORMATIONAL';

export interface CaseRecord {
  id: string;
  title: string;
  subtitle: string;
  leadAgency: string;
  assignedAnalyst: string;
  badgeNumber: string;
  status: 'ACTIVE - EVIDENCE COMPILATION' | 'UNDER REVIEW' | 'NEEDS EVIDENCE' | 'DISPUTED' | 'RESOLVED' | 'ARCHIVED';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  primarySubject: string;
  secondarySubject: string;
  evidenceCount: number;
  contradictionCount: number;
  investigationPhase: string;
  createdDate: string;
  updatedDate: string;
  targetInfrastructure: string;
  trackedCryptoUsd: number;
  fusionScore: number;
  posture: AttributionPosture;
  summary: string;
}

export interface PgpKey {
  keyId: string;
  fingerprint: string;
  algorithm: string;
  bitLength: number;
  createdDate: string;
  verifiedSignedMessages: number;
  publicKeySnippet: string;
}

export interface CryptoWallet {
  currency: 'BTC' | 'XMR' | 'USDT' | 'ETH';
  address: string;
  clusterTag: string;
  estimatedBalanceUsd: number;
  firstSeen: string;
  lastSeen: string;
  taintedSource: string;
  transactionCount: number;
  counterparties: string[];
}

export interface InfrastructureMisconfig {
  id: string;
  severity: SeverityLevel;
  type: string;
  endpoint: string;
  description: string;
  technicalEvidence: string;
  clearnetOriginLeak: string;
  confidence: number;
}

export interface HiddenService {
  onionAddress: string;
  serviceName: string;
  lastSeen: string;
  status: 'ONLINE' | 'INTERMITTENT' | 'OFFLINE';
  serverHeader: string;
  tlsFingerprint: string;
  sshBanner: string;
  correlatedClearnetOrigin?: {
    ip: string;
    isp: string;
    country: string;
    asNumber: string;
    method: string;
    leakDescription: string;
  };
  misconfigurations: InfrastructureMisconfig[];
}

export interface StylometryProfile {
  lexicalDiversityScore: number;
  averageSentenceLength: number;
  vocabularyRichness: string;
  punctuationFingerprint: string;
  functionWordOverlap: number;
  topSyntacticPatterns: string[];
  postingTimeWindowUtc: string;
  peakHourDistribution: string;
  burstCadence: string;
  confidenceLead: string;
  shortTextWarning: boolean;
}

export interface AttributionHypothesis {
  candidatePair: [string, string];
  acsScore: number; // Attribution Confidence Score 0-100
  formulaFormulaBreakdown: {
    baseIntercept: number;
    infrastructureSignal: number;
    cryptographicSignal: number;
    stylometricSignal: number;
    behavioralSignal: number;
    temporalSignal: number;
    sourceReliabilitySignal: number;
    contradictionPenalty: number;
  };
  posture: AttributionPosture;
  decisionReasoning: string;
  independentCorroborationGroups: string[];
  contradictions: string[];
  abstentionTriggered: boolean;
  abstentionReason?: string;
}

export interface PersonaProfile {
  id: string;
  primaryHandle: string;
  knownAliases: string[];
  caseId: string;
  status: AttributionPosture;
  category: string;
  firstSeen: string;
  lastSeen: string;
  primarySource: string;
  allSources: string[];
  associatedMarketplaces: string[];
  summaryDossier: string;
  pgpKeys: PgpKey[];
  cryptoWallets: CryptoWallet[];
  hiddenServices: HiddenService[];
  stylometry: StylometryProfile;
  hypothesis: AttributionHypothesis;
}

export interface EvidenceArtifact {
  id: string;
  evidenceType: string;
  group: 'Infrastructure' | 'Cryptographic' | 'Stylometric' | 'Blockchain' | 'Contradiction' | 'Temporal';
  source: string;
  sourceReliability: ReliabilityLevel;
  capturedTimestamp: string;
  firstSeen: string;
  lastSeen: string;
  contentSummary: string;
  warcReference: string;
  sha256Hash: string;
  extractorVersion: string;
  extractionConfidence: number;
  linkedEntities: string[];
  isContradiction: boolean;
  contradictionNotes?: string;
}

export interface GraphNode {
  id: string;
  label: string;
  sublabel?: string;
  type: 'PERSONA' | 'ALIAS' | 'INFRASTRUCTURE' | 'WALLET' | 'CRYPTO_EVIDENCE' | 'ONION' | 'CONTRADICTION';
  confidence: number;
  firstSeen?: string;
  lastSeen?: string;
  parentActorId?: string;
  details?: Record<string, string | number>;
  x?: number;
  y?: number;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  relationType: string;
  label: string;
  color?: string;
  evidenceCount: number;
  confidence: number;
  isContradiction?: boolean;
  evidenceSnippet: string;
  evidenceIds: string[];
  transferVolume?: string;
  activeWindow?: string;
  sourceReliability: ReliabilityLevel;
}

export interface TimelineEvent {
  id: string;
  date: string;
  formattedDate: string;
  title: string;
  description: string;
  category: 'alias' | 'infra' | 'write' | 'wallet' | 'conflict' | 'hypothesis' | 'capture';
  entity: string;
  linkedEvidenceId: string;
  isContradiction?: boolean;
}

export interface AgentTask {
  id: string;
  taskName: string;
  toolUsed: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'QUEUED';
  timestamp: string;
  evidenceGatheredCount: number;
  summary: string;
  evidenceGap?: string;
}

export interface ActivityFeedItem {
  id: string;
  timestamp: string;
  relativeTime: string;
  actorHandle: string;
  type: 'INFRASTRUCTURE_SCAN' | 'STYLOMETRY_RUN' | 'BLOCKCHAIN_TRACE' | 'CONTRADICTION_FLAG' | 'EVIDENCE_INGEST' | 'DOSSIER_EXPORT';
  summary: string;
  badgeText: string;
  badgeTone: 'emerald' | 'cyan' | 'amber' | 'red' | 'purple' | 'slate';
}
