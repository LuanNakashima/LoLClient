import React from 'react';
import '../CSS/Header.css';

function Header() {
  return (
    <header>
      <div className="div1">
        <img
          className="ritoIcon"
          src="https://theclutch.com.br/wp-content/uploads/2022/02/riot-logo-new.png"
        />
        <h3>O Jogo</h3>
        <h3>Campeões</h3>
        <h3>Notícias</h3>
        <h3>Notas das Atualizações</h3>
        <h3>Comunidade</h3>
        <h3>Esports</h3>
        <h3>Universo</h3>
        <h3>Criador de avatar</h3>
        <h3>Mais</h3>
        <button>Iniciar Sessão</button>
        <button>Jogue Agora</button>
      </div>
    </header>
  );
}

export default Header;
