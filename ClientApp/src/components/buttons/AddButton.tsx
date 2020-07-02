import React from 'react';
import RawIconButton from './RawIconButton'

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function AddButton({
    handleClick,
    tittle = "Agregar"
}: AddButtonProps){
    return <RawIconButton icon="fa fa-plus" buttonTitle={tittle} handleClick={handleClick}/>
}