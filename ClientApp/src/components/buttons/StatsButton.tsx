import React from 'react';
import RawIconButton from './RawIconButton'

interface StatsButtonProps{
    handleClick: ()=> void;
    tittle?: string
}
export default function StatsButton({
    handleClick,
    tittle = "View stats"
}: StatsButtonProps){
    return <RawIconButton icon="fa fa-chart-bar" buttonTitle={tittle} handleClick={handleClick}/>
}