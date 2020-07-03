import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import surveysSaga from './middleware/surveySaga'
import collaboratorsSaga from './middleware/collaboratorsSaga';
import SystemNotificationMiddleware from './middleware/SystemNotificationMiddleware';
import surveyStatsMiddleware from './middleware/surveyStatsMiddleware';
import rootReducer from './reducers/rootReducer';
//import loggerMiddleware from './middleware/logger';

export default function configureStore(){
    const sagaMiddleware = createSagaMiddleware()
    // mount it on the Store
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(surveysSaga);
    sagaMiddleware.run(collaboratorsSaga);
    sagaMiddleware.run(SystemNotificationMiddleware);
    sagaMiddleware.run(surveyStatsMiddleware);
    
    return store;
}