import styles from "./HeaderComponent.module.css";
import Header from "../Header/Header";

function HeaderComponent() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <Header
            backgroundColor="var(--app-color-blue)"
            outlineColor="var(--app-color-pastelYellow)"
          />
        </div>
        <img className={styles.logo} src="/assets/headerLogoBlue.svg" />
        <img className={styles.userIcon} src="/assets/UserIconYellow.svg" />
        <img className={styles.menu} src="/assets/burger menu.svg" />
      </div>
    </div>
  );
}
export default HeaderComponent;
