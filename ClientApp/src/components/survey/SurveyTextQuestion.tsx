import React from 'react';
import {ITextQuestion} from '../../Types/appTypes';
import {EditButton} from '../buttons';

interface ISurveyTextQuestionProps{
     question: ITextQuestion,
     onEdit: ()=> void
}
export default function SurveyTextQuestion({
    question,
    onEdit
}:ISurveyTextQuestionProps) {
    
    return (
        <div>
            <p className="font-weight-bold">
                {question.caption}
                <EditButton handleClick={onEdit} />
            </p>
            <textarea className="text-answer-area"></textarea>
        </div>
    )
}
