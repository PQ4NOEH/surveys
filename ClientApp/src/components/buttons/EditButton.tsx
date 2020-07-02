import React from 'react';
import RawIconButton from './RawIconButton'

interface EditButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function EditButton({
    handleClick,
    tittle = "Editar"
}: EditButtonProps){
    return <RawIconButton icon="fa fa-edit" buttonTitle={tittle} handleClick={handleClick}/>
    
}