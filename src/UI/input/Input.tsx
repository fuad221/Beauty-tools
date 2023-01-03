import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react'
import css from './Input.module.css';
import clsx from 'clsx';


type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends NativeInputProps {
    inputIcon?: string;
    // checked?: boolean | string;
}

const Input = ({ className, children, inputIcon, ...rest }: InputProps) => {
    return (
        <input className={clsx([css.user, className])}
            {...rest}
            
            >

            {children}
            {inputIcon}
        </input>
    )
}



export default Input