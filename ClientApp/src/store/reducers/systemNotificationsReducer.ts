import {SystemNotification, IStoreAction} from '../../Types/appTypes';

const defaultState : Array<SystemNotification> = []
interface ISystemNotificationAction extends IStoreAction<SystemNotification>{}
export default function reducer(state=defaultState, action:ISystemNotificationAction){
    switch(action.type){
        case "SYSTEM_NOTIFICATION_POSTED": return state.concat(action.payload);
        case "SYSTEM_NOTIFICATION_EXPIRED": return state.filter(i=> i.id !== action.payload.id);
        default: return state;
    }
} 