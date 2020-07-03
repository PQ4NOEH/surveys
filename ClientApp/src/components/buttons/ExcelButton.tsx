import React from 'react';
import RawIconButton from './RawIconButton'

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function ExcelButton({
    handleClick,
    tittle = "descargar"
}: AddButtonProps){
    return <RawIconButton icon="far fa-file-excel" buttonTitle={tittle} handleClick={handleClick}/>
}