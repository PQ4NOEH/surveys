import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface EditButtonProps{
    handleClick: ()=> void;
    tittle?:string;
    t?: (t:string)=> string;
}
export default function EditButton({
    handleClick,
    tittle 
}: EditButtonProps){
    const { t } = useTranslation();
    return <RawIconButton icon="fa fa-edit" buttonTitle={tittle||t("Edit")} handleClick={handleClick}/>
    
}