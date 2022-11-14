import React from "react"
import styles from "./CommonButton.module.css"

function CommonButton({text}) {
    return ( 
        <div className={styles.commonBtn}>
          <span>{text}</span>
        </div>
    )
}

export default CommonButton
