import Head from "next/head";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>good thanks.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.Container}>
          <SplashScreen fontColor="var(--primary-font-color-brown)" />

          <svg
            className={styles.Btn}
            xmlns="http://www.w3.org/2000/svg"
            width="89.247"
            height="90.743"
            viewBox="0 0 89.247 90.743"
          >
            <g
              transform="translate(11.931 42.758) rotate(-39)"
              fill="rgba(166,247,231,0.13)"
            >
              <path
                d="M 26.93570137023926 52.81489944458008 C 23.66545104980469 52.81489944458008 19.95614051818848 51.79758071899414 16.20878028869629 49.87290954589844 C 12.65665054321289 48.04851150512695 9.116150856018066 45.44430160522461 5.970030784606934 42.3418083190918 C 2.817760705947876 39.23326873779297 0.1729106903076172 35.73386001586914 -1.678589344024658 32.22190093994141 C -3.637769222259521 28.50572967529297 -4.67332935333252 24.81591033935547 -4.67332935333252 21.55134010314941 C -4.67332935333252 18.20475006103516 -3.917789220809937 14.43338012695312 -2.488399267196655 10.64492988586426 C -1.081709265708923 6.916639804840088 0.9411306977272034 3.259870052337646 3.361440658569336 0.06994003057479858 C 5.878210544586182 -3.247109889984131 8.791561126708984 -6.003769874572754 11.78655052185059 -7.902009963989258 C 15.07212066650391 -9.984410285949707 18.39783096313477 -11.04028034210205 21.67129135131836 -11.04028034210205 C 24.93062019348145 -11.04028034210205 28.34473037719727 -9.836429595947266 31.81879043579102 -7.462180137634277 C 34.967041015625 -5.310579776763916 38.08779907226562 -2.214730024337769 40.84368133544922 1.490700006484985 C 43.48812103271484 5.046299934387207 45.71728134155273 9.04302978515625 47.2901496887207 13.04881000518799 C 48.89538955688477 17.13702011108398 49.74386978149414 21.06105041503906 49.74386978149414 24.39669036865234 C 49.74386978149414 31.35289001464844 47.45920181274414 38.42277908325195 43.47568130493164 43.79356002807617 C 41.40488052368164 46.58551025390625 38.98323059082031 48.78221130371094 36.27799224853516 50.3226318359375 C 33.37372207641602 51.97637939453125 30.23052024841309 52.81489944458008 26.93570137023926 52.81489944458008 Z"
                stroke="none"
              />
              <path
                d="M 21.67128944396973 -10.79027938842773 C 18.44596862792969 -10.79027938842773 15.1652889251709 -9.747478485107422 11.92038726806641 -7.690849304199219 C 8.950309753417969 -5.808399200439453 6.059539794921875 -3.072509765625 3.56060791015625 0.2210502624511719 C 1.154640197753906 3.392059326171875 -0.8561897277832031 7.027099609375 -2.254501342773438 10.73316955566406 C -3.673362731933594 14.49371910095215 -4.423332214355469 18.23457908630371 -4.423332214355469 21.55134010314941 C -4.423332214355469 24.77544021606445 -3.397739410400391 28.42494010925293 -1.457450866699219 32.10530853271484 C 0.3822479248046875 35.59487152099609 3.011329650878906 39.07304000854492 6.145557403564453 42.16379928588867 C 9.273849487304688 45.24871063232422 12.79314804077148 47.83757019042969 16.322998046875 49.65052795410156 C 20.03517913818359 51.55712890625 23.70499801635742 52.56489944458008 26.93569946289062 52.56489944458008 C 30.18659973144531 52.56489944458008 33.28817749023438 51.73740005493164 36.15427780151367 50.10538101196289 C 38.82917022705078 48.58224105834961 41.22488784790039 46.40853118896484 43.27487945556641 43.64463043212891 C 47.22713851928711 38.31600189208984 49.49386978149414 31.30039978027344 49.49386978149414 24.39669036865234 C 49.49386978149414 21.09201049804688 48.6513671875 17.19956970214844 47.05744934082031 13.14018058776855 C 45.49254989624023 9.154720306396484 43.27449798583984 5.177989959716797 40.6430778503418 1.639900207519531 C 37.90353775024414 -2.043560028076172 34.80336761474609 -5.11962890625 31.6777286529541 -7.255771636962891 C 28.24599838256836 -9.601100921630859 24.87934875488281 -10.79027938842773 21.67128944396973 -10.79027938842773 M 21.67128944396973 -11.29027938842773 C 35.56914901733398 -11.29027938842773 49.99386978149414 10.49883079528809 49.99386978149414 24.39669036865234 C 49.99386978149414 38.29454040527344 40.83354949951172 53.06489944458008 26.93569946289062 53.06489944458008 C 13.03783798217773 53.06489944458008 -4.923332214355469 35.44919967651367 -4.923332214355469 21.55134010314941 C -4.923332214355469 7.653461456298828 7.773429870605469 -11.29027938842773 21.67128944396973 -11.29027938842773 Z"
                stroke="none"
                fill="#a9f6e7"
              />
            </g>
            <path
              d="M4733,1440.5l14.469,12.159L4733,1465.211"
              transform="translate(-4685.464 -1404.268)"
              fill="none"
              stroke="#4a4038"
              strokeLinecap="round"
              strokeWidth="1.2"
            />
            <path
              d="M4733,1440.5l14.469,12.159L4733,1465.211"
              transform="translate(-4696.464 -1404.268)"
              fill="none"
              stroke="#4a4038"
              strokeLinecap="round"
              strokeWidth="1.2"
            />
            <path
              d="M4733,1440.5l14.469,12.159L4733,1465.211"
              transform="translate(-4690.698 -1404.268)"
              fill="none"
              stroke="#a9f6e7"
              strokeLinecap="round"
              strokeWidth="1.2"
            />
            <g transform="translate(10.931 42.758) rotate(-39)" fill="none">
              <path
                d="M23.611-11.29C38.523-11.29,54,12.088,54,27S44.171,57.76,29.26,57.76-4.923,38.859-4.923,23.947,8.7-11.29,23.611-11.29Z"
                stroke="none"
              />
              <path
                d="M 23.61132431030273 -10.79027938842773 C 20.1436939239502 -10.79027938842773 16.61713409423828 -9.669502258300781 13.12958526611328 -7.459079742431641 C 9.939205169677734 -5.437000274658203 6.834274291992188 -2.498500823974609 4.150432586669922 1.038738250732422 C 1.566875457763672 4.443840026855469 -0.5924072265625 8.347217559814453 -2.093936920166016 12.32687759399414 C -3.617847442626953 16.36582946777344 -4.423336029052734 20.38402938842773 -4.423336029052734 23.94708824157715 C -4.423336029052734 27.41227912902832 -3.321475982666016 31.33390045166016 -1.236885070800781 35.28797149658203 C 0.7387428283691406 39.03535079956055 3.561912536621094 42.77034759521484 6.927413940429688 46.08917999267578 C 10.28650283813477 49.40167999267578 14.06562423706055 52.181640625 17.85622406005859 54.12851715087891 C 21.84433364868164 56.17683792114258 25.7876148223877 57.259521484375 29.25976371765137 57.259521484375 C 32.75422668457031 57.259521484375 36.088134765625 56.37004852294922 39.16888427734375 54.61579895019531 C 42.0433349609375 52.97903060913086 44.61759185791016 50.64339828491211 46.82016372680664 47.67377853393555 C 48.9319953918457 44.82650756835938 50.59244537353516 41.55284118652344 51.7553825378418 37.94369888305664 C 52.89671325683594 34.40161895751953 53.49999237060547 30.61735916137695 53.49999237060547 27 C 53.49999237060547 23.44972991943359 52.59516525268555 19.26873970031738 50.8833122253418 14.90901947021484 C 49.20309448242188 10.62985992431641 46.82162475585938 6.360107421875 43.99634552001953 2.561370849609375 C 41.05457305908203 -1.394001007080078 37.72525405883789 -4.697349548339844 34.36830520629883 -6.991580963134766 C 30.68006324768066 -9.512210845947266 27.06089401245117 -10.79027938842773 23.61132431030273 -10.79027938842773 M 23.61132431030273 -11.29027938842773 C 38.52301406860352 -11.29027938842773 53.99999237060547 12.08831024169922 53.99999237060547 27 C 53.99999237060547 41.91168975830078 44.17145538330078 57.759521484375 29.25976371765137 57.759521484375 C 14.34808349609375 57.759521484375 -4.923336029052734 38.85877990722656 -4.923336029052734 23.94708824157715 C -4.923336029052734 9.035388946533203 8.699642181396484 -11.29027938842773 23.61132431030273 -11.29027938842773 Z"
                stroke="none"
                fill="#a9f6e7"
              />
            </g>
            <g transform="translate(21.036 22.588)" fill="none">
              <path
                d="M20.448-4.773C35.36-4.773,54,12.088,54,27A27,27,0,0,1,27,54C12.088,54-7.244,41.912-7.244,27S5.537-4.773,20.448-4.773Z"
                stroke="none"
              />
              <path
                d="M 20.44824028015137 -4.272701263427734 C 16.94496917724609 -4.272701263427734 13.45373916625977 -3.328773498535156 10.07154083251953 -1.467144012451172 C 6.939338684082031 0.2568893432617188 3.938858032226562 2.784206390380859 1.394489288330078 5.841606140136719 C -1.085670471191406 8.821846008300781 -3.140621185302734 12.30896759033203 -4.548198699951172 15.92597579956055 C -5.984798431396484 19.61755752563477 -6.744140625 23.4468879699707 -6.744140625 26.99999809265137 C -6.744140625 30.46785736083984 -5.675540924072266 33.9138069152832 -3.568019866943359 37.24212646484375 C -1.64263916015625 40.28279876708984 1.175148010253906 43.20331573486328 4.580738067626953 45.68795776367188 C 7.840511322021484 48.06620788574219 11.62442779541016 50.04354858398438 15.52343940734863 51.40619659423828 C 19.44282913208008 52.77597808837891 23.4113597869873 53.49999618530273 27 53.49999618530273 C 30.57769966125488 53.49999618530273 34.04811096191406 52.79940795898438 37.31483840942383 51.41769790649414 C 40.47037887573242 50.0830192565918 43.30445861816406 48.17220687866211 45.73833084106445 45.73832702636719 C 48.17221069335938 43.30445861816406 50.0830192565918 40.47037887573242 51.41770172119141 37.31483840942383 C 52.79940795898438 34.0481071472168 53.5 30.57769775390625 53.5 26.99999809265137 C 53.5 23.490966796875 52.46181106567383 19.78387832641602 50.41426849365234 15.98171615600586 C 48.5075798034668 12.44110870361328 45.76226806640625 8.950607299804688 42.47513961791992 5.887565612792969 C 39.21968841552734 2.854057312011719 35.51731109619141 0.3157386779785156 31.76823043823242 -1.452972412109375 C 27.85812950134277 -3.297653198242188 23.94373893737793 -4.272701263427734 20.44824028015137 -4.272701263427734 M 20.44824028015137 -4.772701263427734 C 35.35993194580078 -4.772701263427734 54 12.08831787109375 54 26.99999809265137 C 54 41.91168594360352 41.91168975830078 53.99999618530273 27 53.99999618530273 C 12.08831024169922 53.99999618530273 -7.244140625 41.91168594360352 -7.244140625 26.99999809265137 C -7.244140625 12.08831787109375 5.53656005859375 -4.772701263427734 20.44824028015137 -4.772701263427734 Z"
                stroke="none"
                fill="#4a4038"
              />
            </g>
            <p className={styles.GetStarted}>
              get started <b>now!</b>
            </p>
          </svg>
        </div>
      </main>
    </>
  );
}
