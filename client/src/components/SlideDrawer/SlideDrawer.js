import React from 'react';
import "./slideDrawer.css";
import { Link } from 'react-router-dom';
const slideDrawer = ({openDrawer}) => {

    let drawerClasses = 'side-drawer'
       if(openDrawer) {
          drawerClasses = 'side-drawer open'
       }
  return (
    <div className="slideDrawer">
        <div className={drawerClasses}>
             <div className="slideDrawer__menu">
                <Link to='/'>Posts</Link>
                <Link to='/'>All Blogs</Link>
                <Link to='/Theme'>Edit Theme</Link>
                <Link to='/blog'>View current Blog</Link>
             </div>
          </div>
    </div>
  )
}

export default slideDrawer