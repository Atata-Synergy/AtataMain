import React from 'react';
import './header.css';
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';


function MainHeader(){
    return (
        <div className="MainHeader">
            <HeaderTop />
            <HeaderBottom />
        </div>
    );

}

export default MainHeader;


