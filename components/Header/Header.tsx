import styles from "./Header.module.css";

export type HeaderProps = {
  backgroundColor: string;
  outlineColor: string;
};

function Header({ backgroundColor, outlineColor }: HeaderProps) {
  return (
    <svg
      className={styles.header}
      xmlns="http://www.w3.org/2000/svg"
      width="398.392"
      height="79.627"
      viewBox="0 0 398.392 79.627"
    >
      <g transform="translate(0.259 0.259)">
        <path
          d="M-.05,20.688s16.927-4.446,45.961-2.5,62.756-2.6,111.085-1.939c44.938-5.325,129.917-1.255,189.552-1.607s48.939-2.556,48.939-2.556l1.139,65.239L1.059,84.226Z"
          transform="matrix(-1, -0.017, 0.017, -1, 396.355, 91.135)"
          fill={backgroundColor}
          stroke={outlineColor}
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
}
export default Header;
