import React, {useState} from 'react';
import * as S from './styles'


function InputCertificado(){
    const [cpf,setCpf] = useState();
    const [loading,setLoading] = useState(false);
    
    function onChangeCpf(e){
      setCpf(e.target.value);
    }
    function handleClick(){
      setLoading(l => !l);
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
          onClick={handleClick}
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