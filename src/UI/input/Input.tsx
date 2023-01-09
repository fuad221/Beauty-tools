import React, { InputHTMLAttributes, DetailedHTMLProps } from 'react'
import mc from './Input.module.css';
import clsx from 'clsx';


type NativeInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends NativeInputProps {    inputIcon?: string;    }

const Input = ({ className, children, inputIcon, ...rest }: InputProps) => {
    return (
        <div>
            {inputIcon}
            <input className={clsx([mc.user, className])}
                {...rest} />
            {children}
        </div>    )   }

export default Input




