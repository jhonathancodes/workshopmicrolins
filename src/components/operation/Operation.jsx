import React from 'react';
import './Operation.css'; // Certifique-se de ter um arquivo CSS com esse nome ou ajuste o caminho

function Operation() {
  return (
    <section className="funcionamento">
      <div className="overlay">
        <h2>Como vai funcionar?</h2>
        <p>O workshop terá duração de 2 horas e será realizado no dia <strong>12/04/2025 às 09:00</strong>. Ao final, os participantes receberão um certificado.</p>
        <p><strong>Menores de idade devem estar acompanhados por um responsável para retirar o certificado.</strong></p>
        <div className="cards">
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="Ícone de Relógio" />
            <h3>Duração</h3>
            <p>O workshop terá 2 horas de aprendizado intenso e prático.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992700.png" alt="Ícone de Calendário" />
            <h3>Data e Horário</h3>
            <p>Dia 12 de abril de 2025 às 09:00 da manhã.</p>
          </div>
          <div className="card">
            <img src="https://cdn-icons-png.flaticon.com/512/3063/3063821.png" alt="Ícone de Certificado" />
            <h3>Certificado</h3>
            <p>Entrega de certificado ao final do evento. Menores devem estar acompanhados.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Operation;
