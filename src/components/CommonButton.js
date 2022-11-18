import React, { useRef } from "react"
import styles from "./CommonButton.module.css"

function CommonButton({text, functionToRun}) {
    const ref = useRef(null)
    return ( 
        <button ref={ref} 
                id={text}
                className={styles.commonBtn} 
                onClick={()=> functionToRun(text)}> 
                {text}
        </button>
    )
}

export default CommonButton
