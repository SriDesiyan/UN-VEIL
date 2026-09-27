import { 
  CaseRecord, 
  PersonaProfile, 
  EvidenceArtifact, 
  GraphNode, 
  GraphEdge, 
  TimelineEvent, 
  AgentTask, 
  ActivityFeedItem 
} from '../types';

export const PRIMARY_CASE_ID = 'CASE-26151-001';

export const MOCK_CASES: CaseRecord[] = [
  {
    id: 'CASE-26151-001',
    title: 'Controlled Alias Migration & Cross-Layer Linkage Study',
    subtitle: 'NightHarbor → NightRiver Pseudonymous Entity Attribution',
    leadAgency: 'NTRO Cyber Forensics Research / SIH-26151 Testbed',
    assignedAnalyst: 'Lead Analyst V. Sharma (Credential #8842-NTRO)',
    badgeNumber: 'NTRO-8842',
    status: 'ACTIVE - EVIDENCE COMPILATION',
    priority: 'CRITICAL',
    primarySubject: 'NightHarbor',
    secondarySubject: 'NightRiver',
    evidenceCount: 7,
    contradictionCount: 1,
    investigationPhase: 'Phase IV: Cross-Engine Evidence Fusion & Contradiction Resolution',
    createdDate: '2026-07-12 09:15 UTC',
    updatedDate: '2026-08-25 15:40 UTC',
    targetInfrastructure: 'srv-03.harbor-sync.is (Correlated Clearnet VPS 185.220.101.44)',
    trackedCryptoUsd: 1420500,
    fusionScore: 78.4,
    posture: 'INVESTIGATIVE LEAD',
    summary: 'Investigation evaluating candidate operational migration from legacy actor persona NightHarbor to emergent identity NightRiver across Tor hidden services, cryptographic key rotation packets, unhosted Bitcoin peel chains, and stylometric writeprints. A temporal contradiction in active posting windows currently mandates an investigative lead posture rather than corroborated attribution.'
  },
  {
    id: 'CASE-2026-CR-0104',
    title: 'Operation ZeroTread // Tor Exploit Brokerage De-anonymization',
    subtitle: 'Infrastructure Leakage & BGP Descriptor Timing Analysis',
    leadAgency: 'Federal Cyber Defense Liaison / CERT-In Test Cell',
    assignedAnalyst: 'SA K. Danilov (Badge #4190)',
    badgeNumber: 'FED-4190',
    status: 'UNDER REVIEW',
    priority: 'HIGH',
    primarySubject: 'ZeroDayBroker_Ru',
    secondarySubject: 'Mikhail A. Sokolov (Candidate)',
    evidenceCount: 12,
    contradictionCount: 0,
    investigationPhase: 'Phase V: Prosecutorial Dossier Staging',
    createdDate: '2026-04-18 11:20 UTC',
    updatedDate: '2026-08-20 18:30 UTC',
    targetInfrastructure: '194.87.139.102 (Selectel Colocation Node)',
    trackedCryptoUsd: 3840000,
    fusionScore: 91.2,
    posture: 'CORROBORATED CANDIDATE',
    summary: 'Multi-layer triangulation on zero-day exploit broker infrastructure. Apache mod_status leak combined with microsecond-precision Tor descriptor publication drift mapped origin VPS directly to an offshore colocation facility.'
  },
  {
    id: 'CASE-2026-CR-0219',
    title: 'Operation DarkLedger // Carding & Mixer Peer Cashout Syndicate',
    subtitle: 'High-Volume Escrow Peel Chain & Monero Pool Clustering',
    leadAgency: 'Joint Financial Intelligence Task Force',
    assignedAnalyst: 'SA T. Alva (Badge #7731)',
    badgeNumber: 'FED-7731',
    status: 'DISPUTED',
    priority: 'HIGH',
    primarySubject: 'CardMaster_RU',
    secondarySubject: 'Unresolved Co-Signer Node',
    evidenceCount: 9,
    contradictionCount: 2,
    investigationPhase: 'Phase III: Counterparty Disambiguation',
    createdDate: '2026-05-02 14:00 UTC',
    updatedDate: '2026-08-22 08:15 UTC',
    targetInfrastructure: '141.98.11.204 (ITL Offshore LLC)',
    trackedCryptoUsd: 4120000,
    fusionScore: 42.1,
    posture: 'CONFLICTED / DISPUTED',
    summary: 'Cryptocurrency laundering ring investigation. While high-volume Tron TRC-20 and Bitcoin transactions linked to a single Dubai OTC desk were established, contradictory time-zone telemetry and opposing stylometric markers suggest multiple independent operators sharing credentials.'
  }
];

