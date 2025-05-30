import React from 'react';
import './Button.css';
import ArrowIcon from '../../../assets/arrow_icon.svg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  isIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  isIcon = false
}) => {
  return (
    <button
      className={`button ${variant} ${className}`}
      onClick={onClick}
    >
      {children}
      {isIcon && <img style={{ marginLeft: '8px' }} src={ArrowIcon} alt="icon" />}
    </button>
  );
};

export default Button; 