import React, { useRef, useState } from "react"
import styles from "./CommonButton.module.css"

function CommonButton({text, functionToRun}) {
    const ref = useRef(null)
    const [isClicked, setClicked] = useState(false)

    const buttonAnimation = () => {
        setClicked(true)
        
        setTimeout(()=>{
            setClicked(false)
        }, 100) 
    }
    return ( 
        <button ref={ref} 
                id={text}
                className={isClicked ? `${styles.commonBtn} ${styles.commonBtnClick}` : styles.commonBtn} 
                onClick={()=> {functionToRun(text); buttonAnimation()}}> 
                {text}
        </button>
    )
}

export default CommonButton
