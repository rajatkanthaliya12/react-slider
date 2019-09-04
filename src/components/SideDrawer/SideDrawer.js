import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <React.Fragment>
    <div onClick={()=>props.drawerToggleClickHandler(true)} className="drawer-strip"/>
    <div className={drawerClasses}>
     <div onClick={()=>props.drawerToggleClickHandler(false)} className="close"/>
    </div>
    </React.Fragment>
  );
};

export default sideDrawer;
