import styles from "./Logo.module.css";

export type LogoProps = {
  backgroundColor: string;
  fontColor: string;
  outlineColor: string;
};

function Logo({ backgroundColor, fontColor, outlineColor }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="290.281"
      height="140.626"
      viewBox="0 0 290.281 140.626"
    >
      <path
        d="M118.39,0A109.821,109.821,0,0,1,228.211,109.821c0,60.653-32.831,15.731-219.643,0S57.737,0,118.39,0Z"
        transform="translate(62.07)"
        fill={backgroundColor}
        stroke={outlineColor}
      />

      <text className={styles.LogoSvg} x="57" y="75" fill={fontColor}>
        good thanks.
      </text>
    </svg>
  );
}
export default Logo;
