import React, {useState} from 'react';
import { request } from '../../../Domains/Certificados';
import * as S from './styles'


function InputCertificado(){
    const [cpf,setCpf] = useState();
    const [loading,setLoading] = useState(false);
    
    function onChangeCpf(e){
      setCpf(e.target.value);
    }
    async function handleSubmit(){
      setLoading(true);
      console.log(cpf);

      try {
        await request();
        
      } catch (ex) {
        console.log('AQUI', ex);
      }

      setLoading(false);
    }
    
    return (
      <S.Wrapper className='InputCertificados'>    
         <S.Input 
         disabled={loading}
         mask="999.999.999-99"
          value={cpf}
          onChange={onChangeCpf}
          placeholder="Digite o seu CPF"
        />
        <S.Buton
          // disabled={loading}
          type="submit"
          onClick={handleSubmit}
        >
            <S.Spinner>
              {loading && (
                <S.SpinnerImg src="/img/spinner.svg" alt="loading..."/>
              )}
            </S.Spinner>

          BUSCAR
        </S.Buton>
      </S.Wrapper>
    );
}

export default InputCertificado;