import React from 'react';
import styles from './Input.module.css'

function Input({value}) {
    return ( 
        <div className={styles.input_color}>
            <div>{value}</div>
        </div>
     );
}

export default Input;
