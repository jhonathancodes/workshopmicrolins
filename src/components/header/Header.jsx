import './Header.css';
import microlins from '../../assets/microlins.png';
import fundo from '../../assets/fundo.jpg';

function Header() {
  return (
    <section className="hero">
      <div className="overlay">
        <img src={microlins} alt="Logo da Empresa" className="logo" />
        <h1>Deseja aprender a criar um site como este?</h1>
        <p>Aprenda no nosso Workshop e saia com seu próprio site no ar!</p>
        <a href="#formInscricao" className="btn">Garanta sua vaga!</a>
      </div>
    </section>
  );
}

export default Header;