export const MOCK_PERSONAS: PersonaProfile[] = [
  {
    id: 'P-001',
    primaryHandle: 'NightHarbor',
    knownAliases: ['NH-Vector', 'HarborAdmin', 'AnchorSec_01', 'Krypton_Mirror'],
    caseId: 'CASE-26151-001',
    status: 'INVESTIGATIVE LEAD',
    category: 'Tor Hidden Service Infrastructure & Extortion Brokerage',
    firstSeen: '2024-03-15',
    lastSeen: '2026-07-28',
    primarySource: 'Controlled Marketplace Archive / Dread Forum Mirror',
    allSources: ['Dread Forum', 'Exploit.in Snapshot', 'Controlled BreachForums v3 Dump', 'Tor HSDir Ingestion'],
    associatedMarketplaces: ['Harbor Market (Offline)', 'Dread', 'Exploit.in'],
    summaryDossier: 'Primary observed threat actor operating dark-web service orchestration and cryptographic escrow. Historical posting history ceased abruptly on 2026-07-28 coincident with an announced "retirement", followed immediately by the appearance of NightRiver.',
    pgpKeys: [
      {
        keyId: '7AC419F2',
        fingerprint: '7A42 90D1 E874 553C 219B  D004 7AC4 19F2 9E21 4410',
        algorithm: 'RSA-4096',
        bitLength: 4096,
        createdDate: '2024-02-10',
        verifiedSignedMessages: 42,
        publicKeySnippet: '-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBF/1c...NightHarbor <nightharbor@secure-jabber.is>...\n-----END PGP PUBLIC KEY BLOCK-----'
      }
    ],
    cryptoWallets: [
      {
        currency: 'BTC',
        address: 'bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx',
        clusterTag: 'NightHarbor Escrow Splitter #1',
        estimatedBalanceUsd: 1420500,
        firstSeen: '2024-04-11',
        lastSeen: '2026-07-26',
        taintedSource: 'Controlled ransomware extortion deposit & escrow fee deduction',
        transactionCount: 148,
        counterparties: ['Wasabi Mixer Egress #4', 'bc1q...h2p', 'cp-01-escrow']
      }
    ],
    hiddenServices: [
      {
        onionAddress: 'harbor77kxj49z9v2fka83kndla047fks.onion',
        serviceName: 'Harbor Secure Exchange Portal',
        lastSeen: '2026-07-25',
        status: 'OFFLINE',
        serverHeader: 'nginx/1.24.0 (Ubuntu)',
        tlsFingerprint: 'sha256:4a88f1c0993e82bf4e19873a01948ba98231',
        sshBanner: 'SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.6',
        correlatedClearnetOrigin: {
          ip: '185.220.101.44',
          isp: 'Belcloud High-Availability Hosting',
          country: 'Bulgaria',
          asNumber: 'AS206216',
          method: 'Apache mod_status & TLS Certificate SAN disclosure',
          leakDescription: 'Exposed worker process telemetry disclosed origin VPS IP 185.220.101.44 serving virtual host harbor-sync.'
        },
        misconfigurations: [
          {
            id: 'MISCONFIG-NH-01',
            severity: 'CRITICAL',
            type: 'EXPOSED_ORIGIN_HEADER',
            endpoint: '/nginx_status',
            description: 'Publicly readable server metrics leaking clearnet gateway address.',
            technicalEvidence: 'Nginx server-status returned internal loopback relay 185.220.101.44:8080.',
            clearnetOriginLeak: '185.220.101.44',
            confidence: 96
          }
        ]
      }
    ],
    stylometry: {
      lexicalDiversityScore: 0.74,
      averageSentenceLength: 17.8,
      vocabularyRichness: 'High (Type-Token Ratio 0.68)',
      punctuationFingerprint: 'Repeated em-dash variants, double-semicolon formatting, Oxford comma strictness',
      functionWordOverlap: 84.2,
      topSyntacticPatterns: ['Passive construction preference (38%)', 'Adverbial clause initial positioning (41%)', 'Lowercase acronym formatting'],
      postingTimeWindowUtc: '18:00 - 23:30 UTC',
      peakHourDistribution: '20:00 - 22:00 UTC (82% of samples)',
      burstCadence: 'Episodic post clustering (3-5 consecutive forum replies within 14 min)',
      confidenceLead: 'Strong stylometric continuity with NightRiver samples',
      shortTextWarning: false
    },
    hypothesis: {
      candidatePair: ['NightHarbor', 'NightRiver'],
      acsScore: 78.4,
      formulaFormulaBreakdown: {
        baseIntercept: -1.2,
        infrastructureSignal: 2.1,
        cryptographicSignal: 2.8,
        stylometricSignal: 1.9,
        behavioralSignal: 1.4,
        temporalSignal: 1.1,
        sourceReliabilitySignal: 1.2,
        contradictionPenalty: 2.4
      },
      posture: 'INVESTIGATIVE LEAD',
      decisionReasoning: 'Cryptographic subkey cross-signing (EV-26151-014), infrastructure overlap (EV-26151-021), and stylometric syntax congruence strongly support an operational alias migration. However, EV-26151-041 identifies concurrent activity on 2026-08-21 that contradicts the asserted complete migration date, penalizing the attribution score and precluding automated corroboration.',
      independentCorroborationGroups: ['Cryptographic (PGP Key Cross-Signature)', 'Infrastructure (TLS SAN & VPS Heritage)', 'Stylometric (Writeprint Syntax & Grammar Overlap)', 'Blockchain (Peel Chain Direct Ingress)'],
      contradictions: ['EV-26151-041: Simultaneous active session tokens registered from distinct ASNs on 2026-08-21 03:12 UTC'],
      abstentionTriggered: false
    }
  },
  {
    id: 'P-002',
    primaryHandle: 'NightRiver',
    knownAliases: ['RiverLine', 'NR-07', 'DeltaChannel', 'Vector_R'],
    caseId: 'CASE-26151-001',
    status: 'INVESTIGATIVE LEAD',
    category: 'Successor Service Architecture & Escrow Relays',
    firstSeen: '2026-07-12',
    lastSeen: '2026-08-25',
    primarySource: 'Controlled Marketplace Archive Snapshot v2',
    allSources: ['Controlled Marketplace v2', 'Dread Forum Successor Thread', 'Tor Onion Ingestion'],
    associatedMarketplaces: ['RiverEscrow Relay', 'Dread'],
    summaryDossier: 'Successor entity first detected registering forum vendor threads in mid-July 2026. Claims to have inherited escrow operations from retired entities while maintaining strict operational security.',
    pgpKeys: [
      {
        keyId: 'B910C24A',
        fingerprint: '119B C482 7701 9A22 DFF3  001A B910 C24A 4B5E CC82',
        algorithm: 'Ed25519',
        bitLength: 256,
        createdDate: '2026-07-10',
        verifiedSignedMessages: 19,
        publicKeySnippet: '-----BEGIN PGP PUBLIC KEY BLOCK-----\nmDMEYP...NightRiver Transition Key <river@onion-relay.net>...\n-----END PGP PUBLIC KEY BLOCK-----'
      }
    ],
    cryptoWallets: [
      {
        currency: 'BTC',
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p',
        clusterTag: 'NightRiver Ingress Vault',
        estimatedBalanceUsd: 890000,
        firstSeen: '2026-07-15',
        lastSeen: '2026-08-24',
        taintedSource: 'Direct peel chain hop from legacy NightHarbor splitter #1',
        transactionCount: 34,
        counterparties: ['bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx', 'cp-02-cashout']
      }
    ],
    hiddenServices: [
      {
        onionAddress: 'river99xkp2018aflkq99zla0021pzkla04921f.onion',
        serviceName: 'RiverEscrow NextGen Node',
        lastSeen: '2026-08-25',
        status: 'ONLINE',
        serverHeader: 'nginx/1.24.0 (Ubuntu)',
        tlsFingerprint: 'sha256:4a88f1c0993e82bf4e19873a01948ba98231',
        sshBanner: 'SSH-2.0-OpenSSH_8.9p1 Ubuntu-3ubuntu0.6',
        correlatedClearnetOrigin: {
          ip: '185.220.101.44',
          isp: 'Belcloud High-Availability Hosting',
          country: 'Bulgaria',
          asNumber: 'AS206216',
          method: 'X.509 Certificate Subject Alternative Name Continuity',
          leakDescription: 'Certificate EV-26151-021 issued for harbor-sync.is retained active SAN covering river-sync-node.is.'
        },
        misconfigurations: []
      }
    ],
    stylometry: {
      lexicalDiversityScore: 0.72,
      averageSentenceLength: 18.2,
      vocabularyRichness: 'High (Type-Token Ratio 0.66)',
      punctuationFingerprint: 'Double-semicolon formatting, parentheses citation structures, identical hyphenation',
      functionWordOverlap: 81.9,
      topSyntacticPatterns: ['Passive construction preference (35%)', 'Adverbial clause initial positioning (44%)'],
      postingTimeWindowUtc: '17:30 - 23:00 UTC',
      peakHourDistribution: '19:30 - 22:00 UTC (79% of samples)',
      burstCadence: 'Episodic post clustering',
      confidenceLead: 'High degree of stylistic continuity with NightHarbor writeprints',
      shortTextWarning: false
    },
    hypothesis: {
      candidatePair: ['NightRiver', 'NightHarbor'],
      acsScore: 78.4,
      formulaFormulaBreakdown: {
        baseIntercept: -1.2,
        infrastructureSignal: 2.1,
        cryptographicSignal: 2.8,
        stylometricSignal: 1.9,
        behavioralSignal: 1.4,
        temporalSignal: 1.1,
        sourceReliabilitySignal: 1.2,
        contradictionPenalty: 2.4
      },
      posture: 'INVESTIGATIVE LEAD',
      decisionReasoning: 'Corroboration signals link NightRiver as an operational re-branding of NightHarbor. Contradiction flag EV-26151-041 remains unresolved.',
      independentCorroborationGroups: ['Cryptographic', 'Infrastructure', 'Stylometric', 'Blockchain'],
      contradictions: ['EV-26151-041: Migration window collision'],
      abstentionTriggered: false
    }
  }
];

