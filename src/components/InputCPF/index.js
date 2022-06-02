import InputMask from 'react-input-mask';

function InputCPF(props){

  return <InputMask mask="999.999.999-99" value={props.value} onChange={props.onChange}></InputMask>
}

export default InputCPF;