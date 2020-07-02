import React from 'react';
import RawIconButton from './RawIconButton';

interface RemoveButtonProps{
    handleDelete: ()=> void;
    tittle?:string
}
export default function RemoveButton({
    handleDelete,
    tittle = "Eliminar"
}: RemoveButtonProps){
    const confirmOptions ={
        headingMessage: "You are about to delete the selected Item.",
        BodyMessage: "Please Confirm or cancel the action",
        confirmLabel:"Yes I do confirm",
        closeLabel: "Cancel"
    }
    return <RawIconButton 
                icon="fa fa-trash" 
                buttonTitle={tittle} 
                handleClick={handleDelete}
                confirmOptions={confirmOptions}
            />
}