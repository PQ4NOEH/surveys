import React from 'react';
import {IAppState} from '../../Types/appTypes'
import {useSelector} from 'react-redux';
import {SurveySection} from '../survey'

export default function SurveyEdition({match:{params:{surveyId=-1}}}:any) {
    const survey = useSelector((state:IAppState)=> state.survey);
    return (
        <div>
            <h1 className="text-center text-uppercase">{`Edición de ${survey.name}`}</h1>
            {
                survey.sections.map(s=> <SurveySection key={s.id} section={s} surveyId={surveyId}/>)
            }
        </div>
    )
}
