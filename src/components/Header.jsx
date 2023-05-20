/* eslint-disable global-require */
import React from 'react';
import '../styles/header.css';
import WhatsappButton from './WhatsappButton';

function Header() {
  return (
    <div className="header">
      <div className="header-contacts">
        <span>
          <a className="email-header" href="mailto:psicologacrislene@gmail.com">
            psicologacrislene@gmail.com
          </a>
        </span>
        <span>
          <a className="whats-header" href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
            +55 84 98706-0515 (WhatsApp)
          </a>
        </span>

      </div>
      <hr className="break-line" />
      <div className="header-header">
        <a href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
          <img
            className="header-logo"
            alt="header-logo"
            src={ require('../images/headerLogo4.png') }
          />

        </a>
        {/* <p className="header-title">Psicóloga Crislene Lopes</p> */}

      </div>
      <div className="whats-btn">
        <WhatsappButton />
      </div>
    </div>
  );
}

export default Header;
