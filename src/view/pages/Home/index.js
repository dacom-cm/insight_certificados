import React from 'react';
import './style.css';

//sections
import InputCertificados from '../../sections/InputCertificados/InputCertificados';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className='certificados'>
      
      <div className='home'>
        <div className='conteudo'>
          <img className='img-logo' src='/img/insight-logo.png'/>
          <div className='socialmedia'>
            <a href='#' target='_blank'><p id="whatsapp">w</p></a>
            <a href='#' target='_blank'><p id="instagram">i</p></a>
            <a href='#' target='_blank'><p id="email" style={{marginTop: '-.1rem'}}>c</p></a>
            <a href='#' target='_blank'><p id="facebook">g</p></a>
            <a href='#' target='_blank'><p id="linkedin">l</p></a>
          </div>
          <h1>Certificados:</h1>
          <InputCertificados/>
        </div>
      </div>
      
      <p class='attributions'>Desenvolvido com ❤️ por <a href='https://www.haken.com.br' target='_blank'>Haken UTFPR</a></p>
    </div>
  );
}
