import {takeEvery, put, delay} from 'redux-saga/effects';
import {SystemNotificationActionCreator} from '../actions'
import {SystemNotificationAction} from '../actions/systemNotificationActions'


function* post_message(action: SystemNotificationAction){
    yield put(SystemNotificationActionCreator.createSystemNotificationPosted(action.payload));
    yield delay(3000);
    yield put(SystemNotificationActionCreator.createSystemNotificationExpired(action.payload));
}


export default function* systemNotificationMiddleware(){
    yield takeEvery("POST_SYSTEM_NOTIFICATION", post_message)
}