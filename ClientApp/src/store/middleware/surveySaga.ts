import { delay, put, takeLatest } from 'redux-saga/effects';

const survey_summary_mock = [
    {
        id: 1,
        name: "Compliant survey"
    },
    {
        id: 2,
        name: "IT survey 2000"
    }
];

function* fetch_survey_summary(action: any) {
    try{
        yield delay(500);
        yield put({ type: "SURVEY_SUMMARY_FETCH_SUCCEEDED", payload: survey_summary_mock });
        // const surveys = yield fetch("/api/surveys-summary");
        // yield put({type: "SURVEY_SUMMARY_FETCH_SUCCEEDED"})
    } catch(e){
        yield put({ type: "SURVEY_SUMMARY_FETCH_FAILED" })
    }
}


function* surveysSaga(){
    yield takeLatest("SURVEY_SUMMARY_FETCH_REQUESTED", fetch_survey_summary)
}

export default surveysSaga;