import React, {useState} from 'react';
import InputCPF from '../../../components/InputCPF';
import './InputCertificados.css';


function InputCertificado(){
    const [cpf,setCpf] = useState();
    function onChangeCpf(e){
      setCpf(e.target.value);
    }

    return (
      <InputCPF 
        value={cpf}
        onChange={onChangeCpf}
      />
    );
}

export default InputCertificado;