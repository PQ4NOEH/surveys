import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { IAppState, ISurveySummary } from '../../Types/appTypes';
import { SurveysSummaryTable } from '../survey'
import { CollaboratorSummary } from '../collaborators'

export default function Collaborator(props: any) {
    const history = useHistory();
    const collaborator = useSelector((store: IAppState) => store.collaboratorSummary);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "COLLABORATOR_SUMMARY_FETCH_REQUESTED", payload: { nie: parseInt(props.match.params.nie) } })
    }, [])

    const handleEditSurvey = (s: ISurveySummary) => history.push(`/surveyEdition/${s.id}`)
    const handleStatsSurvey = (s: ISurveySummary) => history.push(`/surveyStats/${s.id}`)
    const handleDeleteSurvey = (s: ISurveySummary) => { }
    const handleCreateNewSurvey = ()=> history.push("/surveyEdition/-1");
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Colaborador</h1>
                    <CollaboratorSummary
                        collaborator={collaborator}
                    />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <input 
                        type="button" 
                        className="btn btn-primary float-right " 
                        value="Nueva encuesta" 
                        onClick={handleCreateNewSurvey} 
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card" style={{ clear: "both" }}>
                        <h5 className="card-header">Encuestas</h5>
                        <div className="card-body">
                            <SurveysSummaryTable
                                surveys={collaborator.surveys}
                                handleEdit={handleEditSurvey}
                                handleDelete={handleDeleteSurvey}
                                handleStats={handleStatsSurvey}
                                allowManagement={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
