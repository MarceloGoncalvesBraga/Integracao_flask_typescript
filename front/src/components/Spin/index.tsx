import React, { HTMLAttributes, CSSProperties } from 'react';
import * as S from './style';

type SpinProps = HTMLAttributes<HTMLDivElement> & {
  size?: number;
  style?: CSSProperties;
}

const Spin: React.FC<SpinProps> = ({ size, style }: SpinProps) => (
  <S.Spin size={size} style={style} />
);

export default Spin;
