import React, {useState, useEffect} from 'react';
import FileList from '../../../components/FileList';
import { request } from '../../../Domains/Certificados';
import * as S from './styles'

//Recaptcha/api.js adicionado ao index.html

//necessario para esconder o badge do recaptcha
import './InputCertificados.css'; 

function InputCertificado(){
    const [cpf,setCpf] = useState('');
    const [loading,setLoading] = useState(false);
    const [isSearchAllowed, setIsSearchAllowed] = useState(false);
    const [files,setFiles] = useState();
    const [captcha,setCaptcha] = useState(false);

    function handleAllowSearch(value){
      // console.log({value});
      const numbers = value.match(/\d+/g)
      const numberOfDigits = numbers?.join("").length
      setIsSearchAllowed(numberOfDigits === 11)
    }
    
    function onChangeCpf(e){
      setCpf(e.target.value);
      handleAllowSearch(e.target.value)
    }

    async function handleSubmit(token){
      setLoading(true);
      try {
        const files = await request(cpf, token);

        const filesToList = files.map(f => ({
          name: f.name,
          link: f.webViewLink,
          downloadLink: f.webContentLink,
          thumb: f.thumbnailLink
        }));

        setFiles(filesToList)       
      } catch (ex) {
        console.log({ex});
      }
      setLoading(false);
    }

    //antibug pro recaptcha
    useEffect(() => {
      //jogando a funçao handlesubmit pro escopo global
      window.verifyCaptcha = handleSubmit;

      //mostrando alerta caso o recaptcha nao carregue
      window.onloadCaptcha = () => {
        setCaptcha(true);
      }
    });

    // window.loadCaptcha = () => {
    //   console.log('xd');
    // }

    
    return (
      <>

      <p className='info'>
        <b>Fez um curso com a gente?</b><br/>
        Basta escrever seu CPF no campo acima, clicar em 'Buscar' e você terá acesso aos certificados de tudo que você cursou com a gente!<br/>
        <b>Não encontrou seu certificado?</b><br/>
        Entre em contato conosco pelas redes sociais acima!<br/>
      </p>

      <S.Wrapper id='InputCertificados'>
        <S.Input 
          disabled={loading}
          mask="999.999.999-99"
          value={cpf}
          onChange={onChangeCpf}
          placeholder="Digite o seu CPF"
        />
        <div id="recaptcha">
          <S.Button
            disabled={!isSearchAllowed || loading}
            type="submit"
            // onClick={handleSubmit}          
            className="g-recaptcha" 
            data-sitekey="6LfSPWQgAAAAANIarHbciaVMYvc_I6_jo_cxkTAv" 
            data-callback='verifyCaptcha'
            data-action='submit'
          >
            BUSCAR
          </S.Button>
        </div>
      </S.Wrapper>
      
      {captcha ?
        <p className='info'  style={{textAlign: 'center'}}>
        Este site é protegido pelo reCAPTCHA e a
        <a href="https://policies.google.com/privacy"> Política de Privacidade </a>e os
        <a href="https://policies.google.com/terms"> Termos de Serviço </a>do Google se aplicam.
          {/* This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy"> Privacy Policy </a>and
          <a href="https://policies.google.com/terms"> Terms of Service </a>apply. */}
        </p>
      :
        <p className='info'  style={{textAlign: 'center'}}>
          ⚠️ Houve um erro ao tentar carregar o Google reCAPTCHA.<br/>
          Atualize a página ou tente novamente mais tarde.
        </p>
      }
      
      {loading && (
        <S.Spinner>
          <S.SpinnerImg src="/img/spinner.svg" alt="loading..."/>
        </S.Spinner>
      )}

      {files &&
        <FileList files={files}/>
      }
      
      </>
    );
}

export default InputCertificado;