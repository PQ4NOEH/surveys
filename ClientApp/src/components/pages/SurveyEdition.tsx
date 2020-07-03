import React from 'react';
import {IAppState} from '../../Types/appTypes'
import {useSelector} from 'react-redux';
import {SurveySection} from '../survey';
import {useTranslation } from 'react-i18next';

export default function SurveyEdition({
    match:{params:{surveyId=-1}}
}:any) {
    const { t } = useTranslation();
    const survey = useSelector((state:IAppState)=> state.survey);
    return (
        <div>
            <h1 className="text-center text-uppercase">{`${t("Edition")} ${t("Of")} ${survey.name}`}</h1>
            {
                survey.sections.map(s=> <SurveySection key={s.id} section={s} surveyId={surveyId}/>)
            }
        </div>
    )
}
