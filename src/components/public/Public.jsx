import React from 'react';
import './Public.css'; 

function Public() {
  return (
    <section className="publico">
      <div className="container">
        <h2>Para quem é esse Workshop?</h2>
        <p>Este workshop é ideal para diferentes perfis de pessoas que desejam criar sua presença digital ou ingressar no mercado de Tecnologia.</p>
    
        <div className="cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995549.png" alt="Ícone Empreendedores" />
            <h3>Empreendedores</h3>
            <p>Aprenda a criar um site profissional para divulgar sua empresa ou marca.</p>
          </div>
    
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3076/3076777.png" alt="Ícone Autônomos" />
            <h3>Autônomos</h3>
            <p>Tenha uma plataforma online para oferecer seus serviços e atrair mais clientes.</p>
          </div>
    
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/1982/1982602.png" alt="Ícone Iniciantes" />
            <h3>Iniciantes em Tecnologia</h3>
            <p>Dê os primeiros passos no desenvolvimento web e ingresse de vez no mercado mais valorizado no mundo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Public;
