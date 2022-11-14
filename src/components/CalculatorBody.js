import React from 'react';
import styles from './CalculatorBody.module.css'

function CalculatorBody(props) {
    return ( 
        <div className={styles.body_color}>
          <div>{props.children}</div>
        </div>
     );
}

export default CalculatorBody;
