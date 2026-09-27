import React, { useState, useRef, useMemo } from 'react';
import { 
  Network, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Filter, 
  HelpCircle, 
  AlertTriangle, 
  Info, 
  CheckCircle2, 
  X,
  ExternalLink 
} from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { MOCK_GRAPH_NODES, MOCK_GRAPH_EDGES, MOCK_PERSONAS } from '../data/mockData';
import { GraphNode, GraphEdge, PersonaProfile } from '../types';

interface GraphViewProps {
  onOpenWhy: () => void;
  onSelectActor?: (actor: PersonaProfile) => void;
  focusedActorId?: string;
}

export const GraphView: React.FC<GraphViewProps> = ({
  onOpenWhy,
  onSelectActor,
  focusedActorId
}) => {
  // Graph Canvas State
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [startPan, setStartPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Node Positions (supports dragging)
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>(() => {
    const initial: Record<string, { x: number; y: number }> = {};
    MOCK_GRAPH_NODES.forEach(n => {
      initial[n.id] = { x: n.x || 300, y: n.y || 200 };
    });
    return initial;
  });

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Inspection states
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedEdge, setSelectedEdge] = useState<GraphEdge | null>(null);

  // Filters
  const [confidenceFilter, setConfidenceFilter] = useState<'ALL' | 'HIGH' | 'CRITICAL'>('ALL');
  const [layoutMode, setLayoutMode] = useState<'clustered' | 'hierarchical'>('clustered');
  const [typeFilters, setTypeFilters] = useState<Record<string, boolean>>({
    PERSONA: true,
    INFRASTRUCTURE: true,
    WALLET: true,
    CRYPTO_EVIDENCE: true,
    ONION: true,
    CONTRADICTION: true
  });

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Layout switcher
  const applyLayout = (mode: 'clustered' | 'hierarchical') => {
    setLayoutMode(mode);
    setNodePositions(prev => {
      const updated = { ...prev };
      if (mode === 'hierarchical') {
        updated['node-nh'] = { x: 180, y: 80 };
        updated['node-nr'] = { x: 620, y: 80 };
        updated['node-pgp'] = { x: 400, y: 80 };
        updated['node-btc-nh'] = { x: 180, y: 220 };
        updated['node-btc-nr'] = { x: 620, y: 220 };
        updated['node-conflict'] = { x: 400, y: 220 };
        updated['node-onion-nh'] = { x: 180, y: 350 };
        updated['node-onion-nr'] = { x: 620, y: 350 };
        updated['node-vps'] = { x: 400, y: 350 };
      } else {
        // Clustered
        MOCK_GRAPH_NODES.forEach(n => {
          updated[n.id] = { x: n.x || 300, y: n.y || 200 };
        });
      }
      return updated;
    });
  };

  // Filtered nodes and edges
  const visibleNodes = useMemo(() => {
    return MOCK_GRAPH_NODES.filter(node => {
      if (!typeFilters[node.type]) return false;
      if (confidenceFilter === 'HIGH' && node.confidence < 85) return false;
      if (confidenceFilter === 'CRITICAL' && node.confidence < 95) return false;
      return true;
    });
  }, [typeFilters, confidenceFilter]);

  const visibleNodeIds = useMemo(() => new Set(visibleNodes.map(n => n.id)), [visibleNodes]);

  const visibleEdges = useMemo(() => {
    return MOCK_GRAPH_EDGES.filter(edge => 
      visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
  }, [visibleNodeIds]);

  // Mouse handlers for canvas panning
  const handleMouseDownCanvas = (e: React.MouseEvent) => {
    if (e.target === svgRef.current || (e.target as HTMLElement).tagName === 'svg') {
      setIsPanning(true);
      setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMoveCanvas = (e: React.MouseEvent) => {
    if (isPanning) {
      setPan({ x: e.clientX - startPan.x, y: e.clientY - startPan.y });
    } else if (draggingNodeId && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const currentX = (e.clientX - rect.left - pan.x) / zoom;
      const currentY = (e.clientY - rect.top - pan.y) / zoom;
      setNodePositions(prev => ({
        ...prev,
        [draggingNodeId]: { x: currentX - dragOffset.x, y: currentY - dragOffset.y }
      }));
    }
  };

  const handleMouseUpCanvas = () => {
    setIsPanning(false);
    setDraggingNodeId(null);
  };

  // Node Drag Start
  const handleNodeMouseDown = (e: React.MouseEvent, node: GraphNode) => {
    e.stopPropagation();
    setSelectedNode(node);
    setSelectedEdge(null);
    setDraggingNodeId(node.id);
    const pos = nodePositions[node.id] || { x: node.x || 300, y: node.y || 200 };
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const currentX = (e.clientX - rect.left - pan.x) / zoom;
      const currentY = (e.clientY - rect.top - pan.y) / zoom;
      setDragOffset({ x: currentX - pos.x, y: currentY - pos.y });
    }
  };

  // Reset zoom & pan
  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const getNodeColor = (type: GraphNode['type']) => {
    switch (type) {
      case 'PERSONA': return { fill: '#0a192f', stroke: '#38bdf8', text: '#ffffff' };
      case 'INFRASTRUCTURE': return { fill: '#3f1d24', stroke: '#f43f5e', text: '#fecdd3' };
      case 'WALLET': return { fill: '#451a03', stroke: '#f59e0b', text: '#fef3c7' };
      case 'CRYPTO_EVIDENCE': return { fill: '#172554', stroke: '#60a5fa', text: '#dbeafe' };
      case 'ONION': return { fill: '#1e293b', stroke: '#94a3b8', text: '#f1f5f9' };
      case 'CONTRADICTION': return { fill: '#450a0a', stroke: '#ef4444', text: '#fee2e2' };
      default: return { fill: '#0f2a4a', stroke: '#0284c7', text: '#ffffff' };
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SectionHeader
        eyebrow="EVIDENCE-LOCKED TEMPORAL ATTRIBUTION GRAPH (ELTAG)"
        title="Interactive Temporal Relationship Graph"
        subtitle="Draggable nodes, multi-signal evidence edges, zoom/pan controls, and deep relationship inspection."
        action={
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="btn-secondary" 
              onClick={() => applyLayout(layoutMode === 'clustered' ? 'hierarchical' : 'clustered')}
              style={{ fontSize: '11px', padding: '6px 12px' }}
            >
              <Layers size={13} />
              <span>Layout: {layoutMode.toUpperCase()}</span>
            </button>
            <button 
              className="btn-primary" 
              onClick={onOpenWhy}
              style={{ fontSize: '11px', padding: '6px 14px' }}
            >
              <HelpCircle size={14} color="#38bdf8" />
              <span>Open WHY Panel</span>
            </button>
          </div>
        }
      />

      {/* Control Bar: Filters & Zoom */}
      <div className="portal-card" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
        {/* Entity Type Filter Toggles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
            Filter:
          </span>
          {[
            { key: 'PERSONA', label: 'Personas', color: '#38bdf8' },
            { key: 'INFRASTRUCTURE', label: 'Infra (VPS)', color: '#f43f5e' },
            { key: 'WALLET', label: 'Wallets', color: '#f59e0b' },
            { key: 'CRYPTO_EVIDENCE', label: 'PGP Keys', color: '#60a5fa' },
            { key: 'ONION', label: 'Tor Hidden', color: '#94a3b8' },
            { key: 'CONTRADICTION', label: 'Conflicts', color: '#ef4444' }
          ].map(f => {
            const isActive = typeFilters[f.key];
            return (
              <button
                key={f.key}
                onClick={() => setTypeFilters(prev => ({ ...prev, [f.key]: !prev[f.key] }))}
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  border: isActive ? `1px solid ${f.color}` : '1px solid #cbd5e1',
                  backgroundColor: isActive ? '#f8fafc' : '#ffffff',
                  color: isActive ? '#0f172a' : '#94a3b8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isActive ? f.color : '#cbd5e1' }} />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Zoom & Reset Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button 
            className="btn-secondary" 
            onClick={() => setZoom(z => Math.min(z + 0.15, 2.0))} 
            title="Zoom In"
            style={{ padding: '5px 8px' }}
          >
            <ZoomIn size={14} />
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => setZoom(z => Math.max(z - 0.15, 0.5))} 
            title="Zoom Out"
            style={{ padding: '5px 8px' }}
          >
            <ZoomOut size={14} />
          </button>
          <button 
            className="btn-secondary" 
            onClick={handleResetView} 
            title="Reset Pan & Zoom"
            style={{ padding: '5px 8px' }}
          >
            <RotateCcw size={14} />
          </button>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b', paddingLeft: '4px' }}>
            {Math.round(zoom * 100)}%
          </span>
        </div>
      </div>

      {/* Main Canvas & Side Inspector Split */}
      <div style={{ display: 'grid', gridTemplateColumns: (selectedNode || selectedEdge) ? '1fr 340px' : '1fr', gap: '16px' }}>
        {/* SVG Interactive Graph Canvas */}
        <div 
          className="portal-card graph-canvas"
          style={{
            height: '560px',
            position: 'relative',
            overflow: 'hidden',
            cursor: isPanning ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDownCanvas}
          onMouseMove={handleMouseMoveCanvas}
          onMouseUp={handleMouseUpCanvas}
        >
          <svg 
            ref={svgRef}
            style={{ width: '100%', height: '100%', userSelect: 'none' }}
          >
            <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
              {/* Edges */}
              {visibleEdges.map(edge => {
                const sPos = nodePositions[edge.source];
                const tPos = nodePositions[edge.target];
                if (!sPos || !tPos) return null;

                const isSelected = selectedEdge?.id === edge.id;
                const isContradiction = edge.isContradiction;
                const midX = (sPos.x + tPos.x) / 2;
                const midY = (sPos.y + tPos.y) / 2;

                return (
                  <g key={edge.id}>
                    <line
                      x1={sPos.x}
                      y1={sPos.y}
                      x2={tPos.x}
                      y2={tPos.y}
                      stroke={isContradiction ? '#dc2626' : (edge.color || '#0284c7')}
                      strokeWidth={isSelected ? 4 : (isContradiction ? 3 : 2)}
                      strokeDasharray={isContradiction ? '6 3' : (edge.evidenceCount > 1 ? undefined : '5 4')}
                      style={{ cursor: 'pointer', transition: 'stroke-width 0.15s ease' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEdge(edge);
                        setSelectedNode(null);
                      }}
                    />
                    {/* Edge Label Badge */}
                    <g 
                      transform={`translate(${midX}, ${midY})`}
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEdge(edge);
                        setSelectedNode(null);
                      }}
                    >
                      <rect
                        x="-70"
                        y="-11"
                        width="140"
                        height="22"
                        rx="4"
                        fill="#091526"
                        stroke={isSelected ? '#38bdf8' : (isContradiction ? '#ef4444' : '#1e293b')}
                        strokeWidth="1"
                      />
                      <text
                        textAnchor="middle"
                        y="4"
                        fill={isContradiction ? '#fca5a5' : '#38bdf8'}
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        fontWeight="600"
                      >
                        {edge.label}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Nodes */}
              {visibleNodes.map(node => {
                const pos = nodePositions[node.id] || { x: node.x || 300, y: node.y || 200 };
                const isSelected = selectedNode?.id === node.id;
                const style = getNodeColor(node.type);
                const r = node.type === 'PERSONA' ? 38 : 28;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    style={{ cursor: 'move' }}
                    onMouseDown={(e) => handleNodeMouseDown(e, node)}
                  >
                    {/* Focus Halo if selected */}
                    {isSelected && (
                      <circle
                        r={r + 8}
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                        className="pulse-indicator"
                      />
                    )}

                    <circle
                      r={r}
                      fill={style.fill}
                      stroke={style.stroke}
                      strokeWidth={isSelected ? 3 : 2}
                      filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"
                    />

                    <text
                      textAnchor="middle"
                      y="-2"
                      fill={style.text}
                      fontSize={node.type === 'PERSONA' ? "12" : "10"}
                      fontWeight="700"
                      fontFamily="var(--font-sans)"
                      pointerEvents="none"
                    >
                      {node.label}
                    </text>

                    {node.sublabel && (
                      <text
                        textAnchor="middle"
                        y="12"
                        fill="#94a3b8"
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        pointerEvents="none"
                      >
                        {node.sublabel}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Quick HUD overlay in graph bottom-left */}
          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: 'rgba(9, 21, 38, 0.85)',
            border: '1px solid #1a3d66',
            borderRadius: '6px',
            padding: '8px 12px',
            color: '#cbd5e1',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 700 }}>CASE-26151-001</span>
              <span>•</span>
              <span>{visibleNodes.length} Nodes</span>
              <span>•</span>
              <span>{visibleEdges.length} Verified Links</span>
            </div>
          </div>
        </div>

        {/* Side Inspector Panel (When node or edge is selected) */}
        {(selectedNode || selectedEdge) && (
          <div className="portal-card" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
                {selectedNode ? 'NODE INSPECTOR' : 'EDGE RELATIONSHIP'}
              </span>
              <button
                onClick={() => { setSelectedNode(null); setSelectedEdge(null); }}
                style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Selected Node Details */}
            {selectedNode && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span className="badge badge-cyan">{selectedNode.type}</span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#64748b' }}>
                    Conf: {selectedNode.confidence}%
                  </span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', margin: '4px 0 2px 0' }}>
                  {selectedNode.label}
                </h4>
                <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 12px 0' }}>
                  {selectedNode.sublabel}
                </p>

                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#334155', display: 'flex', flexDirection: 'column', gap: '6px', backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div><strong>First Seen:</strong> {selectedNode.firstSeen || '2026-07-12'}</div>
                  <div><strong>Last Seen:</strong> {selectedNode.lastSeen || '2026-08-25'}</div>
                  <div><strong>Status:</strong> Active in Case Corpus</div>
                </div>

                {selectedNode.type === 'PERSONA' && onSelectActor && (
                  <button 
                    className="btn-primary" 
                    onClick={() => {
                      const actor = MOCK_PERSONAS.find(p => p.primaryHandle === selectedNode.label) || MOCK_PERSONAS[0];
                      onSelectActor(actor);
                    }}
                    style={{ width: '100%', marginTop: '14px', fontSize: '11px' }}
                  >
                    Open Persona Dossier
                    <ExternalLink size={13} />
                  </button>
                )}
              </div>
            )}

            {/* Selected Edge Details */}
            {selectedEdge && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <span className={`badge ${selectedEdge.isContradiction ? 'badge-red' : 'badge-emerald'}`}>
                    {selectedEdge.isContradiction ? 'CONTRADICTION LINK' : 'EVIDENCE CORROBORATION'}
                  </span>
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a', margin: '4px 0 2px 0' }}>
                  {selectedEdge.relationType}
                </h4>
                <p style={{ fontSize: '11px', color: '#0284c7', fontWeight: 600, margin: '0 0 10px 0' }}>
                  {selectedEdge.label}
                </p>

                <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.5, backgroundColor: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', margin: '0 0 12px 0' }}>
                  {selectedEdge.evidenceSnippet}
                </p>

                <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div><strong>Associated Evidence IDs:</strong> {selectedEdge.evidenceIds.join(', ')}</div>
                  <div><strong>Source Reliability:</strong> {selectedEdge.sourceReliability}</div>
                  {selectedEdge.transferVolume && <div><strong>Volume:</strong> {selectedEdge.transferVolume}</div>}
                </div>

                <button 
                  className="btn-accent" 
                  onClick={onOpenWhy}
                  style={{ width: '100%', marginTop: '14px', fontSize: '11px' }}
                >
                  <HelpCircle size={13} />
                  <span>Explain Relationship in WHY Panel</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
