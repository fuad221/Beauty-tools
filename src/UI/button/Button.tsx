import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx'
import BtnCSS from './BtnCSS.module.css'

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {
  buttonIcon?: string;
}

const Button = ({ className, buttonIcon, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx([BtnCSS.button, className])}
      {...rest}
    // children={[buttonIcon, children]}
    >
      {buttonIcon}
      {children}
    </button>
  )
}
export default Button