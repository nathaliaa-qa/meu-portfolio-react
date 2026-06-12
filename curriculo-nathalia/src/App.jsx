import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const experiencias = [
    {
      id: 1,
      titulo: "Residência em Desenvolvimento Full Stack",
      empresa: "Serratec (Em andamento)",
      periodo: "Atual",
      descricao: "Desenvolvimento prático de aplicações Web, trabalhando com tecnologias Front-end e Back-end em ambientes colaborativos e metodologias ágeis."
    },
    {
      id: 2,
      titulo: "Especialização em Análise de Dados",
      empresa: "Alura (Em andamento)",
      periodo: "Atual",
      descricao: "Estudo direcionado para a análise, exploração e tratamento de dados, focado na resolução de problemas complexos e geração de insights."
    },
    {
      id: 3,
      titulo: "Estagiária no Setor de Imagem (Raio-X)",
      empresa: "Hospital Municipal Dr. Moacyr Rodrigues do Carmo",
      periodo: "Ago de 2022 - Dez de 2022",
      descricao: "Atuação prática na área de saúde que desenvolveu fortemente a minha capacidade de organização, trabalho em equipe, senso de responsabilidade e atenção rigorosa aos detalhes em um ambiente dinâmico."
    },
    {
      id: 4,
      titulo: "Curso Superior de Tecnologia (CST), Radiologia",
      empresa: "Universidade Unigranrio | Afya",
      periodo: "2020 – 2022",
      descricao: "Formação superior que solidificou competências essenciais como comunicação escrita, anatomia humana, precisão técnica e forte base científica."
    }
  ];

  const categoriasSkills = [
    {
      titulo: "🔮 Core Técnico & Onde minha Paixão mora (Dados & Pesquisa)",
      skills: [
        { nome: "POSTGRESQL", cor: "#0f766e" },
        { nome: "SQL", cor: "#0f766e" },
        { nome: "POWER BI", cor: "#0f766e" },
        { nome: "EXCEL", cor: "#0f766e" },
        { nome: "PYTHON", cor: "#0f766e" }
      ]
    },
    {
      titulo: "🛡️ Habilidades de Desenvolvimento que estou Construindo",
      skills: [
        { nome: "HTML", cor: "#0f766e" },
        { nome: "CSS", cor: "#0f766e" },
        { nome: "JAVASCRIPT", cor: "#0f766e" },
        { nome: "JAVA", cor: "#0f766e" },
        { nome: "SPRING BOOT", cor: "#0f766e" }
      ]
    },
    {
      titulo: "⚙️ Controle de Versão & Ferramentas Essenciais",
      skills: [
        { nome: "GIT", cor: "#0f766e" },
        { nome: "GITHUB", cor: "#0f766e" }
      ]
    }
  ];

  return (
    <div style={{ 
      backgroundColor: darkMode ? '#121212' : '#f8f9fa', 
      color: darkMode ? '#f8f9fa' : '#333333',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      transition: 'all 0.3s ease'
    }}>
      
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        
        <section style={{ marginBottom: '50px', textAlign: 'justify', lineHeight: '1.6' }}>
          <h2 style={{ color: darkMode ? '#2dd4bf' : '#0f766e', borderBottom: `2px solid ${darkMode ? '#333' : '#e2e8f0'}`, paddingBottom: '10px' }}>Sobre Mim</h2>
          <p>
            Sou uma profissional em transição de carreira, migrando da área da Radiologia para a Tecnologia da Informação. Um caminho impulsionado pela minha curiosidade natural e pelo desejo constante de entender como as coisas funcionam. Sempre gostei de aprender, pesquisar e resolver problemas, o que tornou a minha entrada no universo tecnológico um passo natural.
          </p>
          <p>
            A minha bagagem na saúde me trouxe competências valiosas, como um olhar atento, alto senso de responsabilidade e rigor com detalhes. Procuro oportunidades para crescer e me desenvolver no setor de tecnologia, integrando ambientes colaborativos onde eu possa trocar ideias e construir soluções que gerem real impacto.
          </p>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ color: darkMode ? '#2dd4bf' : '#0f766e', borderBottom: `2px solid ${darkMode ? '#333' : '#e2e8f0'}`, paddingBottom: '10px' }}>🛠️ Atributos & Inventário Técnico (Skills)</h2>
          {categoriasSkills.map((categoria, idx) => (
            <div key={idx} style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '15px', color: darkMode ? '#a0aec0' : '#4a5568', margin: '15px 0 10px 0' }}>
                {categoria.titulo}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {categoria.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    style={{
                      backgroundColor: skill.cor,
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: '50px', 
                      fontSize: '12px',
                      fontWeight: 'bold',
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      display: 'inline-block'
                    }}
                  >
                    {skill.nome}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: darkMode ? '#2dd4bf' : '#0f766e', borderBottom: `2px solid ${darkMode ? '#333' : '#e2e8f0'}`, paddingBottom: '10px' }}>Jornada Profissional & Aprendizados</h2>
          {experiencias.map((exp) => (
            <Card 
              key={exp.id}
              titulo={exp.titulo}
              empresa={exp.empresa}
              periodo={exp.periodo}
              descricao={exp.descricao}
            />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}