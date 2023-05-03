/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface RequiredProps {
    required?: boolean;
}

export const Label = styled.label<RequiredProps>`
    display: flex;
    color: #c2c2c2;;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 2px;
    line-height: 20px;

    &::before {
        ${({ required }) => !!required && `
            display: inline-block;
            margin-right: 2px;
            content: '*';
            color: #FD5526;
       `}
    }

`;
