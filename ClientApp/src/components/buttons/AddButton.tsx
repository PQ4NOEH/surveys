import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function AddButton({
    handleClick,
    tittle
}: AddButtonProps){
    const { t } = useTranslation();
    return <RawIconButton icon="fa fa-plus" buttonTitle={tittle|| t("Add")} handleClick={handleClick}/>
}