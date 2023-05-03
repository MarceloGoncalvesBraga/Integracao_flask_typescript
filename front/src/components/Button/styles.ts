/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

interface ButtonProps {
    width: number | undefined;
    height: number | undefined;
    variant?: 'default' | 'primary' | 'outline' | 'outline-icon' | 'transparent' | 'secondary';
    disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    float:right;
    cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'not-allowed')}; 
    box-sizing: border-box;
    background-color: ${({ variant }) => (variant !== 'transparent' ? '#fff' : 'transparent')};
    border-radius: ${({ variant }) => (variant !== 'outline-icon' ? '5px' : '0px')};
    outline: none;
    padding: ${({ variant }) => (variant !== 'outline-icon' ? '0 1px' : '0')};
    width: ${({ width }) => (width === undefined ? '175px' : `${width}px`)};
    height: ${({ height }) => (height === undefined ? '32px' : `${height}px`)};
    font-family: 'Montserrat', sans-serif;
    margin: 3px 0;

    ${({ variant }) => (variant === 'default' || variant === 'primary') && `
        border: 1px solid #8449FF;
        color: #8449FF;
        font-weight: 600;
    `}

    ${({ variant }) => variant === 'secondary' && `
        border: 1px solid #666;
        color: #999999;
        font-weight: 600;
    `}

    ${({ variant }) => variant === 'outline-icon' && `
        border: 0px;
        color: #c2c2c2;
    `}

    ${({ variant }) => variant === 'transparent' && `
        border: 1px solid #fff;
        color: #fff;
    `}

    ${({ variant }) => variant === 'outline' && `
        border: 1px solid #8449FF;
        color: #8449FF;
        font-weight: 600;
    `}

    &svg{
        background-color: #c2c2c2;
        color: #c2c2c2;
        width: ${({ width }) => `${width}px`};
        height: ${({ height }) => `${height}px`};
    }

    &.outlined {
        background: #FFF;
        border: 1px solid #8449FF;
        color: #8449FF;
    }

    &:not(:disabled):hover {
        ${({ variant }) => variant === 'default' && `
           background: #8449FF;
           border: 1px solid #FFF;
           color: #FFF;
        `}
        ${({ variant }) => variant === 'primary' && `
           background: #8449FF;
           border: 1px solid #8449FF;
           color: #fff;
           font-weight: 700;
           transition-delay: 0.1s;
        `}
        ${({ variant }) => variant === 'outline-icon' && `
            background: #FFF;
            color: #8449FF;
        `}
        ${({ variant }) => variant === 'outline' && `
           background: #8449FF;
           border: 1px solid #8449FF;
           color: #fff;
           transition-delay: 0.1s;
        `}
        ${({ variant }) => variant === 'secondary' && `
           background: #999999;
           border: 1px solid #FFF;
           color: #FFF;
        `}
    }
`;
