/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Box = styled.div`
    padding-bottom: 30px;
    text-align: center;
    
`;


export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
`;
export const BoxSearch = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content:center;
    margin-top:10px;
`;
export const Title = styled.h2`
    width: 90%;
    padding: 30px 0;
    font-size: 24px;
    color: #666666;
    font-weight: 600;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
`;

export const BoxContent = styled.div`
  position: fixed;
  top: 260px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin:0 15px;
  padding-right:10px;
  height: 300px; // define a altura do componente
  overflow-x: clip;
  overflow-y: auto; // define o comportamento de rolagem
   /* estiliza a barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* estiliza o polegar da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  /* estiliza a barra de rolagem quando o mouse está sobre ela */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

`;

export const BoxLoader = styled.div`
    display: flex;
    place-items: center;
    place-content: center;
    width: 315px;
    height: 55px;
`;
