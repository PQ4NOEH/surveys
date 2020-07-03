import React from "react";
import {QuestionType, EnumHelper} from '../../../Types/appTypes';
import {useTranslation } from 'react-i18next';

interface questionTypeSelectProps{
    handleChange: (q:QuestionType)=> void
}
export default function QuestionTypeSelect({
  handleChange
}:questionTypeSelectProps) {
  const { t } = useTranslation();
  const questionTypeRecords = EnumHelper.toMap(QuestionType);

  return (
    <div className="form-group">
      <label htmlFor="questionType">{t("QuestionType")}</label>
      <select className="form-control" id="questionType">
        {
          Array.from(questionTypeRecords).map(t=> <option value={t[1]}>{t[0]}</option>)
        }
       
      </select>
    </div>
  );
}
