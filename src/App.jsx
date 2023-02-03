import styles from "./App.module.scss";

function App() {

  return (
    <div className={styles["container"]}>
      <div className={styles["calculator"]}>
        <div className={styles["header"]}></div>
        <div className={styles["visor"]}></div>
        <div className={styles["keyboard"]}></div>
      </div>
    </div>
  )
}

export default App
