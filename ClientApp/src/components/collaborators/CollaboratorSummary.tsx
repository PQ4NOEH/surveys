import React from 'react'
import { ICollaborator } from '../../Types/appTypes'

interface CollaboratorSummaryProps{
    collaborator: ICollaborator,
}
export default function CollaboratorSummary({collaborator}:CollaboratorSummaryProps) {
    return (
        <div className="card">
            <h5 className="card-header">{collaborator.name||""}</h5>
            <div className="card-body">
                <h5 className="card-title">{collaborator.department||""}</h5>
            </div>
        </div>
    )
}
