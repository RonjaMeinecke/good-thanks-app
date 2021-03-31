import styles from "./HeaderComponent.module.css";
import Header from "../Header/Header";

function HeaderComponent() {
  return (
    <div>
      <Header
        backgroundColor="var(--app-color-blue)"
        outlineColor="var(--app-color-pastelYellow)"
      />
      <img className={styles.logo} src="/assets/headerLogoBlue.svg" />
      <img className={styles.userIcon} src="/assets/UserIconYellow.svg" />
      <img className={styles.menu} src="/assets/burger menu.svg" />
    </div>
  );
}
export default HeaderComponent;
