# UN-VEIL Technical Architecture Specification

## 1. System Topology & Data Flow

```
                      AUTHORIZED DATA SOURCES
                     (Controlled Demo Corpus)
                                ↓
                        ACQUISITION LAYER
                  (Tor Onion, Clear, Ledger Probes)
                                ↓
                      EVIDENCE PRESERVATION
                  (S3 / MinIO — WARC & SHA-256)
                                ↓
                      EXTRACTION FABRIC
                                ↓
             ┌──────────────────┼──────────────────┐
             ↓                  ↓                  ↓
            CITE               BTI                PTRW
     (Infrastructure)     (Blockchain)        (Stylometry)
             │                  │                  │
             └──────────────────┼──────────────────┘
                                ↓
                       IDENTITY RESOLUTION
                                ↓
                     TEMPORAL GRAPH (ELTAG)
                        (Neo4j Modeling)
                                ↕
             AGENTIC INVESTIGATION ORCHESTRATOR
                (Read-Only Analytical Coordinator)
                                ↓
                      EVIDENCE FUSION LAYER
                      (Logistic ACS Equation)
                                ↓
                         DECISION POLICY
                   (Formal Abstention Bounds)
                                ↓
                       ANALYST WORKSPACE
                 (React / PostgreSQL Metadata)
```

## 2. Logical Storage Tiering

| Layer | Logical Production Store | Controlled Prototype Fixture | Primary Role |
|---|---|---|---|
| **Case Metadata & Governance** | PostgreSQL 16 | Typed Domain Models (`src/data/mockData.ts`) | Case controls, audit trail, user credentials, access control |
| **Temporal Evidence Graph** | Neo4j 5.x Enterprise | Interactive Native SVG Force/Hierarchical Engine | Entity-relationship topologies, temporal edge metadata |
| **Stylometric Embeddings** | Qdrant Vector DB | PTRW Feature Residual Fixtures | Function-word distributions, token frequency vectors |
| **Forensic Evidence Vault** | S3 / MinIO Object Storage | WARC Byte Offsets & SHA-256 Hashing | Immutable raw HTML/WARC captures with cryptographic validation |

## 3. Evidence Fusion Mathematical Model

Attribution Confidence Score ($ACS$) is derived from decoupled signal weights:

$$z = \beta_0 + \beta_I \cdot I + \beta_C \cdot C + \beta_S \cdot S + \beta_B \cdot B + \beta_T \cdot T + \beta_R \cdot R - \beta_X \cdot X$$

$$ACS = 100 \times \frac{1}{1 + e^{-z}}$$

Where:
- $\beta_0 = -1.2$ (Base prior)
- $I = 1$ ($\beta_I = +2.1$, Multi-layer infrastructure match)
- $C = 1$ ($\beta_C = +2.8$, Cryptographic subkey cross-signature)
- $S = 1$ ($\beta_S = +1.9$, PTRW stylometric syntax overlap)
- $B = 1$ ($\beta_B = +1.4$, Direct Bitcoin peel chain transfer)
- $T = 1$ ($\beta_T = +1.1$, Consistent temporal window)
- $R = 1$ ($\beta_R = +1.2$, Source reliability factor)
- $X = 1$ ($\beta_X = 2.4$, Contradiction penalty for simultaneous session collision)

Result: $z = 1.29 \implies \sigma(z) = 0.784 \implies ACS = 78.4\%$.

## 4. Decision Policy & Formal Abstention Rules

1. **Corroborated Candidate:** $ACS \ge 85\%$ and Contradiction Count $= 0$.
2. **Investigative Lead:** $65\% \le ACS < 85\%$ or Contradiction Count $> 0$.
3. **Needs More Evidence:** $ACS < 65\%$.
4. **Formal Abstention:** Contradiction penalty $\beta_X \cdot X \ge 2.0$ or mutually incompatible cryptographic signatures. System explicitly presents **ABSTAIN** to prevent false certainty.

## 5. Agentic Orchestrator Guardrails

The Agentic Assistant adheres strictly to a read-only contract:
- Query-only access to existing evidence artifacts and graphs.
- Autonomous task decomposition and tool routing.
- Identification of evidence gaps and recommended subpoena/collection actions.
- **Strict Prohibition:** Agent cannot modify evidence, alter fusion coefficients, or output binding attribution decisions.
