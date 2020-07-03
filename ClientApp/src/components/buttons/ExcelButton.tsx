import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface AddButtonProps{
    handleClick: ()=> void;
    tittle?:string
}
export default function ExcelButton({
    handleClick,
    tittle
}: AddButtonProps){
    const { t } = useTranslation();
    return <RawIconButton icon="far fa-file-excel" buttonTitle={tittle||t("Download")} handleClick={handleClick}/>
}