import React from 'react';
import styles from './LowerPanel.module.css'

export default function LowerPanel() {
    

    // const demo = { color: 'white', backgroundColor: 'green' };
    // demo.fontSize = '30px';

    //const väli = {margin: '6px'};

    //const väli = {margin: '6px'};

   
    return (
              
        <div className={ styles.backround }>
        <div className={ styles.container }>
        
            
                <div>Etusivu</div>
                <div>HS</div>
                <div>visio</div>
                <div>Luetuimmat</div>
                <div>Uusimmat</div>
                <div>Politiikka</div>
                <div>Kaupunki</div>
                <div>Kulttuuri</div>
                <div>Tiede</div>
                <div>Hyvinvointi</div>
                <div>Ruoka</div>
                <div>Nyt</div>

            
        </div>
        </div>
            
            
        

        
    )
}
