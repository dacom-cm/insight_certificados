import ReactInputMask from "react-input-mask";
import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
` 

export const Input = styled(ReactInputMask)`

  all: unset;
  background-color:${props =>props.disabled?'#ddd':'#fff'} ;
  color:${props =>props.disabled?'#ddd':'#333'};

  width: 100%;
  padding: 0.5em;
  border-radius: 5px 0 0 5px;
`


export const Button = styled.button`
  height: 36px;
  width: 100%;
  cursor: pointer;
  background: #111;
  border-radius: 0 5px 5px 0;
  border: none;
  
  color: #fff;
  text-align: center;
  font-size: 1em;

  transition: 200ms;

  @media (max-width: 500px) {
    font-size: 0.9em;
    
    &:hover{
      font-size: .8em;
    }
  }

  @media (max-width: 300px) {
    font-size: .75em;
    
    &:hover{
      font-size: .65em;
    }
  }

  ${({disabled})=> disabled ? css`
    color: #444;
    background: #ddd;
    cursor: not-allowed;
    &:hover{

    }
  ` : css`
      &:hover{
        background-image: linear-gradient(45deg, #ffae00, #00a3a8);
        /* font-size: 0.9em; */
        transition: 200ms;
        text-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px, rgba(0, 0, 0, 0.12) 0px 1px 2px;
        color: #111;
      }
  `}

`

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const Spinner = styled.div`
  margin: 0 auto;
  width: 12px;
  animation: ${rotate} 0.8s linear infinite;
`
export const SpinnerImg = styled.img`
  filter: invert(80%);
`
