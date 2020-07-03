import {createPostSystemNotification, createSystemNotificationPosted, createSystemNotificationExpired} from './systemNotificationActions'
import {createFetchSurveyStats, createSurveyStatSLoaded, SurveyStatsActionTypes} from './surveyStatsActions'
const SystemNotificationActionCreator = {createPostSystemNotification, createSystemNotificationPosted, createSystemNotificationExpired};
const SurveyStatsActionCreator = {createFetchSurveyStats, createSurveyStatSLoaded};

export { 
    SystemNotificationActionCreator,
    SurveyStatsActionCreator,
    SurveyStatsActionTypes
}
