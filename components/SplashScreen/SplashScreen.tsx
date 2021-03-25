import styles from "./SplashScreen.module.css";
import Logo from "../Logo/Logo";

export type SplashScreenProps = {
  fontColor: string;
};

function SplashScreen({ fontColor }: SplashScreenProps) {
  return (
    <div>
      <svg
        className={styles.DoubleForm}
        xmlns="http://www.w3.org/2000/svg"
        width="221.035"
        height="219.357"
        viewBox="0 0 221.035 219.357"
      >
        <g transform="translate(21.737 2.513)" fill="none">
          <path
            d="M102.544,0C157.87,0,233.831,30.25,163.55,101.875S53.878,266.505,2.366,139.285,47.217,0,102.544,0Z"
            stroke="none"
          />
          <path
            d="M 102.5437164306641 0.5 C 80.22764587402344 0.5 61.80164337158203 2.530059814453125 46.21278381347656 6.706207275390625 C 36.01521301269531 9.43804931640625 27.03289794921875 13.12908935546875 19.51531982421875 17.67680358886719 C 15.37239074707031 20.18305969238281 11.588134765625 23.00202941894531 8.267684936523438 26.055419921875 C 4.752639770507812 29.28773498535156 1.657577514648438 32.87458801269531 -0.93157958984375 36.71627807617188 C -4.488143920898438 41.99337768554688 -7.206466674804688 47.92391967773438 -9.0111083984375 54.34309387207031 C -10.93281555175781 61.17869567871094 -11.87260437011719 68.76066589355469 -11.80435180664062 76.87841796875 C -11.73207092285156 85.47731018066406 -10.52674865722656 94.91677856445312 -8.221893310546875 104.9346008300781 C -5.792755126953125 115.4927062988281 -2.074600219726562 126.9868469238281 2.829177856445312 139.0977478027344 C 7.375640869140625 150.3262023925781 11.95646667480469 160.1214141845703 16.44435119628906 168.2112426757812 C 20.80514526367188 176.0719146728516 25.23939514160156 182.6125183105469 29.62393188476562 187.6513824462891 C 33.84449768066406 192.5017700195312 38.18025207519531 196.1449890136719 42.5107421875 198.479736328125 C 44.60427856445312 199.6084594726562 46.75106811523438 200.4620208740234 48.89154052734375 201.0167388916016 C 50.97810363769531 201.5574951171875 53.12628173828125 201.8316650390625 55.27639770507812 201.8316650390625 C 57.84017944335938 201.8316650390625 60.50418090820312 201.4409790039062 63.19442749023438 200.6704406738281 C 65.78846740722656 199.927490234375 68.50128173828125 198.8041687011719 71.25749969482422 197.3316650390625 C 76.41553497314453 194.5760498046875 81.88199615478516 190.5523834228516 87.96924591064453 185.0307312011719 C 99.42864227294922 174.6361389160156 111.7166748046875 160.1091613769531 124.7262115478516 144.729248046875 C 136.7912902832031 130.4658508300781 149.2671051025391 115.7168426513672 163.1928863525391 101.5248107910156 C 169.7319641113281 94.86070251464844 175.2121429443359 88.32548522949219 179.4811706542969 82.10063171386719 C 183.5354614257812 76.18891906738281 186.5927124023438 70.418701171875 188.5679931640625 64.95024108886719 C 190.4371490478516 59.77555847167969 191.3796844482422 54.75466918945312 191.3694610595703 50.027099609375 C 191.3597869873047 45.55952453613281 190.4992065429688 41.25584411621094 188.8116455078125 37.23562622070312 C 178.2166442871094 11.99577331542969 136.6658935546875 0.5 102.5437164306641 0.5 M 102.5437164306641 0 C 157.8704681396484 0 233.8310394287109 30.24995422363281 163.5497894287109 101.8749847412109 C 118.5644912719727 147.720458984375 86.22953796386719 202.3316497802734 55.27641296386719 202.3316497802734 C 37.87098693847656 202.3316497802734 20.90621948242188 185.0748901367188 2.365707397460938 139.2853698730469 C -49.14649963378906 12.0655517578125 47.21693420410156 0 102.5437164306641 0 Z"
            stroke="none"
            fill="#a6f7e7"
          />
        </g>
        <g transform="translate(12.261 16.723) rotate(-5)" fill="none">
          <path
            d="M102.544,0C157.87,0,233.831,30.25,163.55,101.875S53.878,266.505,2.366,139.285,47.217,0,102.544,0Z"
            stroke="none"
          />
          <path
            d="M 102.5437164306641 0.5 C 80.22764587402344 0.5 61.80164337158203 2.530059814453125 46.21278381347656 6.706207275390625 C 36.01521301269531 9.43804931640625 27.03289794921875 13.12908935546875 19.51531982421875 17.67680358886719 C 15.37239074707031 20.18305969238281 11.588134765625 23.00202941894531 8.267684936523438 26.055419921875 C 4.752639770507812 29.28773498535156 1.657577514648438 32.87458801269531 -0.93157958984375 36.71627807617188 C -4.488143920898438 41.99337768554688 -7.206466674804688 47.92391967773438 -9.0111083984375 54.34309387207031 C -10.93281555175781 61.17869567871094 -11.87260437011719 68.76066589355469 -11.80435180664062 76.87841796875 C -11.73207092285156 85.47731018066406 -10.52674865722656 94.91677856445312 -8.221893310546875 104.9346008300781 C -5.792755126953125 115.4927062988281 -2.074600219726562 126.9868469238281 2.829177856445312 139.0977478027344 C 7.375640869140625 150.3262023925781 11.95646667480469 160.1214141845703 16.44435119628906 168.2112426757812 C 20.80514526367188 176.0719146728516 25.23939514160156 182.6125183105469 29.62393188476562 187.6513824462891 C 33.84449768066406 192.5017700195312 38.18025207519531 196.1449890136719 42.5107421875 198.479736328125 C 44.60427856445312 199.6084594726562 46.75106811523438 200.4620208740234 48.89154052734375 201.0167388916016 C 50.97810363769531 201.5574951171875 53.12628173828125 201.8316650390625 55.27639770507812 201.8316650390625 C 57.84017944335938 201.8316650390625 60.50418090820312 201.4409790039062 63.19442749023438 200.6704406738281 C 65.78846740722656 199.927490234375 68.50128173828125 198.8041687011719 71.25749969482422 197.3316650390625 C 76.41553497314453 194.5760498046875 81.88199615478516 190.5523834228516 87.96924591064453 185.0307312011719 C 99.42864227294922 174.6361389160156 111.7166748046875 160.1091613769531 124.7262115478516 144.729248046875 C 136.7912902832031 130.4658508300781 149.2671051025391 115.7168426513672 163.1928863525391 101.5248107910156 C 169.7319641113281 94.86070251464844 175.2121429443359 88.32548522949219 179.4811706542969 82.10063171386719 C 183.5354614257812 76.18891906738281 186.5927124023438 70.418701171875 188.5679931640625 64.95024108886719 C 190.4371490478516 59.77555847167969 191.3796844482422 54.75466918945312 191.3694610595703 50.027099609375 C 191.3597869873047 45.55952453613281 190.4992065429688 41.25584411621094 188.8116455078125 37.23562622070312 C 178.2166442871094 11.99577331542969 136.6658935546875 0.5 102.5437164306641 0.5 M 102.5437164306641 0 C 157.8704681396484 0 233.8310394287109 30.24995422363281 163.5497894287109 101.8749847412109 C 118.5644912719727 147.720458984375 86.22953796386719 202.3316497802734 55.27641296386719 202.3316497802734 C 37.87098693847656 202.3316497802734 20.90621948242188 185.0748901367188 2.365707397460938 139.2853698730469 C -49.14649963378906 12.0655517578125 47.21693420410156 0 102.5437164306641 0 Z"
            stroke="none"
            fill="#a6f7e7"
          />
        </g>
        <text className={styles.Question} x="70" y="75" fill={fontColor}>
          H O W
        </text>
        <text className={styles.Question} x="105" y="111" fill={fontColor}>
          A R E
        </text>
        <text className={styles.Question} x="93" y="150" fill={fontColor}>
          Y O U ?
        </text>
      </svg>
      <div className={styles.Logo}>
        <Logo
          fontColor="var(--primary-font-color-brown)"
          backgroundColor="var(--primary-app-color-turquoise)"
        />
      </div>
      <svg
        className={styles.SingleForm}
        xmlns="http://www.w3.org/2000/svg"
        width="204.177"
        height="142.62"
        viewBox="0 0 204.177 142.62"
      >
        <g transform="translate(12.308)" fill="none">
          <path
            d="M102.544,0C157.87,0,233.831,21.323,163.55,71.81S53.878,187.855,2.366,98.18,47.217,0,102.544,0Z"
            stroke="none"
          />
          <path
            d="M 102.5437164306641 0.5 C 77.38838958740234 0.5 57.03553771972656 2.327285766601562 40.32211303710938 6.086212158203125 C 29.24693298339844 8.577102661132812 19.80110168457031 11.94953918457031 12.24699401855469 16.10986328125 C 8.074462890625 18.40782165527344 4.394851684570312 20.99325561523438 1.310394287109375 23.79435729980469 C -1.956069946289062 26.76071166992188 -4.647216796875 30.05278015136719 -6.68829345703125 33.5791015625 C -8.807327270507812 37.24006652832031 -10.28599548339844 41.25804138183594 -11.083251953125 45.52139282226562 C -11.92242431640625 50.0087890625 -12.03085327148438 54.8963623046875 -11.40553283691406 60.04839324951172 C -10.74925231933594 65.4559326171875 -9.266326904296875 71.30632019042969 -6.998001098632812 77.43707275390625 C -4.626434326171875 83.84693145751953 -1.33013916015625 90.74200439453125 2.799285888671875 97.93067932128906 C 7.341323852539062 105.8376770019531 11.91728210449219 112.7349319458008 16.40007019042969 118.4307861328125 C 20.75474548339844 123.9639282226562 25.18289184570312 128.5679016113281 29.56146240234375 132.1148529052734 C 37.87228393554688 138.8472137451172 46.28370666503906 142.1198883056641 55.27642822265625 142.1198883056641 C 60.38510894775391 142.1198883056641 65.63199615478516 141.0792236328125 71.31692504882812 138.9384307861328 C 76.47867584228516 136.9946441650391 81.94750213623047 134.1573944091797 88.03582000732422 130.2645721435547 C 99.49314117431641 122.9389266967773 111.7798233032227 112.7002868652344 124.7878570556641 101.8605041503906 C 136.8538513183594 91.80571746826172 149.3306427001953 81.40864562988281 163.2580718994141 71.40374755859375 C 174.6664276123047 63.20846557617188 182.7097473144531 55.40097045898438 187.1646728515625 48.19815063476562 C 189.2253265380859 44.86642456054688 190.5435333251953 41.61703491210938 191.0827178955078 38.54022216796875 C 191.5932159423828 35.62710571289062 191.4168853759766 32.79840087890625 190.5586395263672 30.13261413574219 C 187.5721740722656 20.85646057128906 176.2472839355469 13.09757995605469 157.8082122802734 7.694747924804688 C 142.2034301757812 3.122390747070312 122.0602874755859 0.5 102.5437164306641 0.5 M 102.5437164306641 0 C 157.8704681396484 0 233.8310394287109 21.32264709472656 163.5497894287109 71.80982208251953 C 118.5644912719727 104.1254577636719 86.22954559326172 142.6198883056641 55.27641296386719 142.6198883056641 C 37.87100219726562 142.6198883056641 20.90621948242188 130.4559020996094 2.365707397460938 98.17971801757812 C -49.14649963378906 8.504791259765625 47.21693420410156 0 102.5437164306641 0 Z"
            stroke="none"
            fill="#a6f7e7"
          />
        </g>
        <text className={styles.PepTalk} x="1" y="30" fill={fontColor}>
          be good
        </text>
        <text className={styles.PepTalk} x="33" y="50" fill={fontColor}>
          to
        </text>
        <text className={styles.PepTalkSerif1} x="17" y="70" fill={fontColor}>
          your
        </text>
        <text className={styles.PepTalkSerif2} x="17" y="95" fill={fontColor}>
          self
        </text>
      </svg>
    </div>
  );
}
export default SplashScreen;
