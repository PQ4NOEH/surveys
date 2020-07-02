import React from 'react';
import {ISurveySection} from '../../Types/appTypes';
import SurveyQuestion from './SurveyQuestion'

interface ISurveySectionProps{
    section:ISurveySection,
    surveyId: number
    
}
export default function SurveySection({
    section,
    surveyId}:ISurveySectionProps) {
    return (
        <div key={section.id}>
            <h3>{section.name}</h3>
            {section.questions.map(q=> <SurveyQuestion question={q} surveyId={surveyId} sectionId={section.id}/>)}
        </div>
    )
}

