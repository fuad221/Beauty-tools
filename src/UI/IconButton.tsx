import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx'
import mc from './IconButton.module.css'

type NativeButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends NativeButtonProps {
  buttonIcon?: string;
  
}

const IconButton = ({ className, buttonIcon, children, ...rest }: ButtonProps) => {
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
export default IconButton