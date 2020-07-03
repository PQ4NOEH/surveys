import GenericAction from './GenericAction';
import {SystemNotification} from '../../Types/appTypes'


export interface SystemNotificationAction extends GenericAction<SystemNotification>{
    type:"POST_SYSTEM_NOTIFICATION"| "SYSTEM_NOTIFICATION_POSTED" | "SYSTEM_NOTIFICATION_EXPIRED"
}
function createPostSystemNotification(payload:SystemNotification): SystemNotificationAction{
    return {
        type:"POST_SYSTEM_NOTIFICATION",
        payload: payload
    }
}
function createSystemNotificationPosted(payload:SystemNotification): SystemNotificationAction{
    return {
        type:"SYSTEM_NOTIFICATION_POSTED",
        payload: payload
    }
}
function createSystemNotificationExpired(payload:SystemNotification): SystemNotificationAction{
    return {
        type:"SYSTEM_NOTIFICATION_EXPIRED",
        payload: payload
    }
}

export {createPostSystemNotification, createSystemNotificationPosted, createSystemNotificationExpired }