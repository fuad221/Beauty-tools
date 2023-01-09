import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx'
import mc from './Button.module.css'

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {
  buttonIcon?: string;
}

const Button = ({ className, buttonIcon, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx([mc.buttonCss, className])}
      {...rest}
    >
      {buttonIcon}
      {children}
    </button>
  )
}
export default Button