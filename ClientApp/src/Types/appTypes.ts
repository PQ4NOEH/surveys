import EnumHelper from './EnumHelper'
import {SystemNotification, SystemNotificationType} from './SystemNotification';

export {EnumHelper};

export interface IStoreAction<T>{
    type: string,
    payload:T
}
export interface IAppState{
    collaborators: Array<ICollaborator>,
    collaboratorSummary: ICollaboratorSummary,
    surveysSummary: Array<ISurveySummary>,
    systemNotifications: Array<SystemNotification>,
    survey: ISurvey,
    surveyStats: ISurveyStats
}
export interface ISurveyStats{
    id: number,
    name: string,
    fulfilledSurveys:Array<IFulfilledSurvey>
}
export interface IFulfilledSurvey{
    id:number,
    doneOn: Date,
    employeeNie: string,
    questions:Array<IQuestionAnswer>
}
export interface IQuestionAnswer{
    questionId:number,
    values:Array<number>
}
export {SystemNotification, SystemNotificationType}
export interface ICollaborator{
    nie: string,
    name: string,
    email: string,
    department: string
}

export interface ISurveySummary {
    id: number,
    name: string
}

export interface ICollaboratorSummary extends ICollaborator{
    surveys: Array<ISurveySummary>
}

export type ActionT = <T>(arg: T) => void;

export interface ISurvey extends ISurveySummary{
    sections: Array<ISurveySection>
}

export interface ISurveySection {
    id:number,
    name: string,
    position: number
    questions: Array<ITextQuestion|IMultipleChoiceQuestion|IChooseOneQuestion>
}
export interface ITextQuestion {
    id:number,
    type:QuestionType,
    position:number,
    caption:string
}
export interface IMultipleChoiceQuestion{
    id:number,
    type:QuestionType,
    position:number,
    caption:string,
    options:Array<IQuestionOption>
}
export interface IChooseOneQuestion{
    id:number,
    type:QuestionType,
    position:number,
    caption:string,
    options:Array<IQuestionOption>,
    viewMode: QuestionViewMode
}
export type ISurveyQuestion = ITextQuestion|IMultipleChoiceQuestion|IChooseOneQuestion
export interface IQuestionOption{
    caption: string,
    value: number,
    position: number
}

enum QuestionViewMode{
    raw = 1,
    progressBar = 2,
}
export enum QuestionType{
    Text,
    MultipleChoice,
    ChooseOne
}

 
