# UN-VEIL — Unmasking Virtual Entities & Intelligence Linkage

> **Evidence-Locked Temporal Attribution for Dark-Web Intelligence**  
> *National Cyber Threat Attribution & Forensic Evidence Intelligence Portal*  
> *Project SIH-26151 (NTRO, Blockchain & Cybersecurity)*

---

## 1. Project Overview

**UN-VEIL** is a national-grade cyber intelligence and digital forensics platform designed for investigative analysts. It correlates pseudonymous dark-web threat actors across Tor hidden services, cryptographic keys, blockchain ledgers, infrastructure footprints, and stylometric writeprints.

The system enforces an **evidence-first analytical philosophy**:
- **Collection ≠ Attribution:** Raw ingestion preserves forensic evidence without premature conclusions.
- **Explainability (WHY Engine):** Every suggested attribution link exposes its exact supporting evidence, independent corroboration channels, temporal migration window, and forensic provenance.
- **Formal Analytical Abstention:** When evidence is conflicting, incomplete, or ambiguous, the platform formally **abstains** from declaring attribution rather than forcing a false verdict.
- **Read-Only Agentic Orchestration:** AI assistance is strictly confined to read-only task planning and evidence gap identification; attribution verdicts are reserved for the deterministic fusion policy and human analyst review.

---

## 2. Technical Architecture & Data Separation

The application structure mirrors the production logical separation of concerns:

```
AUTHORIZED / CONTROLLED SOURCES
                ↓
        ACQUISITION GATEWAY
                ↓
       EVIDENCE PRESERVATION (S3 / MinIO — WARC & SHA-256)
                ↓
          EXTRACTION FABRIC
                ↓
      ┌─────────┼─────────┐
      ↓         ↓         ↓
     CITE      BTI       PTRW
(Infrastructure) (Blockchain) (Stylometry)
      │         │         │
      └─────────┼─────────┘
                ↓
       IDENTITY RESOLUTION
                ↓
              ELTAG (Neo4j — Temporal Relationship Graph)
                ↕
   AGENTIC INVESTIGATION ORCHESTRATOR (Read-Only Coordinator)
                ↓
        EVIDENCE FUSION (Logistic ACS Engine)
                ↓
        DECISION POLICY & ABSTENTION
                ↓
        ANALYST WORKSPACE (PostgreSQL / Frontend Console)
```

| Component | Production Logical Store | Controlled Demo Mode |
|---|---|---|
| **Case & Control Metadata** | PostgreSQL | Strict TypeScript Domain Models |
| **Temporal Entity Graph** | Neo4j (Cypher) | Native Interactive SVG Force/Hierarchical Engine |
| **Persona Stylometric Vectors** | Qdrant Vector DB | PTRW Feature Residual Fixtures |
| **Forensic Evidence & Provenance** | S3 / MinIO | WARC Offsets & SHA-256 Hashing |

---

## 3. Technology Stack

- **Core Framework:** React 19 + TypeScript (Strict Type Safety)
- **Bundler & Build Tool:** Vite 8 (`npm run dev`, `npm run build` in <800ms)
- **Styling Architecture:** Modern Federal Design System (OKLCH color scales, Tailwind-inspired tokens, CSS Custom Properties, Manrope / Plus Jakarta Sans / JetBrains Mono typography)
- **Iconography:** Lucide React
- **Visualization:** Native SVG Interactive Graph Engine (Zero heavy third-party graph dependencies, zoom/pan, dragging, layout toggling)
- **Assets:** High-resolution local WebM cinematic loop (`/hero-loop.webm`), offline local font fallback definitions, SVGs

---

## 4. Controlled Demo Scope

- **Primary Investigation:** `CASE-26151-001` — *Controlled Alias Migration & Cross-Layer Linkage Study*
- **Primary Subject:** `NightHarbor` (P-001, Legacy Persona)
- **Successor Subject:** `NightRiver` (P-002, Emergent Identity)
- **Observed Corroboration (4 Independent Groups):**
  1. *Cryptographic:* OpenPGP key transition packet (EV-26151-014) signed by master key `7AC419F2`.
  2. *Infrastructure:* X.509 Let's Encrypt certificate (EV-26151-021) with dual SAN for `harbor-sync.is` and `river-sync-node.is` hosted on origin VPS `185.220.101.44`.
  3. *Blockchain:* Direct unmixed 14.85 BTC peel chain hop (EV-26151-038) from splitter to ingress vault.
  4. *Stylometric:* 84.2% function-word distribution overlap (EV-26151-032).
- **Contradiction Flag (Active Penalty):**
  - Artifact `EV-26151-041`: Simultaneous active Jabber administrative sessions recorded in Bulgaria and Iran on 2026-08-21 03:12 UTC. Subtracted `-2.4` penalty in fusion formula.
- **Attribution Score (ACS):** `78.4%` (Investigative Lead; not proof).

---

