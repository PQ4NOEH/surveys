import React from 'react'
import {
    IChooseOneQuestion,
    IMultipleChoiceQuestion,
    QuestionType,
    ISurveyQuestion
} from '../../Types/appTypes';
import SurveyTextQuestion from './SurveyTextQuestion';
import SurveyMultipleChoiceQuestion from './SurveyMultipleChoiceQuestion';
import SurveyChooseOneQuestion from './SurveyChooseOneQuestion'
import {useHistory} from 'react-router-dom';

interface ISurveyQuestionProps {
    question: ISurveyQuestion,
    sectionId: number,
    surveyId: number
}
export default function SurveyQuestion({
    question,
    sectionId,
    surveyId }: ISurveyQuestionProps) {

    const history = useHistory();
    function goToQuestionEdition() {
        history.push(`/SurveyQuestionEdition/${surveyId}/${sectionId}/${question.id}`);
    }
    if (question.type === QuestionType.Text) return <SurveyTextQuestion question={question} onEdit={goToQuestionEdition} />
    else if (question.type === QuestionType.MultipleChoice) return <SurveyMultipleChoiceQuestion question={question as IMultipleChoiceQuestion} onEdit={goToQuestionEdition}/>
    else if (question.type === QuestionType.ChooseOne) return <SurveyChooseOneQuestion question={question as IChooseOneQuestion} onEdit={goToQuestionEdition}/>
    return <div />
}
