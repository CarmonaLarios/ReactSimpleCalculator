import React from "react"
import styles from "./CommonButton.module.css"

function CommonButton({text, value: functionConcact}) {
    return ( 
        <button className={styles.commonBtn} onClick={()=> functionConcact(text)} onKeyDown={(e) => {functionConcact(e.key)}}>
         {text}
        </button>
    )
}

export default CommonButton
