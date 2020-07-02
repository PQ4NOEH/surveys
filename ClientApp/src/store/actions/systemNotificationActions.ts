import GenericAction from './GenericAction';
import {SystemNotification} from '../../Types/appTypes'

class PostSystemNotification extends GenericAction<SystemNotification>{
    constructor(payload:SystemNotification){
        super("POST_SYSTEM_NOTIFICATION",payload)
    }
}

class SystemNotificationPosted extends GenericAction<SystemNotification>{
    constructor(payload:SystemNotification){
        super("SYSTEM_NOTIFICATION_POSTED",payload)
    }
}

class SystemNotificationExpired extends GenericAction<SystemNotification>{
    constructor(payload:SystemNotification){
        super("SYSTEM_NOTIFICATION_EXPIRED",payload)
    }
}


export {PostSystemNotification, SystemNotificationPosted, SystemNotificationExpired}