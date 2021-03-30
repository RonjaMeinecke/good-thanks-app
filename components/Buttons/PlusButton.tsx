import { useEffect, useState } from "react";

export type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  coral?: boolean;
};

function PlusButton({ primary, secondary, coral }: ButtonProps) {
  const [backgroundColor, setBackgroundColor] = useState(null);
  const [outlineColor, setOutlineColor] = useState(null);
  useEffect(() => {
    if (primary) {
      setBackgroundColor("var(--app-color-blue)");
      setOutlineColor("var(--app-color-pastelYellow)");
    } else if (secondary) {
      setBackgroundColor("var(--app-color-pastelYellow)");
      if (coral) {
        setOutlineColor("var(--app-color-coral)");
      } else {
        setOutlineColor("var(--app-color-blue)");
      }
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46.514"
      height="37.587"
      viewBox="0 0 46.514 37.587"
    >
      <g transform="translate(52.515)" fill={backgroundColor}>
        <path
          d="M -25.04559707641602 37.08682250976562 C -28.09358596801758 37.08682250976562 -31.2116870880127 36.32963180541992 -34.31326675415039 34.83628082275391 C -37.7773551940918 33.16840362548828 -41.23465728759766 30.57208251953125 -44.58912658691406 27.11945152282715 C -50.97908782958984 20.5424919128418 -53.2628173828125 14.94535255432129 -51.37685775756836 10.48351192474365 C -50.65051651000977 8.765122413635254 -49.29281616210938 7.204452514648438 -47.34146499633789 5.844842433929443 C -45.60507583618164 4.635022163391113 -43.40973663330078 3.588182210922241 -40.81640625 2.73342227935791 C -35.82036590576172 1.086722254753113 -30.35762596130371 0.5000023245811462 -26.91122627258301 0.5000023245811462 C -24.15387725830078 0.5000023245811462 -21.47940635681152 1.023442268371582 -18.96210670471191 2.055772304534912 C -16.53139686584473 3.052582263946533 -14.34854698181152 4.479472160339355 -12.47417640686035 6.296802520751953 C -10.60088634490967 8.113092422485352 -9.130336761474609 10.22766208648682 -8.103376388549805 12.58177185058594 C -7.040736675262451 15.01769256591797 -6.501926422119141 17.60540199279785 -6.501926422119141 20.27303314208984 C -6.501926422119141 22.0167121887207 -6.969086647033691 23.95000267028809 -7.852896690368652 25.86388206481934 C -8.756586074829102 27.82079315185547 -10.07675647735596 29.71111297607422 -11.67067623138428 31.3304615020752 C -15.3244161605835 35.04250335693359 -20.07438659667969 37.08682250976562 -25.04559707641602 37.08682250976562 Z"
          stroke="none"
        />
        <path
          d="M -26.91122817993164 1.000003814697266 C -30.31881713867188 1.000003814697266 -35.72005844116211 1.580123901367188 -40.65988922119141 3.208293914794922 C -43.20717620849609 4.047870635986328 -45.35901641845703 5.072963714599609 -47.05562591552734 6.255081176757812 C -48.9283561706543 7.559902191162109 -50.22727584838867 9.048053741455078 -50.91630554199219 10.67817306518555 C -51.74053573608398 12.6281623840332 -51.70904541015625 14.85265350341797 -50.82269668579102 17.28985214233398 C -49.78286743164062 20.14910316467285 -47.56492614746094 23.33903312683105 -44.23050689697266 26.77103233337402 C -40.91704559326172 30.18146324157715 -37.50742721557617 32.74343109130859 -34.09635543823242 34.38578033447266 C -31.06299591064453 35.84628295898438 -28.01787567138672 36.58682250976562 -25.04559707641602 36.58682250976562 C -20.20943832397461 36.58682250976562 -15.58601760864258 34.59551239013672 -12.02701568603516 30.97972297668457 C -8.927425384521484 27.8306827545166 -7.001930236816406 23.72811317443848 -7.001930236816406 20.27303314208984 C -7.001930236816406 17.67462158203125 -7.526695251464844 15.15417098999023 -8.561668395996094 12.78170394897461 C -9.562458038330078 10.48757171630859 -10.99591827392578 8.426513671875 -12.82222747802734 6.655780792236328 C -14.65068817138672 4.882961273193359 -16.78026580810547 3.490932464599609 -19.15181732177734 2.518383026123047 C -21.60862731933594 1.510860443115234 -24.21926498413086 1.000003814697266 -26.91122817993164 1.000003814697266 M -26.91122817993164 3.814697265625e-06 C -15.36335754394531 3.814697265625e-06 -6.001930236816406 9.076541900634766 -6.001930236816406 20.27303314208984 C -6.001930236816406 27.60978889465332 -13.82046127319336 37.58681869506836 -25.04559326171875 37.58681869506836 C -30.9509162902832 37.58681869506836 -37.79843521118164 34.82638168334961 -44.94773864746094 27.46787261962891 C -65.68678283691406 6.121932983398438 -38.45912551879883 3.814697265625e-06 -26.91122817993164 3.814697265625e-06 Z"
          stroke="none"
          fill={backgroundColor}
        />
      </g>
      <g transform="translate(13.856 8.333)">
        <line
          y2="19.942"
          transform="translate(9.971)"
          fill="none"
          stroke={outlineColor}
          strokeLinecap="round"
          strokeWidth="1"
        />
        <line
          x1="19.942"
          transform="translate(0 9.971)"
          fill="none"
          stroke={outlineColor}
          strokeLinecap="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
export default PlusButton;
