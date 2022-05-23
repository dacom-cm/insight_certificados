import React, {useState} from 'react';
import './InputCertificados.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  //handle form values
  const [ formValues, setFormValues ] = useState({});
  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //botão submit
  const handleSubmit = (e) => {
    e.preventDefault();//impedir o default
    console.log('enviar cpf', formValues);
  }

  //formatar o cpf
  const formatCpf = (cpf) => {
      return cpf;
  }


    return (
        <div className='InputCertificados'>
            
            {/* formulario do cpf */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="cpf" onChange={handleInputChange} value={formatCpf(formValues.cpf) || ''} placeholder="Digite o seu CPF" maxLength="11" required/>
                <button type="submit">BUSCAR</button>
            </form>
        </div>
    );
}