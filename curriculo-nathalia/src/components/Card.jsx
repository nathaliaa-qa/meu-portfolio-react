// src/components/Card.jsx
import React from 'react';

export default function Card({ titulo, empresa, periodo, descricao }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '15px 0',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{titulo}</h3>
      <h4 style={{ margin: '5px 0', color: '#0070f3' }}>{empresa}</h4>
      <small>⏱ {periodo}</small>
      <p>{descricao}</p>
    </div>
  );
}