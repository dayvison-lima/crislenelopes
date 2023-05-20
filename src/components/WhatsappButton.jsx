import React from 'react';
import '../styles/whatsappbutton.css';

function WhatsappButton() {
  return (
    <div>
      <a className="link-whatsapp" href="https://api.whatsapp.com/send?phone=5584988060515&text=Olá,%20Crislene,%20gostaria%20de%20saber%20mais%20sobre%20as%20consultas.">
        <button className="link-btn-whatsapp myButton">
          Entrar em contato (WhatsApp)
        </button>
      </a>
    </div>
  );
}

export default WhatsappButton;