export const MOCK_EVIDENCE: EvidenceArtifact[] = [
  {
    id: 'EV-26151-014',
    evidenceType: 'PGP Subkey Cross-Signature Packet',
    group: 'Cryptographic',
    source: 'Controlled Marketplace Archive Snapshot v1.0',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-07-12 10:22:14 UTC',
    firstSeen: '2026-07-12',
    lastSeen: '2026-07-12',
    contentSummary: 'Preserved OpenPGP key transition announcement signed by NightHarbor master key 7AC419F2 endorsing subkey B910C24A utilized by NightRiver. Cryptographic signature cryptographically verified against case keyring.',
    warcReference: 'warc://controlled-corpus/case-26151/20260712-102214-warc.gz#offset=149204',
    sha256Hash: 'a8f190c12847be6630f9a21b3c901842e01934ba9823104f7620bcde10293481',
    extractorVersion: 'UNVEIL-PGP-EXTRACTOR v1.4.2',
    extractionConfidence: 99.8,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)', 'Key: 7AC419F2', 'Key: B910C24A'],
    isContradiction: false
  },
  {
    id: 'EV-26151-021',
    evidenceType: 'X.509 TLS Subject Alt Name (SAN) Continuity',
    group: 'Infrastructure',
    source: 'Authorized Infrastructure Telemetry / Port 443 Probe',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-07-18 06:14:02 UTC',
    firstSeen: '2026-07-18',
    lastSeen: '2026-08-06',
    contentSummary: 'Preserved Let\'s Encrypt certificate (Serial: 04:9A:82:11:00:FE) presenting dual SAN attributes harbor-sync.is and river-sync-node.is hosted on IP 185.220.101.44 (AS206216).',
    warcReference: 'warc://controlled-corpus/case-26151/20260718-061402-tls.warc.gz#offset=84920',
    sha256Hash: '4c810b429184ba7e012984fe73019842fba90123847ac0192834bfe981240192',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 97.4,
    linkedEntities: ['harbor-sync.is', 'river-sync-node.is', '185.220.101.44', 'srv-03'],
    isContradiction: false
  },
  {
    id: 'EV-26151-032',
    evidenceType: 'PTRW Stylometric Multi-Feature Writeprint Match',
    group: 'Stylometric',
    source: 'Controlled Forum Corpus Snapshot (14,200 tokens)',
    sourceReliability: 'MEDIUM',
    capturedTimestamp: '2026-08-03 19:48:33 UTC',
    firstSeen: '2026-08-03',
    lastSeen: '2026-08-03',
    contentSummary: 'Comparative stylometric writeprint analysis between 42 NightHarbor forum posts and 18 NightRiver replies. Yielded 84.2% function-word distribution overlap and congruent syntactic branching. Note: Short-text samples (<150 words) isolated to prevent false certainty.',
    warcReference: 'warc://controlled-corpus/case-26151/20260803-194833-nlp.warc.gz#offset=330192',
    sha256Hash: '918420fe8102934ba7e0192834fbc01928347ba0192834fe73019842fba90123',
    extractorVersion: 'UNVEIL-PTRW-STYLOMETRY v3.0.1',
    extractionConfidence: 82.5,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)'],
    isContradiction: false
  },
  {
    id: 'EV-26151-038',
    evidenceType: 'Bitcoin Peel Chain Direct Egress Link',
    group: 'Blockchain',
    source: 'Public Ledger Ingestion Engine (Block #884192)',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-08 14:05:51 UTC',
    firstSeen: '2026-08-08',
    lastSeen: '2026-08-08',
    contentSummary: 'Transaction 8f9b204c...33d8 transferred 14.85 BTC from NightHarbor splitter address bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx directly into freshly initialized NightRiver deposit address bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p without mixer intervention.',
    warcReference: 'warc://controlled-corpus/case-26151/20260808-140551-btc.warc.gz#offset=12401',
    sha256Hash: 'e10293481a8f190c12847be6630f9a21b3c901842e01934ba9823104f7620bcd',
    extractorVersion: 'UNVEIL-BTI-LEDGER v1.8.0',
    extractionConfidence: 99.1,
    linkedEntities: ['bc1q9u2k84a6x79f225m9307cxtr590h00pke934zx', 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjh97h2p'],
    isContradiction: false
  },
  {
    id: 'EV-26151-041',
    evidenceType: 'Temporal Session Collision / ASN Discrepancy',
    group: 'Contradiction',
    source: 'Source Capture Ledger & Authenticated Relay Logs',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-21 03:12:40 UTC',
    firstSeen: '2026-08-21',
    lastSeen: '2026-08-21',
    contentSummary: 'AUTHENTICATED ACTIVITY CONFLICT: On 2026-08-21 at 03:12 UTC, active administrative Jabber sessions were simultaneously recorded for both NightHarbor (authenticated via AS58224 in Iran) and NightRiver (authenticated via AS206216 in Bulgaria). This concurrent operational window contradicts a clean single-operator alias migration hypothesis.',
    warcReference: 'warc://controlled-corpus/case-26151/20260821-031240-conflict.warc.gz#offset=98412',
    sha256Hash: 'fba90123847ac0192834bfe9812401924c810b429184ba7e012984fe73019842',
    extractorVersion: 'UNVEIL-TEMPORAL-AUDIT v2.0.4',
    extractionConfidence: 94.6,
    linkedEntities: ['NightHarbor (P-001)', 'NightRiver (P-002)', 'AS58224', 'AS206216'],
    isContradiction: true,
    contradictionNotes: 'Penalizes attribution confidence score by -2.4 in fusion equation. Mandates INVESTIGATIVE LEAD status until physical operator redundancy can be ruled in or out.'
  },
  {
    id: 'EV-26151-042',
    evidenceType: 'SSH Host Key Fingerprint Overlap',
    group: 'Infrastructure',
    source: 'Automated Port Scanner (CITE Infrastructure Engine)',
    sourceReliability: 'HIGH',
    capturedTimestamp: '2026-08-24 11:04:19 UTC',
    firstSeen: '2026-08-24',
    lastSeen: '2026-08-24',
    contentSummary: 'Identical ED25519 SSH host key SHA-256:7uT4wBq3s10xVp9L4kMz82jF1qW returned by backup clearnet gateway for both legacy and current onion hidden service endpoints.',
    warcReference: 'warc://controlled-corpus/case-26151/20260824-110419-ssh.warc.gz#offset=41092',
    sha256Hash: '3c901842e01934ba9823104f7620bcde10293481a8f190c12847be6630f9a21b',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 98.2,
    linkedEntities: ['srv-03', 'harbor-sync.is', 'river-sync-node.is'],
    isContradiction: false
  },
  {
    id: 'EV-26151-045',
    evidenceType: 'Tor Descriptor Keepalive Drift Alignment',
    group: 'Temporal',
    source: 'Tor Network Ingestion Probe (Consensus Archive)',
    sourceReliability: 'MEDIUM',
    capturedTimestamp: '2026-08-25 09:30:11 UTC',
    firstSeen: '2026-07-12',
    lastSeen: '2026-08-25',
    contentSummary: 'HSDir descriptor publication keepalive micro-intervals for both harbor77...onion and river99...onion display synchronized 20-minute publication jitter aligned to AS206216 upstream cron scheduler.',
    warcReference: 'warc://controlled-corpus/case-26151/20260825-093011-hsdir.warc.gz#offset=55210',
    sha256Hash: '7620bcde10293481a8f190c12847be6630f9a21b3c901842e01934ba9823104f',
    extractorVersion: 'UNVEIL-CITE-ENGINE v2.1.0',
    extractionConfidence: 89.0,
    linkedEntities: ['harbor77kxj49z9v2fka83kndla047fks.onion', 'river99xkp2018aflkq99zla0021pzkla04921f.onion'],
    isContradiction: false
  }
];

