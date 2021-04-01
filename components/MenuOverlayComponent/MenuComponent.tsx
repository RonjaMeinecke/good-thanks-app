import { useEffect, useState } from "react";
import XButton from "../Buttons/XButton/XButton";
import styles from "./MenuComponent.module.css";

export type MenuProps = {
  primary?: boolean;
  secondary?: boolean;
};

function MenuOverlay({ primary, secondary }: MenuProps) {
  const [backgroundColor, setBackgroundColor] = useState(null);
  useEffect(() => {
    if (primary) {
      setBackgroundColor("var(--app-color-blue)");
    } else if (secondary) {
      setBackgroundColor("var(--app-color-coral)");
    }
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.organicForm} src="/assets/doubleMenuBlob.svg" />
      <div className={styles.XBtn}>
        <XButton primary />
      </div>
      <img className={styles.search} src="/assets/searchIcon.svg" />
      <h1 className={styles.headline}>habits</h1>
      <ol className={styles.list}>
        <li>my habits</li>
        <li>my journey</li>
        <li>my monthly goals</li>
        <li>about habits</li>
      </ol>
    </div>
  );
}
export default MenuOverlay;
