import CalculatorBody from "../components/CalculatorBody";
import CommonButton from "../components/CommonButton";
import Input from "../components/Input";
import Result from "../components/Result";
import styles from "./Main.module.css"

function Main() {
    return ( 
        <>
            
            <CalculatorBody>
                <div className={styles.headGroup}>
                    <Input value={1}></Input>
                    <Result value={10}></Result>
                </div> 
                <div className={styles.btnGroup}>
                    <div className={styles.btn}>
                        <CommonButton text={1}></CommonButton>
                        <CommonButton text={4}></CommonButton>
                        <CommonButton text={7}></CommonButton>
                        <CommonButton text={"+"}></CommonButton>
                        <CommonButton text={"*"}></CommonButton>
                    </div>
                    <div className={styles.btn}>
                        <CommonButton text={3}></CommonButton>
                        <CommonButton text={5}></CommonButton>
                        <CommonButton text={6}></CommonButton>
                        <CommonButton text={"-"}></CommonButton>
                        <CommonButton text={"="}></CommonButton>
                    </div>
                    <div className={styles.btn}>
                        <CommonButton text={7}></CommonButton>
                        <CommonButton text={8}></CommonButton>
                        <CommonButton text={9}></CommonButton>
                        <CommonButton text={"/"}></CommonButton> 
                        <CommonButton text={"AC"}></CommonButton>                   
                    </div>
                </div>
            </CalculatorBody>   
        </>
        
     );
}

export default Main;
