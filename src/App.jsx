import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [theme, setTheme] = useState("theme-1");

  const selectTheme = (theme) => {
    setTheme(theme);
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
        <div className={styles["visor"]}></div>
        <div className={styles["keyboard"]}></div>
      </div>
    </div>
  )
}

export default App
