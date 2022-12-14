import CalculatorBody from "../components/CalculatorBody";
import CommonButton from "../components/CommonButton";
import Input from "../components/Input";
import Result from "../components/Result";
import styles from "./Main.module.css"
import { useState } from "react";
import { KeyboardButtons } from '../components/KeyBoardButtons'
import SideBar from "../components/SideBar";

const numbers = ["0","1","2","3","4","5","6","7","8","9"]
const operators = [".", "+", "-", "*", "/", "="]

function Main() {
    const [total, setTotal] = useState('')
    const [inputValue, setInputValue] = useState('')

    const setValueToConcact = (value) =>{

        value = value.toString()
    
        const haveValue = inputValue.length > 0 

        if (isValidOperation(value)){
            
            let lastCharIsInvalid = false
            
            if(operators.includes(value) && !haveValue){
                return
            }
    
            //#region  avoids to concact invalid values like ++, --, +-, ..
            if (haveValue){
                lastCharIsInvalid = operators.includes(inputValue.charAt(inputValue.length-1))
            } 
    
            if((operators.includes(value) && lastCharIsInvalid)){
                //console.log("Not allowed operator")
                return
            }
            //#endregion
            
            //#region remove concact in first time (Ex: 01)
            if(inputValue[0] === '0'){
                setInputValue(value)
                return
            }
            //#endregion
    
            setInputValue(inputValue.toString().concat(value)); 
        }

    }

    const getTotal = () => {
        try{
            let tmpTotal = inputValue;
            let total = 0

            //avoids to end with +-*/
            if(operators.includes(inputValue.slice(-1))){
                tmpTotal = inputValue.slice(0, -1)
            }

            total = eval(tmpTotal)

            setInputValue(total.toString())
            setTotal(total.toString())
        } catch(err){
            throwError()       
        }
    }

    const clearTotal = () => {
        setTotal('')
        setInputValue('')
    }

    const deleteLastChar = () => {
        if (inputValue.length > 0){
            setInputValue(inputValue.substring(0, inputValue.length - 1))
        }
    }

    const throwError = () =>{
        setInputValue("Error!")
        setTimeout(() => {
            clearTotal()    
        }, 2000);    
    }

    const isValidOperation = (value) =>{
        return (numbers.includes(value) || operators.includes(value))
    }

    return ( 
        <>
            <KeyboardButtons>
                <SideBar/>
                <CalculatorBody>
                    <div className={styles.headGroup}>
                        <Result value={total ? total : '0'}></Result>
                        <Input value={inputValue ? inputValue : '0'}></Input>
                    </div> 
                    <div className={styles.btnGroup}>
                        <div className={styles.btn}>
                            <CommonButton text={7} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={8} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={9} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"AC"} functionToRun= {clearTotal}></CommonButton> 
                        </div>
                        <div className={styles.btn}>
                            <CommonButton text={4} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={5} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={6} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"+"} functionToRun={setValueToConcact}></CommonButton>
                        </div>
                        <div className={styles.btn}>
                            <CommonButton text={1} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={3} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={2} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"-"} functionToRun={setValueToConcact}></CommonButton>                   
                        </div>
                        <div className={styles.btn}>
                            <CommonButton text={0} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"."} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"*"} functionToRun={setValueToConcact}></CommonButton>
                            <CommonButton text={"/"} functionToRun={setValueToConcact}></CommonButton>               
                        </div>
                        <div className={styles.btnEnd}>
                            <CommonButton text={"="} functionToRun={getTotal}></CommonButton>
                            <CommonButton text={"DEL"} functionToRun={deleteLastChar}></CommonButton>               
                        </div>
                    </div>
                </CalculatorBody>
            </KeyboardButtons>   
        </>
        
     );
}

export default Main;
