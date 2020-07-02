import React from 'react';
import {IMultipleChoiceQuestion} from '../../Types/appTypes';
import {EditButton} from '../buttons';

interface SurveyMultipleChoiceQuestionProps{
    question: IMultipleChoiceQuestion,
    onEdit: ()=> void
}
export default function SurveyMultipleChoiceQuestion({question, onEdit}:SurveyMultipleChoiceQuestionProps) {
    return (
        <div>
            <p className="font-weight-bold">{question.caption} <EditButton handleClick={onEdit} /></p>
            <ul className="list-group">
                {question.options.map(o=>{
                    return (
                        <li key={o.position} className="list-group-item">
                            <label>
                                <input type="checkbox" value={o.value} /> 
                                <span className="ml-2">{o.caption}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
