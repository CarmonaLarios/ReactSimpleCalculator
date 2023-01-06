import styles from './SideBar.module.css'

const SideBar = () => {
    return (  
        <div>
            <div className={styles.sidebar}>
                <div className={styles.help}>Help</div>  
                <div className={styles.title}>
                    <p>Keyboard commands:</p>
                </div>
                <div className={styles.keyOptions}>
                    <ul>
                        <li>   
                            <p>Numbers: <span>0</span>...<span>9</span></p>
                        </li>
                        <li><p>Operators: <span>+</span>, <span>-</span>, <span>*</span>, <span>/</span> </p></li>
                        <li><p>Call equals: <span>=</span>,<span>Enter</span></p></li>
                        <li><p>Delete: <span>Backspace</span>,<span>Delete</span> </p></li>
                        <li><p>Reset values: <span>R</span></p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
