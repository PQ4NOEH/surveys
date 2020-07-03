import { combineReducers } from 'redux';
import surveySummaryReducer from './surveySummaryReducer';
import collaboratorsReducer from './collaboratorsReducer';
import collaboratorSummaryReducer from './collaboratorSummaryReducer';
import surveyReducer from './surveyReducer';
import systemNotificationsReducer from './systemNotificationsReducer';
import surveyStatsReducer from './surveyStatsReducer';


const rootReducer = combineReducers({
    collaborators: collaboratorsReducer,
    surveysSummary: surveySummaryReducer,
    survey:surveyReducer,
    collaboratorSummary: collaboratorSummaryReducer,
    systemNotifications: systemNotificationsReducer,
    surveyStats: surveyStatsReducer
});

export default rootReducer;