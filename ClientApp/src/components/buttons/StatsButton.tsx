import React from 'react';
import RawIconButton from './RawIconButton';
import {useTranslation } from 'react-i18next';

interface StatsButtonProps{
    handleClick: ()=> void;
    tittle?: string;
}
export default function StatsButton({
    handleClick,
    tittle
}: StatsButtonProps){
    const { t } = useTranslation();
    return <RawIconButton icon="fa fa-chart-bar" buttonTitle={tittle||t("Stats")} handleClick={handleClick}/>
}