import React, { useState } from 'react';

const BotaoContato = ({ href, icone, texto, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '8px 24px',
        cursor: 'pointer',
        backgroundColor: darkMode ? '#333333' : '#ffffff',
        color: darkMode ? '#2dd4bf' : '#0f766e',
        border: 'none',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transform: isHovered ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 10px 15px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)' 
      }}
    >
      <span>{icone}</span> {texto}
    </a>
  );
};

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header style={{ 
      padding: '50px 20px 40px 20px', 
      textAlign: 'center', 
      background: darkMode ? '#1a1a1a' : 'linear-gradient(135deg, #2dd4bf, #0f766e)', 
      color: '#ffffff', 
      position: 'relative',
      transition: 'all 0.3s ease'
    }}>
      <button 
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '6px 16px',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#ffffff' : 'rgba(0,0,0,0.2)',
          color: darkMode ? '#000000' : '#ffffff',
          border: 'none',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}
      >
        {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
      </button>

      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="https://github.com/nathaliaa-qa.png" 
          alt="Foto de Nathália Queiroz" 
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #ffffff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        />
      </div>

      <h1 style={{ fontSize: '36px', margin: '0 0 10px 0', letterSpacing: '-0.5px' }}>Nathália Queiroz</h1>
      <p style={{ 
        fontSize: '18px', 
        color: darkMode ? '#2dd4bf' : '#e6fffa', 
        margin: '0 0 30px 0',
        fontWeight: '500'
      }}>
        Desenvolvedora Full Stack em Formação
      </p>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        flexWrap: 'wrap',     
        gap: '15px'
      }}>
        <BotaoContato 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nathaliaqa.database@gmail.com"
          icone="📧"
          texto="E-mail"
          darkMode={darkMode}
        />
        <BotaoContato 
          href="https://www.linkedin.com/in/nath%C3%A1lia-queiroz-651755219"
          icone="💼"
          texto="LinkedIn"
          darkMode={darkMode}
        />
        <BotaoContato 
          href="https://github.com/nathaliaa-qa"
          icone="💻"
          texto="GitHub"
          darkMode={darkMode}
        />
      </div>
    </header>
  );
}