import { useEffect } from "react"

export const KeyboardButtons = (props) =>{

    //refactor this
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]
    const operators = [".", "+", "-", "*", "/", "="]
    let shortCutButtons = ["Enter", "Delete", "Backspace","R", "r"]
    
    
    const validKeys = (value) =>{
        return numbers.includes(value) || operators.includes(value) || shortCutButtons.includes(value) 
    }
    
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
        
        console.log(e)

        document.getElementById(e).click()
    } 
    
        useEffect(() => {
            return () => {
                const handleEvent = event =>{
                    const {key} = event
                    if(validKeys(key)) {
                        detectPressedKey(key)
                    }
                }
        
                document.addEventListener('keydown', handleEvent, true)
                document.removeEventListener('keydown', handleEvent)
            }
        }, [])
        
        return (
            <>
             {props.children}
            </>
        )
    }

export default KeyboardButtons