export const MOCK_GRAPH_NODES: GraphNode[] = [
  { id: 'node-nh', label: 'NightHarbor', sublabel: 'P-001 (Legacy)', type: 'PERSONA', confidence: 94, firstSeen: '2024-03-15', lastSeen: '2026-07-28', x: 200, y: 220 },
  { id: 'node-nr', label: 'NightRiver', sublabel: 'P-002 (Successor)', type: 'PERSONA', confidence: 88, firstSeen: '2026-07-12', lastSeen: '2026-08-25', x: 620, y: 220 },
  { id: 'node-pgp', label: 'Key 7AC419F2', sublabel: 'PGP Cross-Sign', type: 'CRYPTO_EVIDENCE', confidence: 99, firstSeen: '2026-07-12', lastSeen: '2026-07-12', x: 410, y: 130 },
  { id: 'node-vps', label: '185.220.101.44', sublabel: 'Origin VPS (Bulgaria)', type: 'INFRASTRUCTURE', confidence: 96, firstSeen: '2026-07-18', lastSeen: '2026-08-24', x: 410, y: 340 },
  { id: 'node-onion-nh', label: 'harbor77...onion', sublabel: 'Legacy Hidden Service', type: 'ONION', confidence: 95, firstSeen: '2024-04-01', lastSeen: '2026-07-25', x: 120, y: 380 },
  { id: 'node-onion-nr', label: 'river99...onion', sublabel: 'Successor Service', type: 'ONION', confidence: 91, firstSeen: '2026-07-15', lastSeen: '2026-08-25', x: 740, y: 380 },
  { id: 'node-btc-nh', label: 'bc1q9u...4zx', sublabel: 'Escrow Splitter #1', type: 'WALLET', confidence: 98, firstSeen: '2024-04-11', lastSeen: '2026-07-26', x: 140, y: 90 },
  { id: 'node-btc-nr', label: 'bc1qxy...h2p', sublabel: 'Ingress Vault #2', type: 'WALLET', confidence: 92, firstSeen: '2026-07-15', lastSeen: '2026-08-24', x: 710, y: 90 },
  { id: 'node-conflict', label: 'Conflict: ASN Col', sublabel: 'EV-26151-041 (Active)', type: 'CONTRADICTION', confidence: 95, firstSeen: '2026-08-21', lastSeen: '2026-08-21', x: 410, y: 235 }
];

