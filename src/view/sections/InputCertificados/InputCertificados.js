import React, {useState} from 'react';
import FileList from '../../../components/FileList';
import { request } from '../../../Domains/Certificados';
import * as S from './styles'


function InputCertificado(){
    const [cpf,setCpf] = useState();
    const [loading,setLoading] = useState(false);
    const [isSearchAllowed, setIsSearchAllowed] = useState(false);
    const [files,setFiles] = useState([])

    function handleAllowSearch(value){
      console.log({value});
      const numbers = value.match(/\d+/g)
      const numberOfDigits = numbers?.join("").length
      setIsSearchAllowed(numberOfDigits === 11)
    }
    
    function onChangeCpf(e){
      setCpf(e.target.value);
      handleAllowSearch(e.target.value)
    }
    async function handleSubmit(){
      setLoading(true);
      try {
        const files = await request();
        // console.log({files});
        const filesToList = files.map(f => ({
          name: f.name,
          link: f.webViewLink,
          downloadLink: f.webContentLink,
          thumb: f.thumbnailLink
        }))
        setFiles(filesToList)
        
      } catch (ex) {
        console.log({ex});
      }

      setLoading(false);
    }
    
    return (
      <>
      <S.Wrapper className='InputCertificados'>    
         <S.Input 
         disabled={loading}
         mask="999.999.999-99"
          value={cpf}
          onChange={onChangeCpf}
          placeholder="Digite o seu CPF"
        />
        <S.Buton
          disabled={!isSearchAllowed || loading}
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
      <FileList files={files}/>
      </>
    );
}

export default InputCertificado;