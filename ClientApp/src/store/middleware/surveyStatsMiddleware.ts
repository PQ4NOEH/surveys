import GenericAction from '../actions/GenericAction';
import {put, delay, takeEvery} from 'redux-saga/effects'
import {SurveyStatsActionCreator, SurveyStatsActionTypes} from '../actions';
import {ISurveyStats} from '../../Types/appTypes'

const mock:ISurveyStats= {
    id: 22,
    name: "Prueba de  stats",
    fulfilledSurveys:[]
}

function* fetch(action:GenericAction<number>){
    yield delay(200);
    yield put(SurveyStatsActionCreator.createSurveyStatSLoaded(mock))
}

export default function* middleware(){
    yield takeEvery(SurveyStatsActionTypes.fetch, fetch);
}