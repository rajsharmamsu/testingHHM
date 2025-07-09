import React, { ButtonHTMLAttributes, FC } from 'react';
import './button.scss'; 
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  position?: 'left' | 'right' | 'center';
}

const Button: FC<ButtonProps> = ({ children, className = '',position= 'left', ...props }) => {
  
  const positionClass = 
    position === 'left' ? 'justify-start' : 
    position === 'right' ? 'justify-end' : 
    'justify-center';
  return (
    <>
    
      <div className="buttons">
        <Link href="#npf-form-conatiner" className={`flex items-center ${positionClass}`}>
        <button
          className={`blob-btn ${className}`}
          {...props}
        >
          {children}
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        </Link> 
        <svg className='btn-wave' xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 21 -7"
                result="goo"
              />
              <feBlend in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </div>
      
    </>
  );
};

export default Button;
