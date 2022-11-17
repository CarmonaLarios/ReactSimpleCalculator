import CalculatorBody from "../components/CalculatorBody";
import CommonButton from "../components/CommonButton";
import Input from "../components/Input";
import Result from "../components/Result";
import styles from "./Main.module.css"
import { useState } from "react";
import { useEffect } from "react";

function Main() {
    const [total, setTotal] = useState('0')
    const [inputValue, setInputValue] = useState('0')
    const operators = [".", "+", "-", "*", "/"]
    //const numbers = Array.from(Array(10).keys())
    const numbers = ["0","1","2","3","4","5","6","7","8","9"]

    const setValueToConcact = (value) =>{

        value = value.toString()

        if (value === 'Enter'){
            getTotal()
            return
        }

        if(!numbers.includes(value) && !operators.includes(value)) 
            return

        const haveValue = inputValue.length > 0
        let lastCharIsInvalid = false

        if(operators.includes(value) && !haveValue){
            return
        }

        //avoids to concact values like ++, --, +-, ..
        if (haveValue){
            lastCharIsInvalid = operators.includes(inputValue.charAt(inputValue.length-1))
        } 
        
        if((operators.includes(value) && lastCharIsInvalid)){
            console.log("Not allowed operator")
            return
        }

        if(inputValue[0] === '0'){
            setInputValue(value)
            return
        }

        setInputValue(inputValue.toString().concat(value)); 
        console.log(value)
    }

    const getTotal = () => {
        try{
            //avoids to end with +-*/
            if(operators.includes(inputValue.slice(-1))){
                setInputValue(inputValue.slice(0, -1))
            }

            setTotal(eval(inputValue).toString())
        } catch{
            setInputValue("Error!")
            setTimeout(() => {
                clearTotal()    
            }, 2000);           
        }
    }

    const clearTotal = () => {
        setTotal('0')
    }

    const deleteLastChar = () => {
        if (inputValue.length > 0){
            setInputValue(inputValue.slice(0, -1))
        }
    }
    

    useEffect(() => {
        setInputValue(total)
    }, [total])

    return ( 
        <>
            <CalculatorBody>
                <div className={styles.headGroup}>
                    <Result value={total}></Result>
                    <Input value={inputValue}></Input>
                </div> 
                <div className={styles.btnGroup}>
                    <div className={styles.btn}>
                        <CommonButton text={7} value={setValueToConcact}></CommonButton>
                        <CommonButton text={8} value={setValueToConcact}></CommonButton>
                        <CommonButton text={9} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"AC"} value= {clearTotal}></CommonButton> 
                    </div>
                    <div className={styles.btn}>
                        <CommonButton text={4} value={setValueToConcact}></CommonButton>
                        <CommonButton text={5} value={setValueToConcact}></CommonButton>
                        <CommonButton text={6} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"+"} value={setValueToConcact}></CommonButton>
                    </div>
                    <div className={styles.btn}>
                        <CommonButton text={1} value={setValueToConcact}></CommonButton>
                        <CommonButton text={3} value={setValueToConcact}></CommonButton>
                        <CommonButton text={2} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"-"} value={setValueToConcact}></CommonButton>                   
                    </div>
                    <div className={styles.btn}>
                        <CommonButton text={0} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"."} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"*"} value={setValueToConcact}></CommonButton>
                        <CommonButton text={"/"} value={setValueToConcact}></CommonButton>               
                    </div>
                    <div className={styles.btnEnd}>
                        <CommonButton text={"="} value={getTotal}></CommonButton>
                        <CommonButton text={"DEL"} value={deleteLastChar}></CommonButton>               
                    </div>
                </div>
            </CalculatorBody>   
        </>
        
     );
}

export default Main;
