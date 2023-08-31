import React, { useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

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
  

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.CardsList} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
