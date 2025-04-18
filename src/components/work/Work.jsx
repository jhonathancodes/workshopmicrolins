import React from 'react';
import './Work.css'; // Certifique-se de que o CSS está importado corretamente

function Work() {
  return (
    <section className="aprendizado">
      <div className="container">
        <h2>O que você vai aprender?</h2>
        <p>Confira os principais tópicos abordados no workshop e aprenda a criar sites incríveis!</p>
    
        <div className="cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="Ícone HTML" />
            <h3>HTML5</h3>
            <p>Aprenda a estruturar páginas web com HTML5, organizando conteúdos de forma eficiente.</p>
          </div>
    
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Ícone CSS" />
            <h3>CSS3</h3>
            <p>Descubra como estilizar e tornar seu site visualmente atraente com CSS moderno.</p>
          </div>
    
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Ícone JavaScript" />
            <h3>JavaScript</h3>
            <p>Adicione interatividade ao seu site e melhore a experiência do usuário com JavaScript.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
