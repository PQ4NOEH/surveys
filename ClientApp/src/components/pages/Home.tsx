import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IAppState} from '../../Types/appTypes';
import {SurveysSummaryTable} from '../survey';

export default function Home (){
  const surveysSummary = useSelector((state :IAppState) => state.surveysSummary);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({ type: 'SURVEY_SUMMARY_FETCH_REQUESTED' });
  }, []);
  
  return (
    <div>
      <h1>Pending surveys</h1>
      <SurveysSummaryTable
        surveys={surveysSummary}
        />
      
    </div>
  );
}

