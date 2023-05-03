import styled from 'styled-components';

export const Input = styled.input`
  max-height: 32px;
  min-height: 32px;
  max-width: 600px;
  border-radius: 5px;
  padding: 0 7px;
  margin: 3px 7px;
  border: 1px solid aqua;
  &:hover,
  &:focus {
    border: 1px solid aqua; // define a cor de borda para o estado hover
  }
  width: 70vw; // define a largura em relação à largura da janela de visualização

`;