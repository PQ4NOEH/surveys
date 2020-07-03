import React from 'react';
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'
import {useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icon.min.css';

export default function LanguageSwitch() {
    const { t, i18n } = useTranslation();
    function handleLanguageChange(languageKey:string){
        i18n.changeLanguage(languageKey);
    }
    return (
        <DropdownButton
            id="id"
            title={t("ChangeLanguage")}
            as={ButtonGroup}
            onSelect={handleLanguageChange}
            className="btn btn-outlined-primary"
        >
           
        <Dropdown.Item eventKey="en"><span className="flag-icon flag-icon-gb" /> English</Dropdown.Item>
        <Dropdown.Item eventKey="es"><span className="flag-icon flag-icon-es"/> Spanish</Dropdown.Item>
       
      </DropdownButton>
        
    )
}
