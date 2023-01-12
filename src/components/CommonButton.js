import React, { useRef } from "react"
import styles from "./CommonButton.module.css"

function CommonButton({text, functionToRun}) {
    const ref = useRef(null)

    const buttonAnimation = () => {
        let element = document.getElementById(text);
        const classAnimationButton = 'CommonButton_commonBtnClick__MKyqR' 

        element.classList.toggle(classAnimationButton)

        setTimeout(()=>{
            element.classList.toggle(classAnimationButton)
        }, 100) 
    }
    return ( 
        <button ref={ref} 
                id={text}
                className={styles.commonBtn} 
                onClick={()=> {functionToRun(text); buttonAnimation()}}> 
                {text}
        </button>
    )
}

export default CommonButton
