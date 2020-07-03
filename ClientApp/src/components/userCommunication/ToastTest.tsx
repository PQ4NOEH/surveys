import React from 'react';
import {useDispatch} from 'react-redux';
import {SystemNotification, SystemNotificationType} from '../../Types/appTypes';
import {SystemNotificationActionCreator} from '../../store/actions'

export default function ToastTest() {
    const dispatch = useDispatch();
    function postMessage(type: SystemNotificationType){
        const payload = new SystemNotification("Hey this is a test", "Testing...", type);
        dispatch(SystemNotificationActionCreator.createPostSystemNotification(payload));
    }
    return (
        <div>
            <input type="button" className="btn btn-primary" value="Information" onClick={()=>postMessage(SystemNotificationType.information)} />
            <input type="button" className="btn btn-warning" value="warning" onClick={()=>postMessage(SystemNotificationType.warning)} />
            <input type="button" className="btn btn-danger" value="Error" onClick={()=>postMessage(SystemNotificationType.error)} />
        </div>
    )
}
