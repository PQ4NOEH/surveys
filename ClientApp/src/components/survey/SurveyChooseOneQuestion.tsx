import React from 'react';
import {IChooseOneQuestion} from '../../Types/appTypes';
import {EditButton} from '../buttons';

interface SurveyChooseOneQuestionProps{
    question: IChooseOneQuestion,
    onEdit: ()=> void
}
export default function SurveyChooseOneQuestion({question, onEdit}:SurveyChooseOneQuestionProps) {
    return (
        <div>
            <p className="font-weight-bold">{question.caption} <EditButton handleClick={onEdit} /></p>
            <ul className="list-group">
                {question.options.map(o=>{
                    return (
                        <li key={o.position} className="list-group-item">
                            <label>
                                <input type="radio" name={question.id.toString()} value={o.value} /> 
                                <span className="ml-2">{o.caption}</span>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
