import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [theme, setTheme] = useState("theme-1");

  const [operation, setOperation] = useState("0");

  const selectTheme = (theme) => {
    setTheme(theme);
  }

  const checkInput = (e) => {
    const keyCode = e.keyCode;
    const key = e.key;

    console.log(keyCode);

    if (operation == 0) {
      setOperation(key);
    } else {
      if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 111)) {
        setOperation(operation + key)
      } else if (keyCode == 8) {
        if (operation.length > 1) {
          setOperation(operation.slice(0, operation.length - 1));
        } else {
          setOperation(0);
        }
      }
    }

    if (keyCode >= 48 && keyCode <= 57) {
      if (operation == 0) {
        setOperation(key);
      } else {
        setOperation(operation + key)
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
              <button onClick={() => {selectTheme("theme-1")}} className={theme === "theme-1" && styles["active"]}></button>
              <button onClick={() => {selectTheme("theme-2")}} className={theme === "theme-2" && styles["active"]}></button>
              <button onClick={() => {selectTheme("theme-3")}} className={theme === "theme-3" && styles["active"]}></button>
            </div>
          </div>
        </div>
        <div className={styles["visor"]}>
          <input type="text" className={styles["visor-input"]} onKeyDown={(e) => checkInput(e)} value={operation}/>
        </div>
        <div className={styles["keyboard"]}></div>
      </div>
    </div>
  )
}

export default App
