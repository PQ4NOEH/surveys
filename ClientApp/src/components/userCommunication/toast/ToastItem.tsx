import React from 'react';
import { SystemNotification, SystemNotificationType } from '../../../Types/appTypes'

interface ToastItemProps {
    message: SystemNotification,
    handleRemove: (message:SystemNotification)=> void
}
export default function ToastItem({message, handleRemove}: ToastItemProps) {
    
    let rootClassName =  "rounded p-2 text-white mt-2";
    switch(message.type){
        case SystemNotificationType.error: rootClassName += " bg-danger";
        case SystemNotificationType.warning: rootClassName += " bg-warning";
        default: rootClassName += " bg-primary"
    }
    function onRemoveClick(){
        handleRemove(message);
    }
    return (
        <div className={rootClassName}>
            <div >
                <strong>{message.messageTittle}</strong>
                <div className="float-right d-inline">
                    <i className="fas fa-times ml-2 hover-hand" onClick={onRemoveClick}></i>
                </div>
            </div>
            <div className="mt-2">
                {message.message}
            </div>
        </div>
    )
}