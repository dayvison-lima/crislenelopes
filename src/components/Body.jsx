/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/body.css';
import WhatsappButton from './WhatsappButton';

function Body() {
  return (
    <>
      <div className="body">
        <div className="image-and-description">
          <div className="description">
            <h1>
              Um pouco sobre o atendimento psicológico
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
              It has survived not only five centuries,
              but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>

          </div>
          <img src={ require('../images/profile-photo.png') } className="profile-photo" />
        </div>
        <div className="blockbox">
          <a href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
            <div className="overlay2">
              <h3>
                Sou Crislene Lopes.
                <br />
                Como posso ajudar?
              </h3>

            </div>
          </a>
        </div>
        <div className="servicos-mobile">
          <h1>
            Serviços que ofereço
          </h1>
          <p>

            Proin convallis faucibus velit. Curabitur pharetra lobortis faucibus. Vivamus scelerisque mattis feugiat. Pellentesque non turpis at nulla semper elementum. Nulla felis risus, aliquam in lacinia ut, porta ac mauris. Proin sed mollis metus, tincidunt rhoncus metus. Nam rutrum, tortor venenatis gravida auctor, metus ligula sodales urna, quis rutrum ipsum orci eu sapien. Curabitur placerat eget velit sit amet rutrum. Duis gravida efficitur arcu sit amet congue.
          </p>
        </div>
      </div>
      <div className="blockbox2">

        <div className="overlay3">
          <h3>
            Terapia Particular
            <br />
            (videoconferência)
          </h3>

        </div>

      </div>
      <div className="services">
        <h1>
          Serviços que ofereço
        </h1>
        <p>

          Proin convallis faucibus velit. Curabitur pharetra lobortis faucibus. Vivamus scelerisque mattis feugiat. Pellentesque non turpis at nulla semper elementum. Nulla felis risus, aliquam in lacinia ut, porta ac mauris. Proin sed mollis metus, tincidunt rhoncus metus. Nam rutrum, tortor venenatis gravida auctor, metus ligula sodales urna, quis rutrum ipsum orci eu sapien. Curabitur placerat eget velit sit amet rutrum. Duis gravida efficitur arcu sit amet congue.
        </p>
        <div className="div-image-woman">
          <img className="image-woman" src={ require('../images/backgroundservicos2.jpg') } />
          <div className="overlay">
            <h3>
              Terapia particular (videoconferência)
            </h3>

          </div>
          <div className="list-blocks">
            <p className="list-header">
              Beneficios do atendimento virtual:
            </p>
            <ol>
              <li>Sem barreiras geográficas</li>
              <li>No conforto de casa, sem deslocamentos</li>
              <li>Agendamento adaptável e conveniente</li>
              <li>Ambiente seguro para compartilhar preocupações confidenciais</li>
              <li>Menores despesas com transporte e taxas de consultório</li>
              <li>Segurança em relação ao COVID</li>
              <li>Mesma atenção e qualidade do atendimento presencial</li>
            </ol>

            <WhatsappButton />
          </div>
        </div>

        <div className="footer-whats">
          <a href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
            <img src={ require('../images/Web/icons8-whatsapp-office-l-120.png') } />
          </a>
          <a className="agendar" href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
            <h2>
              Agendar
              <br />
              Consulta
            </h2>

          </a>

        </div>
        <div className="footer">
          <a className="whats-footer" href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
            +55 84 98706-0515 (WhatsApp)
          </a>
          <p>
            Atendimento Remoto em Todo o Brasil
          </p>
          <p>
            ©2023 por Crislene Lopes
          </p>
        </div>
      </div>

    </>
  );
}

export default Body;
