import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface IConfirmModalProps {
    Show: boolean;
    OnConfirm: () => void;
    OnClose: () => void;
    HeadingMessage: string;
    BodyMessage: string;
    CloseLabel: string;
    ConfirmLabel: string;

}
export default function ConfirmModal({ Show, OnConfirm, OnClose, HeadingMessage, BodyMessage, CloseLabel, ConfirmLabel }: IConfirmModalProps) {
    return (
        <Modal
            size="lg"
            keyboard={false}
            show={Show}
            onHide={OnClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    {HeadingMessage}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {BodyMessage}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={OnClose}>
                    {CloseLabel}
                </Button>
                <Button variant="primary" onClick={OnConfirm}>
                    {ConfirmLabel}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
