import React from 'react';
import styles from './SearchResult.module.css';
import StarRating from './StarRating';


export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div className={ styles.best }>Best Seller
            <div 
                className={ styles.triangle }> 
            </div>
          </div>
         
          <div><img src={`/pictures/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.type }>{ props.type }</div>
                <div className= {styles.price }>
                    <sup>$</sup>
                    { props.price }
                </div>
          </div>
          <div><StarRating tahti={ props.rating } /></div>  
          <div className={ styles.type }>{props.status}</div>       

    </div>
  )
}
