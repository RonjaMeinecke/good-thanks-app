import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div>
      <form className={styles.input}>
        <input
          type="text"
          className={styles.inputName}
          placeholder="name"
          required
        />
        <input
          type="email"
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
        <input
          type="text"
          className={styles.inputConfirmPassword}
          placeholder="confirm password"
          required
        />
      </form>

      <button type="submit" className={styles.Btn}>
        <img src="assets/nextBtnYellow.svg" />
      </button>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="480"
        height="473"
        viewBox="0 0 480 473"
      >
        <g
          transform="translate(8 3)"
          fill="#6fb1aa"
          stroke="#ffffd6"
          strokeWidth="1"
        >
          <rect width="472" height="470" rx="74" stroke="none" />
          <rect
            x="0.5"
            y="0.5"
            width="471"
            height="469"
            rx="73.5"
            fill="none"
          />
        </g>
        <g fill="none" stroke="#ffffd6" strokeWidth="1">
          <rect width="472" height="470" rx="74" stroke="none" />
          <rect
            x="0.5"
            y="0.5"
            width="471"
            height="469"
            rx="73.5"
            fill="none"
          />
        </g>

        <text className={styles.Create} x="75" y="60" fill="#ffffd6">
          create
        </text>
        <text className={styles.Account} x="75" y="90" fill="#ffffd6">
          account
        </text>
      </svg>
    </div>
  );
}
export default SignUp;
