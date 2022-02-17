import { i18n } from 'next-i18next';
import React, { Component } from 'react';



class Navbar extends Component {
    render() {
        const t=i18n.t
        return (
            <div>
                {console.log(i18n.language)}
               <div>
            <h1>{t('this')}</h1>   
               </div>
                
               
            </div>
        );
    }
}


export default Navbar;
