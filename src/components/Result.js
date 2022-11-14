import React from 'react';
import styles from './Result.module.css'

function Result({value}) {
    return ( 
        <div className={styles.result_color}>
            <div>{value}</div>
        </div>
     );
}

export default Result;
