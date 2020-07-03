import React, { useState } from 'react';
import { NavMenu } from './navMenu';


export function Layout(props: any){
  return (
    <div>
      <NavMenu />
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}