export const MOCK_GRAPH_EDGES: GraphEdge[] = [
  {
    id: 'edge-nh-pgp',
    source: 'node-nh',
    target: 'node-pgp',
    relationType: 'SIGNS_KEY_ROTATION',
    label: 'Endorses Subkey B910C24A',
    color: '#0284c7',
    evidenceCount: 1,
    confidence: 99,
    evidenceSnippet: 'OpenPGP key transition packet EV-26151-014 cryptographically verified.',
    evidenceIds: ['EV-26151-014'],
    activeWindow: '2026-07-12',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nr-pgp',
    source: 'node-nr',
    target: 'node-pgp',
    relationType: 'RECEIVES_ENDORSEMENT',
    label: 'Transition Key Bound',
    color: '#0284c7',
    evidenceCount: 1,
    confidence: 99,
    evidenceSnippet: 'Subkey B910C24A utilized in NightRiver vendor forum declarations.',
    evidenceIds: ['EV-26151-014'],
    activeWindow: '2026-07-12',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nh-vps',
    source: 'node-nh',
    target: 'node-vps',
    relationType: 'HOSTED_ON',
    label: 'Apache Mod_Status Leak',
    color: '#e11d48',
    evidenceCount: 2,
    confidence: 96,
    evidenceSnippet: 'Origin IP 185.220.101.44 exposed via status endpoint with harbor-sync vhost.',
    evidenceIds: ['EV-26151-021', 'EV-26151-042'],
    activeWindow: '2026-07-18 - 2026-08-24',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nr-vps',
    source: 'node-nr',
    target: 'node-vps',
    relationType: 'HOSTED_ON',
    label: 'SAN Continuity & SSH Key',
    color: '#e11d48',
    evidenceCount: 2,
    confidence: 96,
    evidenceSnippet: 'Shared Let\'s Encrypt SAN and identical ED25519 SSH host key on port 22.',
    evidenceIds: ['EV-26151-021', 'EV-26151-042'],
    activeWindow: '2026-07-18 - 2026-08-24',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nh-onion',
    source: 'node-nh',
    target: 'node-onion-nh',
    relationType: 'OPERATES_ONION',
    label: 'Tor V3 Service Deployment',
    color: '#64748b',
    evidenceCount: 1,
    confidence: 95,
    evidenceSnippet: 'Descriptor publication consensus record for harbor77...onion.',
    evidenceIds: ['EV-26151-045'],
    activeWindow: '2024-04-01 - 2026-07-25',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nr-onion',
    source: 'node-nr',
    target: 'node-onion-nr',
    relationType: 'OPERATES_ONION',
    label: 'Successor Service Deployment',
    color: '#64748b',
    evidenceCount: 1,
    confidence: 91,
    evidenceSnippet: 'Descriptor publication consensus record for river99...onion.',
    evidenceIds: ['EV-26151-045'],
    activeWindow: '2026-07-15 - Present',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nh-btc',
    source: 'node-nh',
    target: 'node-btc-nh',
    relationType: 'OWNS_WALLET',
    label: '142.5 BTC Escrow Splitter',
    color: '#d97706',
    evidenceCount: 1,
    confidence: 98,
    evidenceSnippet: 'Direct ransom payment inflows identified from healthcare breach target.',
    evidenceIds: ['EV-26151-038'],
    transferVolume: '$1.42M USD (142.5 BTC)',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-nr-btc',
    source: 'node-nr',
    target: 'node-btc-nr',
    relationType: 'OWNS_WALLET',
    label: 'Peel Chain Recipient',
    color: '#d97706',
    evidenceCount: 1,
    confidence: 92,
    evidenceSnippet: '14.85 BTC peel chain hop transferred without mixer obfuscation.',
    evidenceIds: ['EV-26151-038'],
    transferVolume: '$148.5K USD (14.85 BTC)',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-btc-peel',
    source: 'node-btc-nh',
    target: 'node-btc-nr',
    relationType: 'DIRECT_PEEL_CHAIN',
    label: '14.85 BTC Hop (Tx 8f9b204c)',
    color: '#d97706',
    evidenceCount: 1,
    confidence: 99,
    evidenceSnippet: 'Public ledger direct spend transaction without CoinJoin mixer round.',
    evidenceIds: ['EV-26151-038'],
    transferVolume: '14.85 BTC ($148,500 USD)',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-conflict-nh',
    source: 'node-nh',
    target: 'node-conflict',
    relationType: 'CONTRADICTS_MIGRATION',
    label: 'AS58224 Session 03:12 UTC',
    color: '#dc2626',
    evidenceCount: 1,
    confidence: 95,
    isContradiction: true,
    evidenceSnippet: 'Active session registered in Iran during asserted retirement.',
    evidenceIds: ['EV-26151-041'],
    activeWindow: '2026-08-21 03:12 UTC',
    sourceReliability: 'HIGH'
  },
  {
    id: 'edge-conflict-nr',
    source: 'node-nr',
    target: 'node-conflict',
    relationType: 'CONTRADICTS_MIGRATION',
    label: 'AS206216 Session 03:12 UTC',
    color: '#dc2626',
    evidenceCount: 1,
    confidence: 95,
    isContradiction: true,
    evidenceSnippet: 'Simultaneous session registered in Bulgaria under successor persona.',
    evidenceIds: ['EV-26151-041'],
    activeWindow: '2026-08-21 03:12 UTC',
    sourceReliability: 'HIGH'
  }
];

