import { delay, put, takeLatest } from 'redux-saga/effects';

const collaborator_mock = [
    {
        nie: 1,
        name: "Joaquin Maria Lopez",
        email: "JML@domain.es",
        department: "one of many"
    },
    {
        nie: 2,
        name: "Silvia Arousa Martín",
        email: "SAM@domain.es",
        department: "best of all"
    }
];

const surveys_mock =  [
    {id:1, name: "Survey IT 2020"},
    {id:2, name: "Compliance MQC 2020"},
    {id:3, name: "Any other"}
]

function* fetch_collaborators(action: any) {
    try{
        yield delay(500);
        yield put({ type: "COLLABORATORS_FETCH_SUCCEEDED", payload: collaborator_mock });
        // const surveys = yield fetch("/api/surveys-summary");
        // yield put({type: "SURVEY_SUMMARY_FETCH_SUCCEEDED"})
    } catch(e){
        yield put({ type: "COLLABORATORS_FETCH_FAILED" })
    }
}

function* fetch_collaborator_summary(action: any){
    try{
        yield delay(500);
        const collaborator = collaborator_mock.find(c=> c.nie === action.payload.nie)
        const mock = {
            ...collaborator,
            surveys: surveys_mock
        };
        yield put({ type: "COLLABORATOR_SUMMARY_FETCH_SUCCEEDED", payload: mock });
        // const surveys = yield fetch("/api/surveys-summary");
        // yield put({type: "SURVEY_SUMMARY_FETCH_SUCCEEDED"})
    } catch(e){
        yield put({ type: "COLLABORATOR_SUMMARY_FETCH_FAILED" })
    }
}


function* collaboratorsSaga(){
    yield takeLatest("COLLABORATORS_FETCH_REQUESTED", fetch_collaborators)
    yield takeLatest("COLLABORATOR_SUMMARY_FETCH_REQUESTED", fetch_collaborator_summary)
}

export default collaboratorsSaga;