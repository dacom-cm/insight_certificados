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
  color:${props =>props.disabled?'#ddd':'#000'};

  width: 100%;
  padding: 0.5em;
  border-radius: 5px 0 0 5px;
`


export const Buton= styled.button`
  display: flex;
  align-items:center;
  color:#fff;

  border: none;
  border-radius: 0 5px 5px 0;
  background: #111;
  text-align: center;
  cursor: pointer;

  font-size: 1em;
  transition: 200ms;

  height:36px;

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
  width: 12px;
  margin-right:5px;
  margin-left:6px;
  animation: ${rotate} 0.8s linear infinite;
`
export const SpinnerImg = styled.img``
