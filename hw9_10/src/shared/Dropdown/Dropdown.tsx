import React, { FormEventHandler, useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

interface XY {
  x: number,
  y: number;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const buttonRef = React.useRef(null);
  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
    if (!isDropdownOpen) {
      onOpen();
    } else {
      onClose();
    }
  };
  
  const node = document.querySelector('#modal_root');
  if (!node) { return null }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={buttonRef}>{button}</div>
      {ReactDOM.createPortal(
        isDropdownOpen && (
          <div onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        ),
        node,buttonRef.current
      )}
    </div>
  );
}