export const MOCK_TIMELINE: TimelineEvent[] = [
  {
    id: 'time-1',
    date: '2026-07-12',
    formattedDate: '12 JUL 2026',
    title: 'Successor Alias Introduced & PGP Subkey Endorsed',
    description: 'NightRiver registers initial marketplace thread. EV-26151-014 captures PGP transition packet endorsed by NightHarbor master key 7AC419F2.',
    category: 'alias',
    entity: 'NightHarbor · NightRiver',
    linkedEvidenceId: 'EV-26151-014'
  },
  {
    id: 'time-2',
    date: '2026-07-18',
    formattedDate: '18 JUL 2026',
    title: 'Cross-Layer Infrastructure SAN Overlap Recorded',
    description: 'CITE engine captures Let\'s Encrypt certificate EV-26151-021 demonstrating simultaneous SAN for harbor-sync.is and river-sync-node.is on 185.220.101.44.',
    category: 'infra',
    entity: 'srv-03 · 185.220.101.44',
    linkedEvidenceId: 'EV-26151-021'
  },
  {
    id: 'time-3',
    date: '2026-08-03',
    formattedDate: '03 AUG 2026',
    title: 'PTRW Stylometric Multi-Feature Comparison',
    description: 'Writeprint analysis generates 84.2% function-word correlation between NightHarbor legacy corpus and NightRiver replies. Short-text disclaimer flagged.',
    category: 'write',
    entity: 'NightHarbor · NightRiver',
    linkedEvidenceId: 'EV-26151-032'
  },
  {
    id: 'time-4',
    date: '2026-08-08',
    formattedDate: '08 AUG 2026',
    title: 'Direct Bitcoin Peel Chain Transfer Executed',
    description: 'EV-26151-038 logs 14.85 BTC transferred directly from NightHarbor splitter wallet into NightRiver deposit address without mixer round.',
    category: 'wallet',
    entity: 'bc1q9u...4zx → bc1qxy...h2p',
    linkedEvidenceId: 'EV-26151-038'
  },
  {
    id: 'time-5',
    date: '2026-08-21',
    formattedDate: '21 AUG 2026',
    title: 'Contradiction Flagged: Simultaneous Session Collision',
    description: 'EV-26151-041 identifies active authenticated sessions simultaneously recorded from AS58224 (Iran) and AS206216 (Bulgaria), conflicting with clean single-actor migration.',
    category: 'conflict',
    entity: 'Contradiction Monitor',
    linkedEvidenceId: 'EV-26151-041',
    isContradiction: true
  },
  {
    id: 'time-6',
    date: '2026-08-24',
    formattedDate: '24 AUG 2026',
    title: 'ED25519 SSH Host Key Continuity Confirmed',
    description: 'Port 22 SSH host key fingerprint EV-26151-042 confirms persistent operational server environment behind the onion routing endpoints.',
    category: 'infra',
    entity: 'srv-03 Gateway',
    linkedEvidenceId: 'EV-26151-042'
  },
  {
    id: 'time-7',
    date: '2026-08-25',
    formattedDate: '25 AUG 2026',
    title: 'Fusion Score Evaluated: Investigative Lead Status Retained',
    description: 'Evidence fusion calculates ACS = 78.4%. Contradiction penalty prevents corroborated status; analyst review mandated before any prosecutorial export.',
    category: 'hypothesis',
    entity: 'UN-VEIL Fusion Engine',
    linkedEvidenceId: 'EV-26151-041'
  }
];

