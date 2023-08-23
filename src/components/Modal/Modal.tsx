import React from 'react';
import { createPortal } from 'react-dom';
import { Card } from '../Card/Card';
import style from './Modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  close?: () => void;
  className?: string;
};

export default function Modal({ children, close, className }: ModalProps) {
    return createPortal(
        <>
            <div className={style.backdrop} onClick={close}></div>
            <Card id="modal" className={`${style.modal} ${className||''}`}>
                {children}
            </Card>
        </>, document.body
    );
}
