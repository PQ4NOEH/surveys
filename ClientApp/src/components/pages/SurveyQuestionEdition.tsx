import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {RemoveButton, AddButton} from '../buttons';
import {QuestionTypeSelect} from '../survey';
import {useTranslation } from 'react-i18next';
import {IAppState, 
    ISurvey, 
    ISurveySection, 
    ITextQuestion, 
    IMultipleChoiceQuestion,
    IChooseOneQuestion,
    QuestionType,
    ISurveyQuestion,
    IQuestionOption
} from '../../Types/appTypes'
import { INSPECT_MAX_BYTES } from 'buffer';

interface ISurveyQuestionEditionrouteMatch{
    match:{
        params:{
            surveyId: string, 
            sectionId: string,
            questionId: string
        }
    }
}

function getSectionAndQuestion(
    survey:ISurvey, 
    sectionId: string, 
    questionId: string)
    :[ISurveySection?, ISurveyQuestion?]{
    var currentSection = survey.sections.find(s=> s.id == parseInt(sectionId));
    if(!currentSection) return [undefined,undefined];
    return [currentSection,currentSection?.questions.find(q=> q.id == parseInt(questionId))];

}
export default function SurveyQuestionEdition({
    match:{
        params:{
            surveyId, 
            sectionId,
            questionId
        }
    }
}:ISurveyQuestionEditionrouteMatch) {
    const { t } = useTranslation();
    const survey = useSelector((state:IAppState)=> state.survey);
    const history = useHistory();
    function goSurvey(){
        history.push(`/surveyEdition/${surveyId}`)
    }
    function save(e: React.FormEvent){
        e.preventDefault();
        goSurvey();

    }
    function handleOptionDelete(option: IQuestionOption){
        return ()=>{};
    }
    const [section, question] = getSectionAndQuestion(survey, sectionId, questionId);
    if(question) {
        return (
            <div>
                <h1>{`${survey.name}/${section?.name}`}</h1>  
                <form onSubmit={save} >
                    <div className="form-group">
                        <label htmlFor="caption">{t("Question")}</label>
                        <input type="text" className="form-control" id="caption" aria-describedby="questionHelp" />
                        <small id="questionHelp" className="form-text text-muted">{t("TextQuestionYouWantToDo")}</small>
                    </div>
                    <QuestionTypeSelect handleChange={(p)=> {}}/>
                    <div className={question.type === QuestionType.Text? 'd-none':'border p-3'}>
                        <label htmlFor="questionType">{t("Options")}</label>
                        <div className="row">
                            <div className="col-11">  <input type="text" className="form-control" id="newOption" /></div>
                            <div className="col-1"><AddButton handleClick={()=>{}}/></div>
                        </div>
                        <table className="table">
                            <tbody>
                                {
                                    ((question as IMultipleChoiceQuestion).options||[]).map(o => (
                                        <tr><td>{o.caption}</td><td><RemoveButton handleDelete={handleOptionDelete(o)} /></td></tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="row mt-3 justify-content-between">
                        <div className="col-1">
                            <button type="submit" className="btn btn-secondary" onClick={goSurvey}>{t("Back")}</button>
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-primary" onClick={save}>{t("Save")}</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    } else {
        goSurvey();
        return null;
    }

   
}
