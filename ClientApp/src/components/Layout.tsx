import React, { useState } from 'react';
import { NavMenu } from './navMenu';
import {ToastManager} from './userCommunication'


export function Layout(props: any){
  return (
    <div>
      <NavMenu />
      <div className="container">
        <ToastManager />
        {props.children}
      </div>
    </div>
  );
}
