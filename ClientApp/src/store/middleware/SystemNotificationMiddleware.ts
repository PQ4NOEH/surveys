import {takeEvery, put, delay} from 'redux-saga/effects';
import {PostSystemNotification, SystemNotificationPosted, SystemNotificationExpired} from '../actions'


function* post_message(action: PostSystemNotification){
    yield put(new SystemNotificationPosted(action.payload));
    yield delay(3000);
    yield put(new SystemNotificationExpired(action.payload));
}


export default function* systemNotificationMiddleware(){
    yield takeEvery("POST_SYSTEM_NOTIFICATION", post_message)
}