/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface SpinProps {
  size?: number;
}

export const Spin = styled.div<SpinProps>`
  width: ${({ size }) => (!size ? '25px' : `${size}px`)};;    
  padding: 2px;
  background: #8449FF;
  aspect-ratio: 1;
  border-radius: 50%;
  -webkit-mask: conic-gradient(#0000,#000), linear-gradient(#000 0 0) content-box;
  mask: conic-gradient(#0000,#000), linear-gradient(#000 0 0) content-box;
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  box-sizing: border-box;
  animation: load 1s linear infinite;

  @keyframes load {
    to{transform: rotate(1turn)}
  }

}
`;
