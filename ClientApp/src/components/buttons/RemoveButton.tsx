import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface RemoveButtonProps{
    handleDelete: ()=> void;
    tittle?:string;
}
export default function RemoveButton({
    handleDelete,
    tittle
}: RemoveButtonProps){
    const { t } = useTranslation();
    const confirmOptions ={
        headingMessage: t("DeleteHeadingMessage"),
        BodyMessage: t("DeleteBodyMessage"),
        confirmLabel:t("ConfirmLabel"),
        closeLabel: t("Cancel")
    }
    return <RawIconButton 
                icon="fa fa-trash" 
                buttonTitle={tittle||t("Delete")} 
                handleClick={handleDelete}
                confirmOptions={confirmOptions}
            />
}