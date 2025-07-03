// src/contexts/ModalContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(prev => !prev);

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal deve ser usado dentro de ModalProvider');
  }
  return context;
}
