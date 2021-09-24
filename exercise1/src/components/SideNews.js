import React from 'react'
import styles from './SideNews.module.css';

export default function Sidenews(props) {
    return (
        
        <div className={ styles.container }>
            
            <span className={ styles.header }>{ props.topic }:</span> { props.body }
        </div>
    )
}
