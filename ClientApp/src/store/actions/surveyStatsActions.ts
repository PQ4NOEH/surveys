import GenericAction from './GenericAction';
import {ISurveyStats} from '../../Types/appTypes'


function createFetchSurveyStats(payload:number): GenericAction<number>{
    return {
        type:"FETCH_SURVEY_STATS",
        payload: payload
    }
}
function createSurveyStatSLoaded(payload:ISurveyStats): GenericAction<ISurveyStats>{
    return {
        type:"SURVEY_STATS_LOADED",
        payload: payload
    }
}

enum SurveyStatsActionTypes{
    fetch= "FETCH_SURVEY_STATS",
    loaded= "SURVEY_STATS_LOADED"
}

export {createFetchSurveyStats, createSurveyStatSLoaded, SurveyStatsActionTypes }