import React, { useState } from 'react';
import './Question.css'; // Se quiser manter a estilização original

const questions = [
  {
    question: "Preciso ter conhecimento em programação para participar?",
    answer:
      "Não! O workshop foi pensado para iniciantes. Vamos te guiar do zero até ter seu próprio site no ar.",
  },
  {
    question: "Vou conseguir criar um site mesmo sem experiência?",
    answer:
      "Sim! O conteúdo é passo a passo e prático. Ao final do workshop, você terá um site funcional para seu negócio.",
  },
  {
    question: "O site que eu criar poderá ser usado profissionalmente?",
    answer:
      "Com certeza! O site será seu, e você poderá usá-lo para divulgar seus produtos ou serviços online.",
  },
  {
    question: "Vou aprender a personalizar o site com a identidade do meu negócio?",
    answer:
      "Sim! Durante o workshop, você aprenderá a adaptar o site com cores, textos e imagens do seu próprio negócio.",
  },
  {
    question: "O workshop é gratuito?",
    answer:
      "Sim! O evento é totalmente gratuito para alunos e não alunos Microlins.",
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="question">
      <div className="question-header">
        <span id="duvidas" className="subtitle">FAQs</span>
        <h2>Dúvidas Frequentes</h2>
      </div>
      <div className="question-container">
        {questions.map((item, index) => (
          <div className="question-item" key={index}>
            <div
              className="question-title"
              onClick={() => toggleAnswer(index)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{item.question}</h3>
              <span className="toggle-icon">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <div
              className="question-answer"
              style={{
                maxHeight: openIndex === index ? '500px' : '0px',
                opacity: openIndex === index ? '1' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Question;
