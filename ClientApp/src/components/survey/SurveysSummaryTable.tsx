import React from 'react';
import {ISurveySummary} from '../../Types/appTypes';
import {RemoveButton, EditButton, StatsButton} from '../buttons';

interface SurveysSummaryTableProps{
    surveys: Array<ISurveySummary>,
    handleEdit?: (c: ISurveySummary) => void,
    handleDelete?: (c: ISurveySummary) => void,
    handleStats?:(c: ISurveySummary) => void,
    allowManagement?: boolean
}
export default function SurveysSummaryTable({
    surveys, 
    handleEdit, 
    handleDelete, 
    handleStats,
    allowManagement= false
}: SurveysSummaryTableProps) {

    const noOp = ()=>{};
    const onClickDelete = (c: ISurveySummary) => ()=> (handleDelete|| noOp)(c);
    const onClickEdit = (c: ISurveySummary) => ()=> (handleEdit|| noOp)(c);
    const onClickStats = (c: ISurveySummary) => ()=> (handleStats|| noOp)(c);
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    
                    <th className={allowManagement? "d-table-cell":"d-none"}></th>
                </tr>
            </thead>
            <tbody>
                {
                    (surveys||[]).map(s =>
                        <tr key={s.id}>
                            <td>{s.name}</td>
                            <td className={allowManagement? "d-table-cell":"d-none"}>
                                <RemoveButton handleDelete={onClickDelete(s)} />
                                <EditButton handleClick={onClickEdit(s)} />
                                <StatsButton handleClick={onClickStats(s)} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
