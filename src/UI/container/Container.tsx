import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import mc from './Container.module.css';

type NativeDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

interface ContainerProps extends NativeDivProps {}

const Container = ({ className, ...rest}: ContainerProps) => {
  return (
    <div className={clsx(mc.container)} {...rest}/>
  )
}

export default Container