import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import Spin from '../Spin';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  width?: number | undefined;
  height?: number | undefined;
  variant?: 'default' | 'primary' | 'outline' | 'outline-icon' | 'transparent' | 'secondary';
  style?: CSSProperties;
  disabled?: boolean;
  loading?: boolean;
  dataTst?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick, children, className, width, height, variant, style, disabled, loading, dataTst,
}: ButtonProps) => (
  <S.Button disabled={disabled} className={className} onClick={onClick} width={width} height={height} variant={variant || 'default'} style={style} data-tst={dataTst}>
    {!loading ? children : (
      <>
        <Spin size={15} style={{ marginRight: '10px' }} />
        {children}
      </>
    )}
  </S.Button>
);

export default Button;
