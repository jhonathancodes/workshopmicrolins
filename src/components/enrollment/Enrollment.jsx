import React, { useState } from 'react';
import './Enrollment.css'; // Crie esse CSS se quiser estilizar

function Enrollment() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const enviarParaWhatsApp = (e) => {
    e.preventDefault();

    const mensagem = `Olá! Quero me inscrever no Workshop de Criação de Sites.%0A%0A*Nome:* ${nome}%0A*Idade:* ${idade}`;
    const numeroWhatsApp = "5511981694671";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
  };

  return (
    <section id="formInscricao" className="inscricao">
      <div className="container">
        <h2>Inscreva-se no Workshop</h2>
        <p>Preencha os dados abaixo e envie sua inscrição via WhatsApp!</p>

        <form onSubmit={enviarParaWhatsApp}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Sua idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            required
          />
          <button type="submit" className="btn">Garanta sua vaga!</button>
        </form>
      </div>
    </section>
  );
}

export default Enrollment;
