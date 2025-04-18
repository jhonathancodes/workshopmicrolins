import React from 'react';
import './On.css'; // Certifique-se de que o CSS esteja importado corretamente

function On() {
  return (
    <section className="sobre">
      <div className="container">
        <h2>Sobre o Workshop</h2>
        <p>Aprenda a criar um site do zero para o seu próprio negócio, utilizando as melhores práticas de design e desenvolvimento.</p>
        
        <div className="cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1043/1043451.png" alt="Ícone de código" />
            <h3>Criação de Sites</h3>
            <p>Aprenda como planejar, estruturar e desenvolver um site profissional.</p>
          </div>
          
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/609/609803.png" alt="Ícone de ferramentas" />
            <h3>Ferramentas Essenciais</h3>
            <p>Conheça as ferramentas fundamentais para desenvolvimento web.</p>
          </div>
          
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/747/747376.png" alt="Ícone de publicação" />
            <h3>Publicação Online</h3>
            <p>Aprenda a hospedar e publicar seu site na internet de forma profissional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default On;
