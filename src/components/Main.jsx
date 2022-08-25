import React, { useState } from 'react';
import '../CSS/Main.css';
import roleImg from '../Images/role.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Main() {
  const [skillsVideo, setSkillsVideo] = useState('P');
  const [skillsTitle, setSkillsTitle] = useState('Condenação');
  const [skillsText, setSkillsText] = useState(
    'Thresh pode colher a alma de inimigos que morrerem perto dele, recebendo Armadura e Poder de Habilidade permanentemente.'
  );
  const [skillsRenderVideo, setSkillsRenderVideo] = useState(
    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_P1.webm'
  );

  return (
    <div className="oMain">
      <div className="firstMain"></div>
      <div className="imgFirstMain"></div>
      <div className="nameMain">
        <h2>O Guardião das Correntes</h2>
        <h1>THRESH</h1>
      </div>
      <div className="secondMain">
        <div className="sobre">
          <img src={roleImg} />

          <div className="line"></div>

          <p>
            Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele
            já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores
            do que a vida e a morte. Agora, Thresh vive atormentando e corrompendo vítimas de forma
            lenta e dolorosamente criativa. Seus alvos sofrem muito além de seus corpos mortais,
            pois Thresh aflige as próprias almas, aprisionando-as em sua lanterna maldita para
            torturá-las por toda a eternidade.
          </p>
        </div>
        <div className="skillsMain">
          <div className="skills">
            <h1>HABILIDADES</h1>
            <div className="skillsImg">
              <img
                className={skillsVideo === 'P' ? 'skillsSelected' : undefined}
                onClick={() => {
                  setSkillsVideo('P');
                  setSkillsTitle('Condenação');
                  setSkillsText(
                    'Thresh pode colher a alma de inimigos que morrerem perto dele, recebendo Armadura e Poder de Habilidade permanentemente.'
                  );
                  setSkillsRenderVideo(
                    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_P1.webm'
                  );
                }}
                src="https://ddragon.leagueoflegends.com/cdn/12.16.1/img/passive/Thresh_Passive.png"
              />
              <img
                className={skillsVideo === 'Q' ? 'skillsSelected' : undefined}
                onClick={() => {
                  setSkillsVideo('Q');
                  setSkillsTitle('Sentença');
                  setSkillsText(
                    'Thresh prende um inimigo em suas correntes e puxa em sua direção. Ativar essa habilidade uma segunda vez puxa Thresh em direção ao inimigo.'
                  );
                  setSkillsRenderVideo(
                    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_Q1.webm'
                  );
                }}
                src="https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/ThreshQ.png"
              />
              <img
                className={skillsVideo === 'W' ? 'skillsSelected' : undefined}
                onClick={() => {
                  setSkillsVideo('W');
                  setSkillsTitle('Passagem Sombria');
                  setSkillsText(
                    'Thresh arremessa uma lanterna que protege Campeões aliados próximos contra danos. Aliados podem clicar na lanterna para avançar na direção de Thresh.'
                  );
                  setSkillsRenderVideo(
                    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_W1.webm'
                  );
                }}
                src="https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/ThreshW.png"
              />
              <img
                className={skillsVideo === 'E' ? 'skillsSelected' : undefined}
                onClick={() => {
                  setSkillsVideo('E');
                  setSkillsTitle('Esfolar');
                  setSkillsText(
                    'Os ataques de Thresh são fortalecidos, causando mais dano quanto mais tempo ele esperar entre ataques. Ao ativar, Thresh arrasta sua corrente e empurra todos os inimigos atingidos na direção do golpe.'
                  );
                  setSkillsRenderVideo(
                    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_E1.webm'
                  );
                }}
                src="https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/ThreshE.png"
              />
              <img
                className={skillsVideo === 'R' ? 'skillsSelected' : undefined}
                onClick={() => {
                  setSkillsVideo('R');
                  setSkillsTitle('A Caixa');
                  setSkillsText('Uma prisão de paredes que causam dano e Lentidão se quebradas.');
                  setSkillsRenderVideo(
                    'https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0412/ability_0412_R1.webm'
                  );
                }}
                src="https://ddragon.leagueoflegends.com/cdn/12.16.1/img/spell/ThreshRPenta.png"
              />
            </div>
            <div className="skillsDescripton">
              <h6>{skillsTitle}</h6>
              <p>{skillsText}</p>
            </div>
          </div>

          <video
            src={skillsRenderVideo}
            width="700px"
            preload="metadata"
            autoPlay
            playsInline
            loop
            muted></video>
        </div>
      </div>
      <div className="thirdMain">
        <div className="skinsDiv">
          <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false}>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg" />
              <p>Thresh</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_1.jpg" />
              <p>Thresh Terror Profundo</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_2.jpg" />
              <p>Thresh Campeonato</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_3.jpg" />
              <p>Thresh Lua Sangrenta</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_4.jpg" />
              <p>Thresh SSW</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_5.jpg" />
              <p>Thresh Estrela Negra</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg" />
              <p>Thresh Velho Oeste</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_13.jpg" />
              <p>Thresh Pulsefire</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_14.jpg" />
              <p>Thresh Pulsefire de Prestígio</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_17.jpg" />
              <p>Thresh Florescer Espiritual</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_27.jpg" />
              <p>Thresh Liberto</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_28.jpg" />
              <p>Thresh Dragão de Aço</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_15.jpg" />
              <p>Thresh FPX</p>
            </div>
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_38.jpg" />
              <p>Thresh Pulsefire de Prestígio(2022)</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Main;