export const MOCK_AGENT_TASKS: AgentTask[] = [
  {
    id: 'TASK-01',
    taskName: 'Correlate OpenPGP Keyring Against Case Corpus',
    toolUsed: 'UNVEIL-PGP-ROUTER',
    status: 'COMPLETED',
    timestamp: '14:10:02 UTC',
    evidenceGatheredCount: 1,
    summary: 'Extracted key packet EV-26151-014. Cryptographically confirmed subkey B910C24A was signed by master key 7AC419F2.'
  },
  {
    id: 'TASK-02',
    taskName: 'Triangulate Tor V3 Endpoints to Origin IP Subnets',
    toolUsed: 'CITE-INFRA-SCANNER',
    status: 'COMPLETED',
    timestamp: '14:22:45 UTC',
    evidenceGatheredCount: 3,
    summary: 'Queried historical certificates and Apache mod_status leak. Mapped harbor77...onion and river99...onion to VPS 185.220.101.44.'
  },
  {
    id: 'TASK-03',
    taskName: 'Inspect Blockchain Peel Chains for Direct Value Flow',
    toolUsed: 'BTI-LEDGER-WALK',
    status: 'COMPLETED',
    timestamp: '14:38:19 UTC',
    evidenceGatheredCount: 1,
    summary: 'Tracked Tx 8f9b204c. Identified 14.85 BTC unmixed transfer between suspected persona wallets.'
  },
  {
    id: 'TASK-04',
    taskName: 'Execute Paraphrase-Robust Stylometric Writeprint Match',
    toolUsed: 'PTRW-NLP-EMBEDDING',
    status: 'COMPLETED',
    timestamp: '15:02:11 UTC',
    evidenceGatheredCount: 1,
    summary: 'Evaluated lexical diversity and function-word frequencies across 14,200 tokens. Returned 84.2% overlap. Short-text guardrail active.'
  },
  {
    id: 'TASK-05',
    taskName: 'Audit Temporal Session Log Continuity & Anomaly Scan',
    toolUsed: 'TEMPORAL-COLLISION-CHECK',
    status: 'COMPLETED',
    timestamp: '15:15:40 UTC',
    evidenceGatheredCount: 1,
    summary: 'DETECTED CONTRADICTION: Flagged simultaneous active sessions on 2026-08-21 03:12 UTC across disparate geographical ASNs.',
    evidenceGap: 'Unresolved gap: Need independent access logs to verify whether session was an automated keepalive script or secondary human operator.'
  },
  {
    id: 'TASK-06',
    taskName: 'Synthesize Cross-Layer Evidence & Formulate Gap Statement',
    toolUsed: 'INVESTIGATION-ORCHESTRATOR',
    status: 'COMPLETED',
    timestamp: '15:40:00 UTC',
    evidenceGatheredCount: 7,
    summary: 'Formulated current posture: INVESTIGATIVE LEAD (ACS 78.4). Agentic read-only stopping criteria satisfied. Handoff to human analyst.',
    evidenceGap: 'Pending Analyst Action: Issue subpoena or mutual legal assistance request for AS206216 upstream netflow before attribution determination.'
  }
];

