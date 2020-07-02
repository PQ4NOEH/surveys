import React from 'react';
import { ICollaborator } from '../../Types/appTypes';
import {RemoveButton, EditButton} from '../buttons';

interface ICollaboratorsTableProps {
    collaborators: Array<ICollaborator>,
    handleEdit: (c: ICollaborator) => void,
    handleDelete: (c: ICollaborator) => void
}
export default function CollaboratorsTable({
    collaborators,
    handleEdit,
    handleDelete
}: ICollaboratorsTableProps) {
    const onClickDelete = (c: ICollaborator) => ()=> handleDelete(c);
    const onClickEdit = (c: ICollaborator) => ()=> handleEdit(c);

    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    collaborators.map(c =>
                        <tr key={c.nie}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td>{c.department}</td>
                            <td>
                                <RemoveButton handleDelete={onClickDelete(c)} />
                                <EditButton handleClick={onClickEdit(c)} />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}
