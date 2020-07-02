import React from 'react';
import { IAppState, SystemNotification } from '../../../Types/appTypes'
import { useSelector, useDispatch } from 'react-redux';
import {SystemNotificationExpired} from '../../../store/actions'
import ToastItem from './ToastItem'
import './custom.css';


export default function ToastManager() {

    const dispatch = useDispatch();
    const systemNotifications = useSelector((state: IAppState) => state.systemNotifications)
    function removeToast(message: SystemNotification){
        dispatch(new SystemNotificationExpired(message))
    }
    return (
        <div className={systemNotifications.length===0?"d-none":"toastManager"}>
            {systemNotifications.map(m=> <ToastItem message={m} key={m.id} handleRemove={removeToast}/>)}
        </div>
    )
}
