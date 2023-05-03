/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { InputHTMLAttributes, ChangeEvent, } from 'react';
//import formatCP from '../../utils/formatCPF';
//import phoneMaskHelper from '../../utils/phoneMaskHelper';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string;
  name: string;
  type: string;
  onKeyPress?: (event: any) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange, type, placeholder, onKeyPress, name, required,
}: InputProps) => {

  return (

    <S.Input
      id={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />

  );
};
export default Input;