## 5. Intelligence Modules & Routes

| Module | Identifier | Description |
|---|---|---|
| **Operations Dashboard** | `dashboard` | High-density overview, real-time activity feed, mini temporal graph, attention queues. |
| **Case Management** | `cases` | Case corpus registry, priority chips, assigned agencies, forensic storage tiering. |
| **Persona Profiles** | `actors` | Persona dossiers, known aliases, PGP fingerprints, wallet balances, writeprints. |
| **Temporal Evidence Graph** | `graph` | Interactive ELTAG graph with zoom/pan, node dragging, hierarchical/clustered layouts. |
| **Observation Timeline** | `timeline` | Chronological event sequence from 12 JUL 2026 to 25 AUG 2026 with category filters. |
| **Evidence Explorer** | `evidence` | Preserved artifact catalog, WARC URI offsets, cryptographic SHA-256 hash copying. |
| **CITE // Infrastructure** | `cite` | Cross-Layer Infrastructure Triangulation Engine (certificates, SSH host keys, Apache leaks). |
| **BTI // Blockchain** | `bti` | Blockchain Transaction Intelligence (unhosted peel chains, counterparty clustering). |
| **PTRW // Stylometry** | `ptrw` | Paraphrase-Robust Temporal Writeprint (lexical diversity, posting cadence, short-text limits). |
| **Evidence Fusion & ACS** | `fusion` | Attribution Confidence Scoring mathematical engine ($ACS = 100 \times \sigma(z)$) and abstention policy. |
| **Agent Orchestrator** | `agent` | Read-only investigation coordinator (task decomposition, tool routing, evidence gap analysis). |
| **Forensic Reports** | `reports` | Multi-format exports: Formal Dossier (PDF/TXT), STIX 2.1 (JSON), Grand Jury Table (CSV), Raw Vault (JSON). |
| **Cinematic Ingress View** | `landing` | High-impact loop video portal ingress with key metrics and direct console entry. |

---

## 6. Local Setup & Execution

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Run Locally
```bash
# Navigate to project directory
cd D:\UNVEIL

# Install dependencies (if not already installed)
npm install

# Start Vite local development server
npm run dev
```

The application will be live at:
**`http://localhost:5173/`**

### Build Production Bundle
```bash
npm run build
```
Generates an optimized, tree-shaken static production bundle in `dist/` in under 1 second.

---

## 7. Demo Walkthrough Guide

1. **Dashboard & Case Orientation:**
   - Review `CASE-26151-001` metrics, active contradiction flag, and live intelligence feed.
2. **Explainability (WHY Panel):**
   - Click **WHY Link?** in the header or case card.
   - Inspect the 4 independent supporting groups, the active contradiction penalty (EV-26151-041), and the cryptographic SHA-256 provenance.
3. **Temporal Evidence Graph:**
   - Switch to **Temporal Evidence Graph**.
   - Drag nodes to rearrange topology, zoom/pan using canvas controls, toggle between **CLUSTERED** and **HIERARCHICAL** layouts.
   - Click an edge to inspect relationship telemetry.
4. **Deep-Dive Analytics (CITE, BTI, PTRW):**
   - Visit **CITE** to inspect origin IP leaks (`185.220.101.44`) and Let's Encrypt SAN overlaps.
   - Visit **BTI** to view the 14.85 BTC peel chain hop without CoinJoin obfuscation.
   - Visit **PTRW** to inspect the 84.2% function-word correlation and review the short-text sample disclaimer.
5. **Evidence Fusion & Formal Abstention:**
   - Visit **Evidence Fusion & ACS** to inspect the logistic formula $z = \beta_0 + \sum \beta_k X_k - \beta_X X$.
   - Observe why the system holds an **INVESTIGATIVE LEAD** posture instead of claiming verified individual identity.
6. **Agentic Orchestrator:**
   - Open **Agent Orchestrator** to inspect read-only tool routing, evidence retrieval, and identified evidence gaps.
7. **Forensic Exports:**
   - Open **Forensic Reports** and click **Download Dossier** or **Export STIX 2.1** to generate a complete, court-ready report package.
8. **Cinematic Hero Mode:**
   - Click **Cinematic Mode** in the top federal classification bar to experience the video-backed ingress screen, then click **Enter Evidence Console** to return.

---

## 8. Standards & Compliance Disclaimers

- **Synthetic Demonstrative Data:** All personas, infrastructure indicators, and blockchain transactions are synthetic, controlled research artifacts created exclusively for the SIH26151 demonstration testbed.
- **No Live Probing:** UN-VEIL does not probe or scan unauthorized live criminal networks.
- **Attribution Policy:** Attribution confidence scores represent current evidence state and are never presented as guaranteed biometric proof. Final decisions require certified analyst review.
- **Standards:** Compliant with CJIS Security Policy Standard 5.4 principles and FIPS 140-3 cryptographic hashing requirements.
