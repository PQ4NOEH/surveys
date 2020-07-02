import React, { useState, useEffect  } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ICollaborator, IAppState} from '../../Types/appTypes';
import {CollaboratorsTable} from '../collaborators';
import { useHistory } from "react-router-dom";


export default function Administration(){
  
  const collaborators = useSelector( (store: IAppState) => store.collaborators);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch({type: "COLLABORATORS_FETCH_REQUESTED"})
  },[])
  
  function handleEditCollaborator(c: ICollaborator) {
    history.push(`/collaborator/${c.nie}`);
  }

  function handleDeleteCollaborator(c: ICollaborator){
    alert(`You have deleted collaborator ${c.name}`);
  }

  return (
    <div>
      <h1 >Colaboradores</h1>
      <CollaboratorsTable 
        collaborators={collaborators}
        handleEdit={handleEditCollaborator}
        handleDelete= {handleDeleteCollaborator}
        />
      
    </div>
  );
}
