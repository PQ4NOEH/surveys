import GenericAction from '../actions/GenericAction';
import {SurveyStatsActionTypes} from '../actions';
import {ISurveyStats} from '../../Types/appTypes'
const defaultState: ISurveyStats = {
    id: -1,
    name: "",
    fulfilledSurveys:[]
};

export default function(state= defaultState, action:GenericAction<ISurveyStats>){
    switch(action.type){
        case SurveyStatsActionTypes.loaded: return action.payload;
        default: return state;
    }
}