import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <form className={styles.input}>
        <input
          type="text"
          className={styles.inputEmail}
          placeholder="email"
          required
        />
        <input
          type="text"
          className={styles.inputPassword}
          placeholder="password"
          required
        />
      </form>

      <button type="submit" className={styles.Btn}>
        <img src="assets/nextBtnYellow.svg" />
      </button>

      <svg
        className={styles.blob}
        xmlns="http://www.w3.org/2000/svg"
        width="472"
        height="376"
        viewBox="0 0 472 376"
      >
        <g
          transform="translate(5)"
          fill="#6fb1aa"
          stroke="#ffffd6"
          strokeWidth="1"
        >
          <rect width="450" height="376" rx="74" stroke="none" />
          <rect
            x="0.5"
            y="0.5"
            width="449"
            height="375"
            rx="73.5"
            fill="none"
          />
        </g>
        <g
          transform="translate(0 5)"
          fill="none"
          stroke="#ffffd6"
          strokeWidth="1"
        >
          <rect width="472" height="364" rx="74" stroke="none" />
          <rect
            x="0.5"
            y="0.5"
            width="471"
            height="363"
            rx="73.5"
            fill="none"
          />
        </g>
        <text className={styles.welcome} x="75" y="60">
          welcome
        </text>
        <text className={styles.back} x="75" y="90">
          back
        </text>
      </svg>
    </div>
  );
}
export default Login;
