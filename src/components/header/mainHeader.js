import React from 'react';
import './header.css';
import HeaderTop from './headerTop';
import HeaderBottom from './headerBottom';
import OtherServices from './OtherServices'


function MainHeader(){
    return (
        <div className="MainHeader">
            <HeaderTop />
            <OtherServices />
            <HeaderBottom />
        </div>
    );

}

export default MainHeader;


