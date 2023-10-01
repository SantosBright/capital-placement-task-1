import { ReactNode } from "react";
import "./styles.css";

type Props = {
  children: ReactNode;
  headerTitle: string;
  contextClassName?: string;
  className?: string;
};

const Card = ({
  children,
  headerTitle,
  contextClassName,
  className,
}: Props) => {
  return (
    <div className={`card ${className}`}>
      <h4>{headerTitle}</h4>
      <div className={`content ${contextClassName}`}>{children}</div>
    </div>
  );
};

export default Card;
