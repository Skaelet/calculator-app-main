import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [theme, setTheme] = useState("theme-1");

  const [value, setValue] = useState("0");

  const validInputs = ["0", "1", "2", 
                       "3", "4", "5", 
                       "6", "7", "8", 
                       "9", "/", "*", 
                       "-", "+", "Enter"
                       , "."];

  const selectTheme = (theme) => {
    setTheme(theme);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = eval(e.target[0].value)
    const finalValue = newValue % 1 === 0 ? newValue : parseFloat(newValue.toPrecision(10)).toString();
    setValue(finalValue.toString());
  }

  const checkInput = (e) => {
    const key = e.nativeEvent.data;
    const inputType = e.nativeEvent.inputType;

    //console.log(e);

    if (value.length > 1) {
      if (validInputs.includes(key)) {
        setValue(value + key);
      } else if (inputType === "deleteContentBackward") {
        setValue(value.slice(0, value.length - 1));
      }
    } else {
      if (value === "0") {
        if (validInputs.includes(key)) {
          setValue(key);
        }
      } else {
        if (validInputs.includes(key)) {
          setValue(value + key);
        } else if (inputType === "deleteContentBackward") {
          setValue("0");
        }
      }
    }
  } 

  return (
    <div className={`${styles["container"]} ${styles[theme]}`}>
      <div className={styles["calculator"]}>
        <div className={styles["header"]}>
          <h1>calc</h1>
          <div className={styles["switch"]}>
            <div className={styles["switch-number"]}>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <span className={styles["switch-theme"]}>THEME</span>
            <div className={styles["switch-selector"]}>
              <button onClick={() => {selectTheme("theme-1")}} className={theme === "theme-1" ? styles["active"] : ""}></button>
              <button onClick={() => {selectTheme("theme-2")}} className={theme === "theme-2" ? styles["active"] : ""}></button>
              <button onClick={() => {selectTheme("theme-3")}} className={theme === "theme-3" ? styles["active"] : ""}></button>
            </div>
          </div>
        </div>
        <form className={styles["visor"]} onSubmit={(e) => handleSubmit(e)}>
          <input type="text" className={styles["visor-input"]} onChange={(e) => checkInput(e)} value={value}/>
        </form>
        <div className={styles["keyboard"]}></div>
      </div>
    </div>
  )
}

export default App
