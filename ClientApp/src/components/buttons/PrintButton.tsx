import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string;
}
export default function PrintButton({
    handleClick,
    tittle
}: AddButtonProps){
    const { t } = useTranslation();
    return <RawIconButton icon="fas fa-print" buttonTitle={tittle||t("Print")} handleClick={handleClick}/>
}