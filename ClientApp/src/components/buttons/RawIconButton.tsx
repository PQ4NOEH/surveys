import React, {useState} from 'react';
import {ConfirmModal} from '../userCommunication/';


interface IConfirmOptions{
    headingMessage: string,
    BodyMessage: string
    confirmLabel:string
    closeLabel:string
}
interface IRawIconButtonProps{
    buttonClassName?: string
    buttonTitle: string,
    icon:string,
    handleClick: ()=> void,
    confirmOptions?:IConfirmOptions
};

export default function RawIconButton({ 
    buttonClassName= "btn btn-outline-primary m-1", 
    buttonTitle,
    icon,
    handleClick,
    confirmOptions
}: IRawIconButtonProps) {
    const [state, setState] = useState({showModal:false});

    const openConfirm = ()=> setState({ showModal: true})
    const closeModal = ()=>  setState({ showModal: false})
    const confirm = ()=> {
        handleClick();
        closeModal();
    };
    
   
    return (
        <div className="d-inline hover-hand" >
            {
                confirmOptions !== undefined
                    ? <ConfirmModal 
                        Show={state.showModal}
                        OnConfirm={confirm}
                        OnClose={closeModal}
                        HeadingMessage={(confirmOptions||{} as IConfirmOptions).headingMessage}
                        BodyMessage={(confirmOptions||{} as IConfirmOptions).BodyMessage}
                        ConfirmLabel={(confirmOptions||{} as IConfirmOptions).confirmLabel}
                        CloseLabel={(confirmOptions||{} as IConfirmOptions).closeLabel}
                    />
                    : null

            }
            
            <div className="d-inline" onClick={confirmOptions===undefined ?handleClick:openConfirm}>
                <button className={buttonClassName} title={buttonTitle}><i className={icon}></i></button>
            </div>
        </div>
        
    )
}
