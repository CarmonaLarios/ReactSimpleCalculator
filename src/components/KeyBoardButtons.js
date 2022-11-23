import { useEffect, useCallback } from "react"


 //refactor this
 const numbers = ["0","1","2","3","4","5","6","7","8","9"]
 const operators = [".", "+", "-", "*", "/", "="]
 let shortCutButtons = ["Enter", "Delete", "Backspace","R", "r"]

export const KeyboardButtons = (props) =>{

    const validKeys = (value) =>{
        return numbers.includes(value) || operators.includes(value) || shortCutButtons.includes(value) 
    }

    const handleKeyPress = useCallback((event) => {
        // Call updateCalc here
        if(validKeys(event.key)) {
            detectPressedKey(event.key)
        }
        console.log(`Key pressed: ${event.key}`);
      }, []);
    
    const detectPressedKey = (e) =>{
        
        if(e === 'Enter'){
            e = '='
        }
    
        if(e === 'Delete' || e === 'Backspace'){
            e = 'DEL'
        }

        if(e.toUpperCase() === 'R'){
            e = 'AC'
        }
    
        document.getElementById(e).click()
    } 
    
    useEffect(() => {
        return () => {
            window.addEventListener('keydown', handleKeyPress, true)
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [handleKeyPress])
    
    return (
        <>
            {props.children}
        </>
    )
}

export default KeyboardButtons
