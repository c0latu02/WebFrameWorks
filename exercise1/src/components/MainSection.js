import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection(props) {
    return (

        <div className={ styles.container }>
            <div className={ styles.item }>
        <div>
                <div>
                <h1> { props.topic }</h1>
                <img id="img" src="https://upload.wikimedia.org/wikipedia/fi/thumb/1/1b/Toripolliisi.jpg/250px-Toripolliisi.jpg"/>
                </div>
                <div>
                <span className={ styles.header }>{ props.topic } | </span>{ props.body }
                </div>
        </div>     
        </div>
        </div>
           
    )
}
