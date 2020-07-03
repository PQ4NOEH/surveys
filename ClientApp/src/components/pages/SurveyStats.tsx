import React from 'react';
import {TimelineUserFulfill, SurveyQuestionStats} from '../stats';
import {useSelector, useDispatch} from 'react-redux';
import {IAppState, ISurvey, ISurveyQuestion} from '../../Types/appTypes'
import {SurveyStatsActionCreator} from '../../store/actions'
import {PrintButton, ExcelButton} from '../buttons';
import {Nav} from 'react-bootstrap';
import {useTranslation } from 'react-i18next';

function getQuestions(survey:ISurvey):Array<ISurveyQuestion>{
    return survey.sections.flatMap(s=> s.questions);
}
export default function SurveyStats({
    match:{params:{surveyId}}
}:any) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const id = parseInt(surveyId)
    dispatch(SurveyStatsActionCreator.createFetchSurveyStats(id));

    const surveyStats = useSelector((state:IAppState) => state.surveyStats);
    const survey = useSelector((state:IAppState)=> state.survey)
    return (
        <div>
             <h1>
                {`${t("Stats")} ${surveyStats.name}`}
                <div className="d-inline float-right">
                <ExcelButton handleClick={()=>{}}/> 
                <PrintButton handleClick={()=>{}}/>
                </div>
            </h1>
            <div className="mt-3">
                <h3 className="text-center">{t("FulfilledSurveys")}</h3>
                <Nav variant="tabs" defaultActiveKey="byDate">
                    <Nav.Item>
                        <Nav.Link eventKey="byDate">{t("ByDate")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="byDepartment">{t("ByDepartment")}</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TimelineUserFulfill/>
            </div>
            
            {
                getQuestions(survey).map(question=> <SurveyQuestionStats question={question} stats={surveyStats.fulfilledSurveys}/>)
            }
        </div>
    )
}
