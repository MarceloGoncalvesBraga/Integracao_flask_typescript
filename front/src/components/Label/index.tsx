/* eslint-disable no-unused-vars */
import React, { LabelHTMLAttributes } from 'react';
import * as S from './styles';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    htmlFor: string;
    children: React.ReactNode;
    required?: boolean;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, required }: LabelProps) => (
  <S.Label htmlFor={htmlFor} required={required}>
    {children}
  </S.Label>
);

export default Label;