export const MOCK_ACTIVITY_FEED: ActivityFeedItem[] = [
  {
    id: 'ACT-901',
    timestamp: '2026-08-25 15:40:00 UTC',
    relativeTime: '12 min ago',
    actorHandle: 'NightRiver',
    type: 'CONTRADICTION_FLAG',
    summary: 'Temporal audit verified simultaneous session conflict EV-26151-041. Fusion score adjusted to 78.4%.',
    badgeText: 'CONTRADICTION',
    badgeTone: 'red'
  },
  {
    id: 'ACT-902',
    timestamp: '2026-08-25 14:38:19 UTC',
    relativeTime: '1 hr ago',
    actorHandle: 'NightHarbor',
    type: 'BLOCKCHAIN_TRACE',
    summary: 'BTI engine confirmed direct 14.85 BTC peel chain hop to NightRiver ingress vault #2.',
    badgeText: 'BTI LEDGER',
    badgeTone: 'amber'
  },
  {
    id: 'ACT-903',
    timestamp: '2026-08-25 14:22:45 UTC',
    relativeTime: '2 hrs ago',
    actorHandle: 'srv-03.harbor-sync',
    type: 'INFRASTRUCTURE_SCAN',
    summary: 'CITE scanner re-verified ED25519 SSH host key continuity on Bulgarian hosting relay 185.220.101.44.',
    badgeText: 'CITE INFRA',
    badgeTone: 'cyan'
  },
  {
    id: 'ACT-904',
    timestamp: '2026-08-25 11:15:00 UTC',
    relativeTime: '4 hrs ago',
    actorHandle: 'NightRiver',
    type: 'STYLOMETRY_RUN',
    summary: 'PTRW model processed 4 new forum message tokens. Semantic writeprint residual consistent with prior profile.',
    badgeText: 'PTRW NLP',
    badgeTone: 'purple'
  },
  {
    id: 'ACT-905',
    timestamp: '2026-08-25 09:30:11 UTC',
    relativeTime: '6 hrs ago',
    actorHandle: 'harbor77...onion',
    type: 'EVIDENCE_INGEST',
    summary: 'Tor descriptor keepalive EV-26151-045 ingested into S3/MinIO evidence vault with SHA-256 validation.',
    badgeText: 'WARC HASHED',
    badgeTone: 'emerald'
  }
];
