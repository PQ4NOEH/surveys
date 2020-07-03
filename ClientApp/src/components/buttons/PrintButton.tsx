import React from 'react';
import RawIconButton from './RawIconButton'

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function PrintButton({
    handleClick,
    tittle = "Imprimir"
}: AddButtonProps){
    return <RawIconButton icon="fas fa-print" buttonTitle={tittle} handleClick={handleClick}/>
}