import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  action
}) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '16px',
      marginBottom: '16px',
      flexWrap: 'wrap'
    }}>
      <div>
        {eyebrow && (
          <div style={{
            fontSize: '10px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#0284c7',
            marginBottom: '3px'
          }}>
            {eyebrow}
          </div>
        )}
        <h2 style={{
          fontSize: '18px',
          fontWeight: 800,
          color: '#0a192f',
          letterSpacing: '-0.02em',
          margin: 0,
          lineHeight: 1.2
        }}>
          {title}
        </h2>
        {subtitle && (
          <p style={{
            fontSize: '12px',
            color: '#64748b',
            margin: '4px 0 0 0',
            lineHeight: 1.4
          }}>
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {action}
        </div>
      )}
    </div>
  );
};
