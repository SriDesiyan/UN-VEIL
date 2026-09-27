import React from 'react';
import { ShieldCheck, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'warning' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  onClose
}) => {
  const getIcon = () => {
    switch (type) {
      case 'warning': return <AlertCircle size={16} color="#d97706" />;
      case 'info': return <Info size={16} color="#0284c7" />;
      default: return <ShieldCheck size={16} color="#10b981" />;
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case 'warning': return '#fde68a';
      case 'info': return '#a5f3fc';
      default: return '#a7f3d0';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 110,
      backgroundColor: '#0a192f',
      border: `1px solid ${getBorderColor()}`,
      borderRadius: '8px',
      padding: '10px 14px',
      color: '#f8fafc',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '12px',
      maxWidth: '420px',
      animation: 'slideInRight 0.2s ease-out'
    }}>
      {getIcon()}
      <span style={{ flex: 1, fontFamily: 'var(--font-sans)', lineHeight: 1.4 }}>
        {message}
      </span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#94a3b8',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};
